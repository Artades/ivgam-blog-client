'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearShareLink,
  closeShareModal,
  openShareModal,
} from '@/store/slices/shareModalSlice';
import { RootState } from '@/store';
import { Input } from '../ui/input';

const ShareModal = () => {
  const dispatch = useDispatch();
  const [isCopied, setCopied] = useState<boolean>(false);

  const { isShareModalOpened, shareLink } = useSelector(
    (state: RootState) => state.shareModal,
  );

  const handleShare = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide the message after 2 seconds
    });
  };

  const handleClose = () => {
    dispatch(closeShareModal());
    dispatch(clearShareLink());
  };
  return (
    <Dialog
      open={isShareModalOpened}
      onOpenChange={() => dispatch(openShareModal())}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div
            onClick={handleClose}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
          <DialogTitle className="text-lg font-bold">Спасибо</DialogTitle>
          <DialogDescription className="text-sm mt-2">
            За ваше внимание к нашему блогу. Поделитесь этим постом с друзьями
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="w-full mt-4">
          <div className="w-full flex  items-center space-x-2">
            <Input value={shareLink} readOnly />
            <Button
              onClick={handleShare}
              variant={isCopied ? 'ghost' : 'default'}
            >
              {isCopied ? 'Скопировано' : 'Скопировать'}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
