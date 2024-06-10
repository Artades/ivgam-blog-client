import { Button } from '@/components/ui/button';
import React from 'react';
import { IoOpenOutline } from 'react-icons/io5';

const ReadButton = () => {
    return (
        <Button className='flex items-center justify-center gap-x-3'>
            <p className='text-md font-semibold'>Читать</p>
            {/* <IoOpenOutline className='size-5 font-bold' /> */}
        </Button>
    );
};

export default ReadButton;