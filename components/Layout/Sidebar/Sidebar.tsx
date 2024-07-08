import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import { Button } from '@/components/ui/button';
import { items } from '@/config/nav';
import {
  openLoginModal,
  openRegisterModal,
} from '@/store/slices/authModalsSlice';
import { RootState } from '@/store';
import LogoutButton from './LogoutButton';
import {  useRouter } from 'next/navigation';

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { authStatus, role } = useSelector((state: RootState) => state.user);

  return (
    <div className="hidden lg:block md:col-span-1 h-full w-full  lg:pr-6 py-7">
      <div className="w-fullflex flex-col items-end">
        <SidebarLogo />
        <div className="space-y-2 ">
          {items.map((item) => (
            <SidebarItem
              auth={authStatus}
            
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}

          {authStatus === 'not authenticated' ? (
            <div className="w-full flex flex-col space-y-2 py-10">
              <Button
                size={'lg'}
                variant={'default'}
                onClick={() => dispatch(openLoginModal())}
              >
                Войти
              </Button>
              <Button
                size={'lg'}
                variant={'outline'}
                onClick={() => dispatch(openRegisterModal())}
              >
                Создать аккаунт
              </Button>
            </div>
          ) : (
            <div className="w-full flex flex-col space-y-2 py-10">
              { role !== "author" ? (
                <Button
                  size={'lg'}
                  variant={'default'}
                  onClick={() => router.push('/suggest')}
                >
                  Предложить пост
                </Button>
              ) : (
                <Button
                  size={'lg'}
                  variant={'default'}
                  onClick={() => router.push('/create')}
                >
                  Создать пост
                </Button>
              )}

              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
