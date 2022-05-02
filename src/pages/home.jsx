import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../providers/authContext';
import ProfileHome from "./ProfileHome"

const Home = () => {
  const { user } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  return <ProfileHome/>;
};
export default Home;