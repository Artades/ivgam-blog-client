'use client';

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
import Link from 'next/link';
import {
  closeNoAccessModal,
  openNoAccessModal,
} from '@/store/slices/noAccessModalSlice';
import { TbLockAccess } from "react-icons/tb";

export function NoAccessModal() {
  const dispatch = useDispatch();
  const { isNoAccessModalOpened } = useSelector(
    (state: RootState) => state.noAccessModal,
  );


  return (
    <Dialog
      open={isNoAccessModalOpened}
      onOpenChange={() => dispatch(openNoAccessModal())}
    >
      <DialogContent>
        <DialogHeader className='flex items-center gap-y-2'>
          <div
            onClick={() => dispatch(closeNoAccessModal())}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
          <TbLockAccess className='text-zinc-200 size-40 ' />
          <DialogTitle className='text-2xl'>Недостаточно прав</DialogTitle>
          <DialogDescription className='text-lg'>
            У вас нет прав для выполнения данной операции
          </DialogDescription>

          <DialogFooter>
            <Link href={'/faq'} className="underline underline-offset-4">
              Как получить права?
            </Link>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
