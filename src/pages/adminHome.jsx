import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuthContext } from '../providers/authContext';
import Admin from './admin';
import { useCollection } from '../hooks';

const AdminHome = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const userData = useCollection('/user');

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  userData.data.map((el) => {
    if (user.email === el.email) {
      if (el.admin === false) {
        router.push('/userHome');
      }
    }
  });
  return (
    <>
      <Admin />
    </>
  );
};
export default AdminHome;
