import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';

interface PostImageProps {
  id: number;
}
const PostImage: FC<PostImageProps> = ({ id }) => {
  const [src, setSrc] = useState<string>('');

  const generalLink = process.env.DEV_LINk;

  useEffect(() => {
    setSrc(`${generalLink}/uploads/${id}`);
  }, [id]);
  const testSRC = '/assets/test.png';

  return <Image src={testSRC} priority width={400} height={400}  alt={`Image for post #${id}`}  quality={100} className='object-cover rounded-t-lg w-full h-full '/>;

};

export default PostImage;
