'use client';
import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SidebarItem from '../Sidebar/SidebarItem';
import SidebarLogo from '../Sidebar/SidebarLogo';
import { items } from '@/config/nav';
import LogoutButton from '../Sidebar/LogoutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store';
import {
  openLoginModal,
  openRegisterModal,
} from '@/store/slices/authModalsSlice';
import MenuIcon from './MenuIcon';

export function MobileSheet() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { authStatus, role } = useSelector((state: RootState) => state.user);

  return (
    <Sheet>
      <SheetTrigger asChild className="p-2 bg-zinc-900 rounded-lg">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <div className="col-span-1 h-full w-full ">
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
                  unavailable={item.unavailable}
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
                  {role !== 'author' ? (
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
      </SheetContent>
    </Sheet>
  );
}
