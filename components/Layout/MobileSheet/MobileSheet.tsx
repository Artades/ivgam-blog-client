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

export function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild className='p-2 bg-zinc-900 rounded-lg'>
       
          <HiOutlineMenuAlt2 className='w-10 h-10 text-white' />
       
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

              <div className="w-full flex flex-col space-y-2 py-10">
                <Button size={'lg'} variant={'default'}>
                  Войти
                </Button>
                <Button size={'lg'} variant={'outline'}>
                  Создать аккаунт
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
