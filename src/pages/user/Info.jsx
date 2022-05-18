import Dropdown from '../../components/common/dropdown';
import { useState, useEffect } from 'react';
import { Stack, Text, StyledInput, Padding, Button } from '../../components';
import { addDocument, setDocument, useDocument } from '../../common/services/firebase';
import { useAuthContext } from '../../common/context/AuthContext';
import { useRouter } from 'next/router';

const UserInfo = ({ isStep }) => {
  const [dist, setDistrict] = useState('Улаанбаатар');
  const { user } = useAuthContext();
  const { data: Info } = useDocument(`/user/${user.uid}`)
  const InfoNew = Info
  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  const { data: StateData } = useDocument('/staticData/state');
  const { data: BloodType } = useDocument('/staticData/BloodType');

  const [value, setValue] = useState({
    beneficiary:'',
    member: '',
    youthMovementMember: '',
    volunteer: '',
    bloodDonor: '',
    disabilities: '',
    phoneNumber: isStep ? '' : Info?.phoneNumber,
    gender: isStep ? '' : Info?.gender,
    city: isStep ? '' : Info?.city,
    district: isStep ? '' : Info?.district,
    moreInfo: isStep ? '' : Info?.moreInfo,
    email: isStep ? '' : Info?.email,
    birthdate: isStep ? '' : Info?.birthdate,
    bloodType: isStep ? '' : Info?.bloodType
  })

  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };
  const sain = ['Тийм', 'Үгүй'];
  const member = ['Алтан гишүүн'];
  const donor = ['Тийм', 'Үгүй'];
  const kid = ['Тийм', 'Үгүй'];
  const setdist = (opt) => {
    setDistrict(opt);
  };
  // addDocument(`/user/${user.uid}`, value)
  const add = () => {
    setDocument(`/user/${user.uid}`, value)
  }
  return (
    isStep ?
      <Stack width="100%" justifyContent="center" alignItems="center" >
        <Padding size="30">
          <Stack width="100%" direction="column" gap="75">
            <Stack direction="row">
              <Text fontSize="14px">1. ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ </Text>
            </Stack>
            <Stack direction="row" gap="25" flexWrap="wrap">
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Сайн дурын идэвхтэн{<Text color="red">*</Text>} </Text>
                <Dropdown arr={sain} id='volunteer' value={value.volunteer} setdropValue={setValue} dropValue={value} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Гишүүнчлэл{<Text color="red">*</Text>}</Text>
                <Dropdown arr={member} id='member' value={value.member} setdropValue={setValue} dropValue={value} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Цусны донор{<Text color="red">*</Text>}</Text>
                <Dropdown arr={donor} id='bloodDonor' value={value.bloodDonor} setdropValue={setValue} dropValue={value} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">
                  Хүүхэд залуучуудын хөдөлгөөний гишүүн {<Text color="red">*</Text>}
                </Text>
                <Dropdown arr={kid} id='youthMovementMember' value={value.youthMovementMember} setdropValue={setValue} dropValue={value} />
              </Stack>
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' >
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Цусны бүлэг{<Text color="red">*</Text>}</Text>
                <Dropdown arr={BloodType?.BloodType} id='BloodType' value={value.BloodType} setdropValue={setValue} dropValue={value} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Амьдарч буй, аймаг/хот{<Text color="red">*</Text>}</Text>
                <Dropdown arr={StateData && Object.keys(StateData)} onClick={setdist} id='city' value={value.city} setdropValue={setValue} dropValue={value} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Сум/дүүрэг{<Text color="red">*</Text>}</Text>
                <Dropdown arr={StateData && StateData[dist].district} id='district' value={value.district} setdropValue={setValue} dropValue={value} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Байр, орц, гудамж{<Text color="red">*</Text>}</Text>
                <StyledInput width='311px' height='25px' onChange={handleChange} value={value.moreInfo} id="moreInfo" />
              </Stack>
            </Stack>
            <Stack direction="row" gap="25">
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Хөгжлийн бэрхшээлтэй иргэн эсэх{<Text color="red">*</Text>}</Text>
                <Dropdown arr={['Тийм', 'Үгүй']} id='disabilities' value={value.disabilities} setdropValue={setValue} dropValue={value} />
              </Stack>
            </Stack>
            <Button width='140px' height='33px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' onClick={add} >Дараагийн алхам</Button>
          </Stack>
        </Padding>
      </Stack>
      :

      <Stack width="100%" justifyContent="center" alignItems="center" >
        <Padding size="30" width="100%">
          <Stack width="100%" direction="column" gap="75">
            <Stack direction="row">
              <Text fontSize="14px">1. ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ </Text>2
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' width='100%'>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Регистрийн дугаар{<Text color="red">*</Text>} </Text>
                <StyledInput width='311px' height='25px' disabled value={Info?.RD} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Овог{<Text color="red">*</Text>}</Text>
                <StyledInput width='311px' height='25px' disabled value={Info?.lastName} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Нэр{<Text color="red">*</Text>}</Text>
                <StyledInput width='311px' height='25px' value={Info?.firstName} disabled />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">
                  Хүйс {<Text color="red">*</Text>}
                </Text>
                <Dropdown arr={['Eregetei', 'emegtei']} width='311px' height='25px' value={Info?.gender} />
              </Stack>
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' width='100%'>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Төрсөн он/сар/өдөр{<Text color="red">*</Text>} </Text>
                <StyledInput width='311px' height='25px' onChange={handleChange} id='birthdate' value={value.birthdate} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">И-мэйл хаяг*{<Text color="red">*</Text>}</Text>
                <StyledInput width='311px' height='25px' value={Info?.email} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Утасны дугаар{<Text color="red">*</Text>}</Text>
                <StyledInput width='311px' height='25px' value={Info?.phoneNumber} />
              </Stack>
              <Stack direction="column" gap="12">
                <Stack direction="column" gap="12">
                  <Text fontSize="12px">Амьдарч буй, аймаг/хот{<Text color="red">*</Text>}</Text>
                  <Dropdown arr={StateData && Object.keys(StateData)} onClick={setdist} value={Info?.city} onChange={() => e.target} />
                </Stack>
              </Stack>
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' justifyContent='space-between' width='100%'>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Сум/дүүрэг{<Text color="red">*</Text>}</Text>
                <StyledInput width='311px' height='25px' value={Info?.district} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Байр, орц, гудамж{<Text color="red">*</Text>}</Text>
                <StyledInput width='311px' height='25px' value={Info?.moreInfo} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Цусны бүлэг{<Text color="red">*</Text>}</Text>
                <StyledInput width='311px' height='25px' value={Info?.bloodType} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Хөгжлийн бэрхшээлтэй иргэн эсэх{<Text color="red">*</Text>}</Text>
                <StyledInput width='311px' height='25px' value={Info?.disabilities} />
              </Stack>
            </Stack>
            <Button width='140px' height='33px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px'  >Хадгалах</Button>
          </Stack>
        </Padding>
      </Stack>);
};
export default UserInfo;
