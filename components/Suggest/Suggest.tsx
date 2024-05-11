"use client"
import useAuthentication from '@/hooks/useAuth';
import React from 'react';
import Helmet from '../Helmet/Helmet';
import { suggestBreadcrumbs } from './constants';
import { SuggestForm } from './SuggestForm';
import useRole from '@/hooks/useRole';

const Suggest = () => {
     useAuthentication("/suggest");
     const roleStatus = useRole("reader");

     console.log("ROLE STATUS SUGGEST COMPONENT: ", roleStatus)
    return (
        <div className='w-ful'>
            <Helmet  pageTitle='Предложить пост' breadCrumbs={suggestBreadcrumbs}/>
            <SuggestForm />
        </div>
    );
};

export default Suggest;