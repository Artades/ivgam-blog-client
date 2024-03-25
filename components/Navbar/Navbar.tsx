import React from 'react';
import Article from './Article';
import { MobileSheet } from '../Layout/MobileSheet/MobileSheet';

const Navbar = ({article}: {article: string}) => {
    return (
        <nav className='w-full flex items-center justify-between  bg-black/60 backdrop-blur-md py-7 lg:px-5 px-0 border-b-zinc-800 border-b-[1px]'>
            <Article label={article} />
            <div className='block sm:hidden'>
                <MobileSheet />
            </div>
        </nav>
    );
};

export default Navbar;