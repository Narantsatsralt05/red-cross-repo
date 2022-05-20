// import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useAuthContext } from '../../common/context/AuthContext';

// const UserHome = () => {
//     const { user } = useAuthContext();
//     const router = useRouter();

//     useEffect(() => {
//         if (user === null) {
//             router.push('/login');
//         }
//     }, [user]);
//     return <>thats user home</>;
// };
// export default UserHome;




import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../common/context/AuthContext';
import ProfileHome from './ProfileHome'

const UserHome = () => {
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            router.push('/login');
        }
    }, [user]);
    return <ProfileHome/>;
};
export default UserHome;

