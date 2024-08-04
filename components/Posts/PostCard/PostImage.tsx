import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
const IMAGE_API = process.env.api_url; 
interface PostImageProps {
  id: number;
  src: string;
}

const PostImage: FC<PostImageProps> = ({ id, src }) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    
    const generalLink = process.env.api_url;
    console.log(generalLink + src);
    setImageSrc(`${IMAGE_API}${src}`);
  }, [src]);

  if (!imageSrc) {
    return null; // Optionally, you can render a placeholder or loading spinner here
  }

  return (
    <Image
      src={imageSrc}
      priority
      width={400}
      height={400}
      alt={`Image for post #${id}`}
      quality={100}
      className="object-cover object-center  rounded-lg w-full h-full "
    />
  );
};

export default PostImage;
