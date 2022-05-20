import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuthContext } from '../../common/context/AuthContext';
import Admin from './index';
import { useCollection } from '../../common/services/firebase';

const AdminHome = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const userData = useCollection('/user');

  useEffect(() => {
    if (user === null) {
      router.push('/user');
    }
  }, [user]);

  userData.data.map((el) => {
    if (user.email === el.email) {
      if (el.admin === false) {
        router.push('/user');
      }
    }
  });
  return <Admin />
};
export default AdminHome;