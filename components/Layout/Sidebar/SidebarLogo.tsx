'use client';
import TransitionLink from '@/components/TransitionLink/TransitionLink';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdNotes, MdOutlineEditNote } from 'react-icons/md';

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <TransitionLink  href={'/posts'}>
      <div
        onClick={() => router.push('/posts')}
        className="relative w-full mb-10 flex items-center justify-start gap-x-1"
      >
        <h2 className="text-2xl font-[800]">Ivgam Blog</h2>
        <MdOutlineEditNote className="w-6 h-6 text-zinc-300" />
      </div>
    </TransitionLink>
  );
};

export default SidebarLogo;
