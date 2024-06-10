import { Button } from '@/components/ui/button';
import React from 'react';
import { BsShare, BsShareFill } from 'react-icons/bs';
import { IoShareOutline } from 'react-icons/io5';

const ShareButton = () => {
  return (
    <Button variant={"default"} className="flex items-center justify-center gap-x-3">
      
      <IoShareOutline className="size-5 font-bold" />
    </Button>
  );
};

export default ShareButton;
