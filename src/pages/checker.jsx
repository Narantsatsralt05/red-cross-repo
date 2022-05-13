import React, { useEffect } from 'react';
import { useCollection } from '../common/services/firebase';
import { useRouter } from 'next/router';
import { useAuthContext } from '../common/context/AuthContext';
import { Loading } from '../components';
import { LoaderContext, useLoaderContext } from '../common/context/LoaderContext';

const Checker = () => {
  const { setLoader } = useLoaderContext()
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
        router.push('/userHome');
      }
    }
  });

  return <Loading />;
};
export default Checker;
