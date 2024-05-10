'use client';


import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { RootState } from '@/store';

import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { closeSuccessModal, openSuccessModal } from '@/store/slices/successModalSlice';



export function SuccessModal() {
  const dispatch = useDispatch();
  const { isSuccessModalOpened } = useSelector(
    (state: RootState) => state.successModal,
  );
  const router = useRouter();




  return (
    <Dialog
      open={isSuccessModalOpened}
      onOpenChange={() => dispatch(openSuccessModal())}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div
            onClick={() => dispatch(closeSuccessModal())}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
          <DialogTitle>Поздравляем!</DialogTitle>
          <DialogDescription>
           Ваша заявка была успешно отправлена 
          </DialogDescription>
        </DialogHeader>
       
      </DialogContent>
    </Dialog>
  );
}
