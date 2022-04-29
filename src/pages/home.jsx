import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../providers/authContext';
import UserInfo from "../pages/UserInfo";
import { useDocument } from '../hooks';


const Home = () => {
  const { user } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  const dataOkay = useDocument('/staticData/state');
  const dataOk = () => {
    console.log(dataOkay);
  }

  return (
    <>
      Thats home
      <UserInfo/>
    </>
  );
};
export default Home;
