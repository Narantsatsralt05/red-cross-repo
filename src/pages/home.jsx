
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../providers/authContext';

const Home = () => {
    const { user } = useAuthContext();

    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            router.push('/login');
        }
    }, [user]);

    return <>Thats home</>;
};
export default Home;