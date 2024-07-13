import React, { FC } from 'react';
import { Card } from "@/components/ui/card"

interface Hashtags {
    flexDir: string;
    hashtags: string[];
    position: "aside" | "post-page";
}

const Hashtags:FC<Hashtags> = ({flexDir, hashtags, position}) => {
    
    return (
      <>
        {position === 'aside' ? (
          <Card className="w-full p-4 rounded-lg bg-transparent">
            <div className="w-full flex flex-col items-start space-y-5">
              <h2 className="font-bold text-xl">Популярные хэштэги</h2>
              <ul className="w-full  flex flex-col gap-y-3 h-full">
                {hashtags?.map((hashtag, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground text-md hover:underline underline-offset-4 transition-all duration-500 hover:opacity-700 cursor-pointer"
                  >
                   #{hashtag}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ) : (
          <ul
            className={`h-full flex ${flexDir} cursor-pointer items-center gap-x-3 gap-y-1 flex-wrap`}
          >
            {hashtags.map((item, index) => (
              <li
                key={index}
                className="text-muted-foreground text-md hover:underline underline-offset-4 transition-all duration-500 hover:opacity-70"
              >
                #{item}
              </li>
            ))}
          </ul>
        )}
      </>
    );
};

export default Hashtags;