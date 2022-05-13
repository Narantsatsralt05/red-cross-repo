import Dropdown from '../components/common/select';
import { useState, useEffect } from 'react';
import { Stack, Text, StyledInput, Padding } from '../components';
import { useDocument } from '../hooks/useDocument';
import { useAuthContext } from '../common/context/AuthContext';
import { useRouter } from 'next/router';

const UserInfo = () => {
  const [dist, setDistrict] = useState('Улаанбаатар');
  const { user } = useAuthContext();

  const router = useRouter();
  const disss = () => {
    return 
  };
  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  const StateData = useDocument('/staticData/state');
  const BloodType = useDocument('/staticData/BloodType');

  const [sainred, setsainred] = useState(false);
  const [memberred, setmemberred] = useState(false);
  const [donorred, setdonorred] = useState(false);
  const [kidred, setkidred] = useState(false);
  const [bloodred, setbloodred] = useState(false);
  const [cityred, setcityred] = useState(false);
  const [duuregred, setduuregred] = useState(false);
  const [bairred, setbairred] = useState(false);
  const [hugjilred, sethugjilred] = useState(false);
  const sain = ['Тийм', 'Үгүй'];
  const member = ['Алтан гишүүн'];
  const donor = ['Тийм', 'Үгүй'];
  const kid = ['Тийм', 'Үгүй'];
  const setdist = (opt) => {
    setDistrict(opt);
  };

  return (
    <Stack width="100%" justifyContent="center" alignItems="center">
      <Padding size="30">
        <Stack width="100%" direction="column" gap="75">
          <Stack direction="row">
            <Text fontSize="14px">1. ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ </Text>
          </Stack>
          <Stack direction="row" gap="25" flexWrap="wrap">
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Сайн дурын идэвхтэн{sainred ? <Text color="red">*</Text> : ''} </Text>
              <Dropdown arr={sain} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Гишүүнчлэл{memberred ? <Text color="red">*</Text> : ''}</Text>
              <Dropdown arr={member} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Цусны донор{donorred ? <Text color="red">*</Text> : ''}</Text>
              <Dropdown arr={donor} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">
                Хүүхэд залуучуудын хөдөлгөөний гишүүн{kidred ? <Text color="red">*</Text> : ''}
              </Text>
              <Dropdown arr={kid} width="30px" />
            </Stack>
          </Stack>

          <Stack direction="row" gap="25" flexWrap="wrap">
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Цусны бүлэг{bloodred ? <Text color="red">*</Text> : ''}</Text>
              <Dropdown arr={BloodType.data.BloodType} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Амьдарч буй, аймаг/хот{cityred ? <Text color="red">*</Text> : ''}</Text>
              <Dropdown arr={Object.keys(StateData.data)} onClick={setdist} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Сум/дүүрэг{duuregred ? <Text color="red">*</Text> : ''}</Text>
              <Dropdown arr={StateData.data && StateData.data[dist].district} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Байр, орц, гудамж{bairred ? <Text color="red">*</Text> : ''}</Text>
              <StyledInput></StyledInput>
            </Stack>
          </Stack>
          <Stack direction="row" gap="25">
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Хөгжлийн бэрхшээлтэй иргэн эсэх{hugjilred ? <Text color="red">*</Text> : ''}</Text>
              <Dropdown />
            </Stack>
          </Stack>
        </Stack>
      </Padding>
    </Stack>
  );
};
export default UserInfo;
