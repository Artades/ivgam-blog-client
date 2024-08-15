'use client';

import { Button } from '@/components/ui/button';
import { openShareModal, setShareLink } from '@/store/slices/shareModalSlice';
import React from 'react';
import { IoShareOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

const ShareButton = ({ postId }: { postId: number }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setShareLink(`https://ivgam.blog/posts/${postId}`));
    dispatch(openShareModal());
  };
  return (
    <Button
      onClick={handleClick}
      variant={'default'}
      className="flex items-center justify-center gap-x-3"
    >
      <IoShareOutline className="size-5 font-bold" />
    </Button>
  );
};

export default ShareButton;
