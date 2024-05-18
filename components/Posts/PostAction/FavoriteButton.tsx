import React, { FC, useState } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { Button } from '@/components/ui/button';

interface FavoriteButtonProps {
  isLiked: boolean;
  amount: number
}
const FavoriteButton:FC<FavoriteButtonProps> = ({isLiked, amount}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(isLiked);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="group flex items-center space-x-2">
      <IoMdHeartEmpty
        className={`size-7 font-bold cursor-pointer ${isHovered  ? 'text-rose-500' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
      <span className="text-md">{amount}</span>
    </div>
  );
};

export default FavoriteButton;
