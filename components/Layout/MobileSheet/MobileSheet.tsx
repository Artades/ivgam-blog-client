"use client"
import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Sidebar from '../Sidebar/Sidebar';
import SidebarItem from '../Sidebar/SidebarItem';
import SidebarLogo from '../Sidebar/SidebarLogo';
import { items } from '@/config/nav';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import LogoutButton from '../Sidebar/LogoutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store';
import { openLoginModal, openRegisterModal } from '@/store/slices/authModalsSlice';

export function MobileSheet() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { authStatus } = useSelector((state: RootState) => state.authStatus);

  return (
    <Sheet>
      <SheetTrigger asChild className="p-2 bg-zinc-900 rounded-lg">
        <HiOutlineMenuAlt2 className="w-10 h-10 text-white" />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <div className="col-span-1 h-full w-full ">
          <div className="w-fullflex flex-col items-end">
            <SidebarLogo />
            <div className="space-y-2 ">
              {items.map((item) => (
                <SidebarItem
                  key={item.href}
                  // alert={item.alert}
                  // auth={item.auth}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                />
              ))}

              {/* <SidebarItem
              // onClick={() => signOut()}
              icon={BiLogOut}
              label=""
            /> */}

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
                  <Button
                    size={'lg'}
                    variant={'default'}
                    onClick={() => router.push('/suggest')}
                  >
                    Предложить пост
                  </Button>

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
