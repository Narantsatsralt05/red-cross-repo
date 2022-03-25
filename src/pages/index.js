<<<<<<< HEAD
import React from 'react';
import { useAuthContext } from '../providers/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);
  return <>Redirecting...</>;
}
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { Box } from '../components';
import {Usercard} from "../components"
import male from "../assets/icon/male.svg"
export default function Home() {
  return (
    <Usercard greenbadge={true} greybadge={true}  bluebadge={true}profile={'https://uxwing.com/wp-content/themes/uxwing/download/21-medical-science-lab/doctor-male.png'}/>
  );
}
>>>>>>> 3607013 (userCard component)
