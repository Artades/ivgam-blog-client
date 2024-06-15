'use client';

import useCurrentUser from '@/hooks/userCurrentUser';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import * as Api from '@/api';
import { showErrorToast } from '@/components/Error/showErrorToast';
import { Button } from '@/components/ui/button';

const images = [
  '/assets/default-blue.png',
  '/assets/default-red.png',
  '/assets/default-slate.png',
];

const ProfilePicturePage = () => {
  const [chosenPicture, setChosenPicture] = useState<string>('');
  const router = useRouter();

  const selectProfile = async () => {
    try {
      const response = await Api.users.updateProfilePicture(
        currentUser.id,
        chosenPicture,
      );
      console.log(response)
      if (response.success === true) {
        router.push('/posts');
      } else {
        showErrorToast('Возникла ошибка при установлении картинки профиля');
      }
    } catch (error) {
      showErrorToast('Возникла ошибка при установлении картинки профиля');
      console.log(
        'Error occured while updating Profile Picture for' + currentUser.name,
      );
    }
  };

  const { data: currentUser, isLoading, error } = useCurrentUser();

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg">Загрузка страницы...</p>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg">Ошибка получения данных о пользователе</p>
      </div>
    );

  const handlePictureClick = (imgSrc: string) => {
    setChosenPicture(imgSrc);
  };

  return (
    <div className="flex items-center h-full justify-center  ">
      {chosenPicture && (
        <img
          draggable={false}
          className="w-full h-full object-cover absolute blur-3xl pointer-events-none brightness-50"
          src={chosenPicture}
          alt={chosenPicture.split("/")[2] + "picture"}
        />
      )}
      <div className="flex flex-col z-[1000] w-full">
        <h1 className="text-xl md:text-3xl text-white text-center">
          Выберите аватар (знаю, пока выбора мало 😿)
        </h1>
        <div className="w-full flex-wrap flex items-center justify-center gap-8 mt-10">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              onClick={() => handlePictureClick(imgSrc)}
              className={`w-44 h-44 rounded-md flex items-center justify-center border-2 ${chosenPicture === imgSrc ? 'border-white border-3 border-dashed' : 'border-transparent'} cursor-pointer overflow-hidden`}
            >
              <img
                draggable={false}
                className="w-max h-max object-contain"
                src={imgSrc}
                alt=""
              />
            </div>
          ))}
        </div>
        {chosenPicture && (
          <div className="mt-4 text-center">
            <Button onClick={selectProfile}>Сохранить аватар</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePicturePage;
