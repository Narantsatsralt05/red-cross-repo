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
import { useAuthContext } from '../../common/context/AuthContext';
import { useLoaderContext } from '../../common/context/LoaderContext';
import Login from './login';
import { CoveredTrainingTable, EmergencyContactPersonTable, HelpInformationTable, MembershipInformationTable, SkillTable, VolunteerWorkInformationTable } from '../../components';

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
        <MembershipInformationTable admin='true' />
        <CoveredTrainingTable admin='true' />
        <SkillTable admin='true' />
        <VolunteerWorkInformationTable admin='true' />
        <HelpInformationTable admin='true' />
        <EmergencyContactPersonTable admin='true' />
    </>;
};
export default UserHome;
