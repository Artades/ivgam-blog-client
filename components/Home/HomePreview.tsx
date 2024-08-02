'use client';

import React from 'react';
import { Button } from '../ui/button';
import { TopicItem } from './TopicItem';
import { useDispatch } from 'react-redux';
import {
  openLoginModal,
  openRegisterModal,
} from '@/store/slices/authModalsSlice';
import useAuthentication from '@/hooks/useAuth';

const HomePreview = () => {
  useAuthentication();
  const dispatch = useDispatch();

  const topics = [
    {
      id: 1,
      title: 'Технологии',
    },
    {
      id: 2,
      title: 'Жизнь',
    },
    {
      id: 3,
      title: 'Искусство',
    },
    {
      id: 4,
      title: 'Психология',
    },
  ];
  return (
    <div className="w-full sm:h-screen py-10 md:p-10 flex flex-col items-center justify-center bg-grid relative">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.8))]"></div> */}
      <div className="w-full text-white font-bold text-center gap-y-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl md:text-4xl font-extrabold">Ivgam Blog</h1>

        <div className="text-sm md:text-xl font-light text-zinc-400 px-10">
          Здесь я делюсь своими историями, идеями и приключениями. Но что еще
          круче – вы тоже можете стать частью этого процесса! Предложите свою
          идею для статьи, и мы с удовольствием воплотим ее в жизнь.
        </div>
        <div className="w-full grid grid-cols-2 gap-5">
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
        <div className="w-full flex flex-col items-center">
          <h2 className="text-xl text-semibold mb-5">
            Популярные топики в блоге:{' '}
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-5">
            {topics.map((topic) => (
              <TopicItem key={topic.id} title={topic.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePreview;
