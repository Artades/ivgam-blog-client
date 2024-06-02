import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';

interface PostImageProps {
  id: number;
  src: string;
}
const PostImage: FC<PostImageProps> = ({ id, src }) => {
  const [imageSrc, setImageSrc] = useState<string>('');



  useEffect(() => {
      const generalLink = "http://localhost:4000/api";
    setImageSrc(`${generalLink}${src}`);
  }, []);


  return <Image src={imageSrc} priority width={400} height={400}  alt={`Image for post #${id}`}  quality={100} className='object-cover rounded-t-lg w-full h-full '/>;

};

export default PostImage;
