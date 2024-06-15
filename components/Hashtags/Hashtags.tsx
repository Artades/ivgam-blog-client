import React, { FC } from 'react';

interface Hashtags {
    flexDir: string;
    hashtags: string[];
}
const Hashtags:FC<Hashtags> = ({flexDir, hashtags}) => {
    return (
        <ul className={`h-full flex ${flexDir} cursor-pointer items-center gap-x-3 gap-y-1 flex-wrap`}>
            {hashtags.map((item, index) => (
                <li key={index} className=' text-muted-foreground text-md hover:underline underline-offset-4 transition-all duration-500 hover:opacity-70'>#{item}</li>
            ))}
        </ul>
    );
};

export default Hashtags;