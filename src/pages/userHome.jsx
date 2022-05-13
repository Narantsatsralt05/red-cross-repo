// import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useAuthContext } from '../common/context/AuthContext';

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



import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../common/context/AuthContext';
import { useLoaderContext } from '../common/context/LoaderContext';
import Login from './login';

const UserHome = () => {
    const { user } = useAuthContext();
    const { setLoader } = useLoaderContext()
    const test = () => {
        setLoader(true)
    }
    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            router.push('/login');
        }
    }, [user]);
    return <>
        {/* <button onClick={test}>hey</button> */}

    </>;
};
export default UserHome;
