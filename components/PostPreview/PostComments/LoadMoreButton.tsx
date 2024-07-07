import { Button } from '@/components/ui/button';
import React, { FC, Dispatch, SetStateAction } from 'react';

interface LoadMoreButtonProps {
    setPage: Dispatch<SetStateAction<number>>;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ setPage }) => {

    const loadMore = () => {
        setPage((prev) => prev + 1);
    };


    return (
        <Button className='mx-5 my-5' onClick={loadMore}>
            Загрузить еще
        </Button>
    );
};

export default LoadMoreButton;
