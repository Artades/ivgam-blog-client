'use client';
import TransitionLink from '@/components/TransitionLink/TransitionLink';
import { MessageCircleCode, Terminal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {  MdOutlineEditNote } from 'react-icons/md';

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <TransitionLink href={'/posts'}>
      <div
        onClick={() => router.push('/posts')}
        className="relative w-full mb-10 flex items-start justify-center gap-x-1"
      >
        <h2 className="text-2xl font-[800]">Ivgam Blog</h2>

        <MessageCircleCode className="w-6 h-6 text-zinc-300" />
      </div>
    </TransitionLink>
  );
};

export default SidebarLogo;
