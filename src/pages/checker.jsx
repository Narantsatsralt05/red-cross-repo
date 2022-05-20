import React, { useEffect } from 'react';
import { useCollection } from '../common/services/firebase';
import { useRouter } from 'next/router';
import { useAuthContext } from '../common/context/AuthContext';
import { Loading } from '../components';
import { LoaderContext, useLoaderContext } from '../common/context/LoaderContext';

const Checker = () => {
  const { setLoader } = useLoaderContext();
  const { user } = useAuthContext();
  const router = useRouter();
  const userData = useCollection('/user');

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    } else if (user && userData) {
      userData.data.map((el) => {
        if (user.email === el.email) {
          if (el.admin === true) {
            router.push('/admin/home');
          } else {
            router.push('/user/home');
          }
        }
      });
    }
  }, [user, userData]);

  return <Loading />;
};
export default Checker;
