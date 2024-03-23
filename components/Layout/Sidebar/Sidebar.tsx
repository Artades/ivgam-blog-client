'use cleint'

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import { Button } from '@/components/ui/button';
import { items } from '@/config/nav';

const Sidebar = () => {

  
  return (
    <div className="hidden lg:block md:col-span-1 h-full w-full  lg:pr-6 py-7">
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
  );
};

export default Sidebar;
