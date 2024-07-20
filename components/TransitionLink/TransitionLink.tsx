import { handleTransition, sleep } from '@/helpers/transitions';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import React, { FC, ReactNode } from 'react';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

const TransitionLink: FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const redirect = () => {
    router.push(href);
  };
  return (
    <Link
      onClick={(e) => handleTransition(e, redirect, 500)}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
