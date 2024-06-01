import React, { FC, useState, useCallback, useEffect } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import * as Api from '@/api';

interface FavoriteButtonProps {
  userId: number;
  postId: number;
  isLiked: boolean;
  amount: number;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({
  userId,
  isLiked,
  amount,
  postId,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(amount);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsFavorite(isLiked);
    setLikeCount(amount);
  }, [isLiked, amount]);

  const handleToggleFavorite = useCallback(async () => {
    if (isLoading) return;

    // Сохраняем предыдущее состояние для отката в случае ошибки
    const previousIsFavorite = isFavorite;
    const previousLikeCount = likeCount;

    // Обновляем состояние локально
    setIsFavorite(!isFavorite);
    setLikeCount((prevCount) => prevCount + (isFavorite ? -1 : 1));

    setIsLoading(true);

    try {
      if (isFavorite) {
        await Api.posts.unlikePost(postId, userId);
      } else {
        await Api.posts.likePost(postId, userId);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      // Откатываем состояние в случае ошибки
      setIsFavorite(previousIsFavorite);
      setLikeCount(previousLikeCount);
    } finally {
      setIsLoading(false);
    }
  }, [isFavorite, isLoading, likeCount, postId, userId]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="group flex items-center space-x-2">
      {isFavorite ? (
        <IoMdHeart
          className="size-7 font-bold cursor-pointer text-rose-500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleToggleFavorite}
        />
      ) : (
        <IoMdHeartEmpty
          className={`size-7 font-bold cursor-pointer ${isHovered ? 'text-rose-500' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleToggleFavorite}
        />
      )}
      <span className="text-md">{likeCount}</span>
    </div>
  );
};

export default FavoriteButton;
