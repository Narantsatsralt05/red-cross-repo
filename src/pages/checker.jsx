import React, { useEffect } from 'react';
import { useCollection, useDocumentWithUserOnce } from '../common/services/firebase';
import { useRouter } from 'next/router';
import { useAuthContext } from '../common/context/AuthContext';
import { Loading } from '../components';

const Checker = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push('/login')
    }
  }, [user])

  const { data: userData } = useCollection('/user');
  userData.map((el) => {
    if (user?.email === el.email) {
      if (el.admin == false && el.BloodType == undefined)
        router.push('/user/register')
      else
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
