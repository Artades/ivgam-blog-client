import { Button } from '@/components/ui/button';
import { openShareModal } from '@/store/slices/shareModalSlice';
import React from 'react';
import { BsShare, BsShareFill } from 'react-icons/bs';
import { IoShareOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

const ShareButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
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
