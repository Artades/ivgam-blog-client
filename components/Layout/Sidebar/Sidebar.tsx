'use cleint';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsHeartFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const items = [
    {
      icon: BsHouseFill,
      label: 'Главная',
      href: '/',
    },
    {
      icon: BsHeartFill,
      label: 'Избранные',
      href: '/notifications',
      auth: true,
    },
    {
      icon: FaUser,
      label: 'Профиль',
      href: `/users/`,
      auth: true,
    },
  ];

  return (
    <div className="hidden lg:block md:col-span-1 h-full w-full  lg:pr-6 py-10">
      <div className="w-full flex flex-col items-end">
        <div className="space-y-2 ">
          <SidebarLogo />
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
