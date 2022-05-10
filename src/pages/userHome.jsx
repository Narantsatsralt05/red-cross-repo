// import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useAuthContext } from '../providers/authContext';

// const UserHome = () => {
//   const { user } = useAuthContext();
//   const router = useRouter();

//   useEffect(() => {
//     if (user === null) {
//       router.push('/login');
//     }
//   }, [user]);
//   return <>thats user home</>;
// };
// export default UserHome;




import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../providers/authContext';
import RightBar from '../components/common/rightBar';
import { SkillTable, CoveredTrainingTable, MembershipInformationTable, VolunteerWorkInformationTable, HelpInformationTable, EmergencyContactPersonTable } from '../components/common/informationSections/sections'
import RightBarCheck from '../components/common/rightBarCheck';

const UserHome = () => {
    const { user } = useAuthContext();

    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            router.push('/login');
        }
    }, [user]);

    return <>
        <SkillTable admin={true} />
        <CoveredTrainingTable admin={true} />
        <MembershipInformationTable admin={true} />
        <VolunteerWorkInformationTable admin={true} />
        <HelpInformationTable admin={true} />
        <EmergencyContactPersonTable admin={true} />
        {/* <RightBar /> */}
        {/* <RightBarCheck /> */}

    </>
};
export default UserHome;