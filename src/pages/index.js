<<<<<<< HEAD
import React from 'react';
import { useAuthContext } from '../providers/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
=======
import styles from '../../styles/Home.module.css'
>>>>>>> 011b8a4 ([web] ESlint (#49))

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);
  return <>Redirecting...</>;