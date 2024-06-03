'use client';

import { useEffect, useState } from 'react';
import { checkLike } from '@/helpers/checkLike';

type UseLikeHookArguments = {
  postId: number;
  userFavorites: any;
};

const useLike = ({ postId, userFavorites }: UseLikeHookArguments) => {
  const [response, setResponse] = useState<boolean>(false);

  useEffect(() => {
    const handleCheckLike = async () => {
      try {
        const likeStatus = checkLike(postId, userFavorites);
        // console.log('Like result:', likeStatus);

        if ('props' in likeStatus) {
          setResponse(true);
        } else if ('redirect' in likeStatus) {
          setResponse(false);
        }
      } catch (error) {
        console.error('Like error:', error);
        setResponse(false);
      }
    };

    handleCheckLike();
  }, [postId, userFavorites]); // Add dependencies to useEffect

  return response;
};

export default useLike;
