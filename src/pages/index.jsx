import React from 'react';
import { useAuthContext } from '../common/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Loading } from '../components';

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    } else if (user != null) {
      router.push('/checker');
    }
  }, [user]);
  return <Loading />;
}
