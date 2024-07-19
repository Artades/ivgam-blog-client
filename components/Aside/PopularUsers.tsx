import * as React from 'react';
import { UserProps } from '@/types/user.interface';
import { Card } from '../ui/card';
import Image from 'next/image';

export function FilterUsers({ users: data }: { users: UserProps[] }) {
  return (
    <Card className="w-full p-4  rounded-lg bg-transparent">
      <div className="w-full flex flex-col items-start space-y-5">
        <h2 className="font-bold text-xl">Топ читателей</h2>
        <ul className="w-full list-decimal flex flex-col gap-y-3 h-full">
          {data?.map((user) => (
            <li key={user.id} className="flex items-center gap-x-3">
              <Image
                src={
                  user.profilePicture !== ''
                    ? user.profilePicture
                    : '/assets/default-slate.png'
                }
                alt={user.name}
                width={100}
                height={100}
                quality={100}
                className="w-10 h-10 rounded-lg"
              />
              <div className="flex items-start flex-col gap-y-1">
                <p className="text-md">
                  {user.name.split(' ')[0]}{' '}
                  {user.name.split(' ')[1].split('')[0]}.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
