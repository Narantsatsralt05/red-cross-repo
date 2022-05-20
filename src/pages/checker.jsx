import React, { useEffect } from 'react';
import { useCollection, useDocumentWithUserOnce } from '../common/services/firebase';
import { useRouter } from 'next/router';
import { useAuthContext } from '../common/context/AuthContext';
import { Loading } from '../components';
import { useLoaderContext } from '../common/context/LoaderContext';

const Checker = () => {
  const { setLoader } = useLoaderContext();
  const { user } = useAuthContext();
  const router = useRouter();
  const userData = useCollection('/user');

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  const userData = useCollection('/user');
  userData.data.map((el) => {
    if (user?.email === el.email) {
      if (el.admin === true) {
        router.push('/admin/home');
      } else {
        router.push('/user/home');
      }
    }
  });

  return <Loading />;
};
export default Checker;
