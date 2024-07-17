'use client';
import { RootState } from '@/store';
import { openLoginModal } from '@/store/slices/authModalsSlice';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { IconType } from 'react-icons';

// import useLoginModal from '@/hooks/useLoginModal';
// import useCurrentUser from '@/hooks/useCurrentUser';
import { BsDot } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

interface SidebarItemProps {
  unavailable: boolean;
  label: string;
  icon: IconType;
  href: string;
  auth: string;
  alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  auth,
  alert,
  unavailable,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useSelector((state: RootState) => state.user);

  const handleClick = useCallback(() => {
    if (auth === 'not authenticated') {
      dispatch(openLoginModal());
    } else if (href) {
      if (href === '/profile') {
        router.push(`${href}/${id}`);
      } else if (!unavailable) {
        router.push(href);
      } else {
        return;
      }
    }
  }, [router, href, auth, dispatch, id, unavailable]);

  const pathname = usePathname();

  const activeStyle =
    href === pathname ? 'bg-zinc-300 bg-opacity-10' : 'bg-transparent';
  const unavailableStyle =
    unavailable === true
      ? "opacity-50 after:content-['Dev'] after:text-xs after:absolute after:top-1 "
      : 'opacity-100';

  return (
    <div
      className={`w-full  flex flex-row items-center relative `}
      onClick={handleClick}
    >
      <div
        className={`
        w-full
        relative
        
        flex 
        items-row 
        gap-4 
        p-4 
        rounded-lg 
        hover:bg-zinc-300
        hover:bg-opacity-10
        cursor-pointer
        items-center
        ${unavailableStyle}
        ${activeStyle}
      `}
      >
        <Icon size={24} color="white" />
        <p className=" text-white text-xl">{label}</p>
        {alert ? (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
    </div>
  );
};
export default SidebarItem;
