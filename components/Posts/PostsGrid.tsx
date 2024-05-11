import { PostItemProps } from '@/types/post.interface';
import React, { FC } from 'react';
import PostCard from './PostCard';


interface PostsGridProps {
    posts: PostItemProps[]
};

const PostsGrid :FC<PostsGridProps>= ({posts}) => {
    return (
        <div className='grid sm:grid-cols-2 grid-cols-1 w-full gap-7 '>
            {posts.map(post => (
                <PostCard data={post}/>
            ))}
        </div>
    );
};

export default PostsGrid;