import React, { FC } from 'react';
import Image from "next/image";

interface CommentItemProps {
    user: { id: number; name: string; email: string; profilePicture: string; },
    body: string,
    likes: number
}

const CommentItem: FC<CommentItemProps> = ({ user, body, likes }) => {
    return (
        <div className="w-full p-5 border-b border-zinc-800">
            <div className="flex items-center mb-2">
                <Image width={100} height={100} quality={100} src={user.profilePicture} alt={user.name} className="size-10 rounded-lg mr-3" />
                <div>
                    <h4 className="font-semibold">{user.name}</h4>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </div>
            <p className="mb-2">{body}</p>
            {/* <div className="flex items-center text-gray-500">
                <span className="mr-2">❤️ {likes}</span>
            </div> */}
        </div>
    );
};

export default CommentItem;
