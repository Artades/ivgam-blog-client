import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import { usePathname } from 'next/navigation';

export interface BreadCrumbsProps {
  items: { id: number; name: string; href: string, current: boolean }[];
}

export function BreadCrumbs({ items }: BreadCrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <BreadcrumbItem>
              {!item.current ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.name}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
