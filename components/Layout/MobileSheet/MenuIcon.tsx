import React, { forwardRef } from 'react';
import { HiOutlineMenuAlt2 as HiOutlineMenuAlt2Icon } from 'react-icons/hi';

const MenuIcon = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => (
  <span ref={ref} {...props}>
    <HiOutlineMenuAlt2Icon className=" w-full h-full text-white" />
  </span>
));


MenuIcon.displayName = 'MenuIcon';

export default MenuIcon;
