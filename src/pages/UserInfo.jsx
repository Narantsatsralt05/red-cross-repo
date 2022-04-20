import Menu from '../components/common/select';
import {useState} from 'react'
import { Stack, Text, StyledInput, Padding } from '../components';

const UserInfo = () => {
  const [sainred,setsainred]=useState(false)
  const [memberred,setmemberred]=useState(false)
  const [donorred,setdonorred]=useState(false)
  const [kidred,setkidred]=useState(false)
  const [bloodred,setbloodred]=useState(false)
  const [cityred,setcityred]=useState(false)
  const [duuregred,setduuregred]=useState(false)
  const [bairred,setbairred]=useState(false)
  const [hugjilred,sethugjilred]=useState(fa) 
  const sain = [{ text: 'Тийм' }, { text: 'Үгүй' }];
  const member = [{ text: 'Алтан гишүүн' }];
  const donor = [{ text: 'Тийм' }, { text: 'Үгүй' }];
  const duureg = [
    { text: 'Багануур' },
    { text: 'Багахангай' },
    { text: 'Баянгол' },
    { text: 'Баянзүрх' },
    { text: 'Налайх' },
    { text: 'Сонгинохайрхан' },
    { text: 'Сүхбаатар' },
    { text: 'Хан-Уул' },
    { text: 'Чингэлтэй' },
  ];
  const hugjil = [{ text: 'Тийм' }, { text: 'Үгүй' }];
  const kid = [{ text: 'Тийм' }, { text: 'Үгүй' }];
  const blood = [
    { text: 'A+' },
    { text: 'O+' },
    { text: 'B+' },
    { text: 'AB+' },
    { text: 'A-' },
    { text: 'O-' },
    { text: 'B-' },
    { text: 'AB-' },
  ];
  const city = [
    { text: 'Улаанбаатар' },
    { text: 'Архангай' },
    { text: 'Баян-Өлгий' },
    { text: 'Баянхонгор' },
    { text: 'Булган' },
    { text: 'Говь-Алтай' },
    { text: 'Говьсүмбэр' },
    { text: 'Дархан-Уул' },
    { text: 'Дорноговь' },
    { text: 'Дорнод' },
    { text: 'Дундговь' },
    { text: 'Завхан' },
    { text: 'Орхон' },
    { text: 'Өвөрхангай' },
    { text: 'Өмнөговь' },
    { text: 'Сүхбаатар' },
    { text: 'Сэлэнгэ' },
    { text: 'Төв' },
    { text: 'Увс' },
    { text: 'Ховд' },
    { text: 'Хөвсгөл' },
    { text: 'Хэнтий' },
  ];
  return (
    <Stack width="100%" height="83.7vh" justifyContent="center">
      <Padding size="30">
        <Stack width="100%" direction="column" gap="25">
          <Stack direction="row">
            <Text fontSize="14px">1. ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ  </Text>
          </Stack>
          <Stack direction="row" gap="25">
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Сайн дурын идэвхтэн{sainred ? <Text color="red">*</Text> :''} </Text>
              <Menu arr={sain} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Гишүүнчлэл{memberred ? <Text color="red">*</Text> :''}</Text>
              <Menu arr={member} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Цусны донор{donorred ? <Text color="red">*</Text> :''}</Text>
              <Menu arr={donor} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Хүүхэд залуучуудын хөдөлгөөний гишүүн{kidred ? <Text color="red">*</Text> :''}</Text>
              <Menu arr={kid} />
            </Stack>
          </Stack>
          <Stack direction="row" gap="25">
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Цусны бүлэг{bloodred ? <Text color="red">*</Text> :''}</Text>
              <Menu arr={blood} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Амьдарч буй, аймаг/хот{cityred ? <Text color="red">*</Text> :''}</Text>
              <Menu arr={city} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Сум/дүүрэг{duuregred ? <Text color="red">*</Text> :''}</Text>
              <Menu arr={duureg} />
            </Stack>
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Байр, орц, гудамж{bairred ? <Text color="red">*</Text> :''}</Text>
              <StyledInput></StyledInput>
            </Stack>
          </Stack>
          <Stack direction="row" gap="25">
            <Stack direction="column" gap="12">
              <Text fontSize="12px">Хөгжлийн бэрхшээлтэй иргэн эсэх{hugjilred ? <Text color="red">*</Text> :''}</Text>
              <Menu arr={hugjil} />
            </Stack>
          </Stack>
        </Stack>
      </Padding>
    </Stack>
  );
};
export default UserInfo;
