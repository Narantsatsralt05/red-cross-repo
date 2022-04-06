import React from 'react';
import { useAuthContext } from '../providers/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Leftbar from '../components/common/leftbar';

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    } else if (user != null) {
      router.push('/home');
    }
  }, [user]);
  return <>Redirecting...</>;
}