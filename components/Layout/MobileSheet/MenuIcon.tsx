import React, { forwardRef } from 'react';
import { HiOutlineMenuAlt2 as HiOutlineMenuAlt2Icon } from 'react-icons/hi';

const MenuIcon = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => (
  <span ref={ref} {...props}>
    <HiOutlineMenuAlt2Icon className="size-7 text-white" />
  </span>
));

export default MenuIcon;
