import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../providers/authContext';
import UserInfo from './UserInfo';
import { Stepper } from '../components';

const Home = () => {
  const { user } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  const data = {
    header: 'ХЭРЭГЛЭГЧИЙН ДЭЛГЭРЭНГҮЙ МЭДЭЭЛЭЛ БҮРТГЭХ',
    headers: ['ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ', 'САЙН ДУРЫН АЖЛЫН ТУРШЛАГА', 'ХАМРАГДСАН СУРГАЛТ', 'УР ЧАДВАР'],
    body: [<UserInfo />, <>2</>, <>3</>, <>4</>],
  };

  return <Stepper data={data} />;
};
export default Home;
