import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../common/context/AuthContext';
import UserInfo from '../user/Info';
import UserInfo2 from '../user/Info2';
import { Stepper } from '../../components/common/stepper'
import { Header } from '../../components/common/header';
import { CoveredTrainingTable, EmergencyContactPersonTable, Margin, SkillTable } from '../../components';
import { Stack } from "../../components"

const data = {
  header: 'ХЭРЭГЛЭГЧИЙН ДЭЛГЭРЭНГҮЙ МЭДЭЭЛЭЛ БҮРТГЭХ',
  headers: ['ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ', 'САЙН ДУРЫН АЖЛЫН ТУРШЛАГА', 'ХАМРАГДСАН СУРГАЛТ', 'УР ЧАДВАР'],
  body: [<></>, <UserInfo2 />, <CoveredTrainingTable admin={true} />, <SkillTable admin={true} />],
};
<Stepper data={data} />;
const Register = () => {
  const [step, setStep] = useState(1);
  const next = () => {
    setStep(step + 1);
  };
  const { user } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  return <Stack width="100vw" direction='column'>
    <Header admin='true' />
    <Stepper data={data} setStep={setStep} step={step} next={next} />
  </Stack>
};
export default Register;