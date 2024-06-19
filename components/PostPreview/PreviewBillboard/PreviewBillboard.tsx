import { FaRegComment } from "react-icons/fa6";
import React, { FC } from 'react';
import Image from 'next/image';
import { PostItemProps } from '@/types/post.interface';
import { Button } from '../../ui/button';
import { FiEdit2 } from 'react-icons/fi';
import Date from '../../Posts/PostAction/Date';
import Hashtags from "@/components/Hashtags/Hashtags";

interface PreviewBillboardProps {
    title: string;
    imageUrl:string;
    date: string;
    hashtags: string;
}
const PreviewBillboard:FC<PreviewBillboardProps> = ({title, imageUrl, date, hashtags}) => {
  const hashtagsArr = hashtags.split(",");
    return (
      <div className="max-w-full relative top-0 left-0 right-0 overflow-hidden border-b border-b-zinc-700">
        <Image
          width={1000}
          height={500}
          quality={100}
          priority
          src={`http://localhost:4000/api${imageUrl}`}
          alt={title}
          className="w-full h-[25rem] object-cover brightness-50"
        />
        <div className="w-full  absolute left-5 bottom-10 flex flex-col items-start gap-y-5">
          <h1 className="sm:text-4xl text-3xl  max-w-[80%] font-extrabold sm:max-w-[600px]  ">
            {title}
          </h1>

          <div className="flex items-center space-x-3 ">
            <Button className="sm:space-x-3">
              <p className="sm:block hidden">Редактировать</p>{' '}
              <FiEdit2 className="text-zinc-800 size-4" />
            </Button>
            <Button className="sm:space-x-3">
              <p className="sm:block hidden">Комментарии</p>{' '}
              <FaRegComment className="fill-zinc-800 size-4" />
            </Button>
          </div>

          <Date timestamp={date} />

        <Hashtags hashtags={hashtagsArr} flexDir="flex-row" position="post-page"/>
        </div>
      </div>
    );
};

export default PreviewBillboard;