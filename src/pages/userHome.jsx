import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../providers/authContext';

const UserHome = () => {
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            router.push('/login');
        }
    }, [user]);
    return <>thats user home</>;
};
export default UserHome;
