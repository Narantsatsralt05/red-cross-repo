import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../common/context/AuthContext';
import UserInfo from './user/Info';
import UserInfo2 from './user/Info2';
import { Stepper } from '../components/common/stepper'
import {Header} from '../components/common/header';


const data = {
  header: 'ХЭРЭГЛЭГЧИЙН ДЭЛГЭРЭНГҮЙ МЭДЭЭЛЭЛ БҮРТГЭХ',
  headers: ['ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ', 'САЙН ДУРЫН АЖЛЫН ТУРШЛАГА', 'ХАМРАГДСАН СУРГАЛТ', 'УР ЧАДВАР'],
  body: [<UserInfo isStep={true} />, <UserInfo2 />, <div>ene bol 3r step</div>, <div>ene bol 4r step</div>],
};
<Stepper data={data} />;
const Register = () => {
  const { user } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  return <div>
      <Header/>
      <Stepper data={data} />
    </div>;
};
export default Register;