import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoOpenOutline } from 'react-icons/io5';

const ReadButton = ({id}: {id: string}) => {
    const router = useRouter();
    return (
        <Button onClick={() => router.push(`/posts/${id}`) } className='flex items-center justify-center gap-x-3'>
            <p className='text-md font-semibold'>Читать</p>
            {/* <IoOpenOutline className='size-5 font-bold' /> */}
        </Button>
    );
};

export default ReadButton;