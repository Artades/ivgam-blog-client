'use client';

import React, { useEffect, useState } from 'react';
import { FilterUsers } from './PopularUsers';
import * as Api from '@/api';
import Hashtags from '../Hashtags/Hashtags';
import { UserProps } from '@/types/user.interface';

const Aside = () => {
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Параллельный фетч с использованием Promise.all
        const [fetchedHashtags, fetchedUsers] = await Promise.all([
          Api.aside.getPopularHashtags(),
          Api.aside.getActiveUsers(),
        ]);

        // Установка данных в стейт
        setHashtags(fetchedHashtags);
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>; // Лоадер или индикатор загрузки
  }

  return (
    <div className="bg-transparent w-full flex flex-col items-center gap-y-5">
      <FilterUsers users={users} />
      <Hashtags hashtags={hashtags} flexDir="flex-col" position="aside" />
    </div>
  );
};

export default Aside;
