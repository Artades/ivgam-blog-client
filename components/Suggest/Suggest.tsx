"use client"
import useAuthentication from '@/hooks/useAuth';
import React from 'react';
import Helmet from '../Helmet/Helmet';
import { suggestBreadcrumbs } from './constants';

const Suggest = () => {
     useAuthentication("/suggest");
     
    return (
        <div className='w-full h-full'>
            <Helmet  pageTitle='Предложить пост' breadCrumbs={suggestBreadcrumbs}/>

        </div>
    );
};

export default Suggest;