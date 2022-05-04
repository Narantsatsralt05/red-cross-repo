import React, { useEffect } from 'react';
import { useCollection } from '../hooks';
import { useRouter } from 'next/router';
import { useAuthContext } from '../providers/authContext';
import { loading } from '../components';

const Checker = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  const userData = useCollection('/user');
  userData.data.map((el) => {
    if (user.email === el.email) {
      if (el.admin === true) {
        router.push('/adminHome');
      } else {
        router.push('userHome');
      }
    }
  });

  return <loading />;
};
export default Checker;
