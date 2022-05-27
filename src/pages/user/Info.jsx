import Dropdown from '../../components/common/dropdown';
import { useState, useEffect } from 'react';
import { Stack, Text, StyledInput, Padding, Button, EmergencyContactPersonTable } from '../../components';
import { addDocument, setDocument, useDocument } from '../../common/services/firebase';
import { useAuthContext } from '../../common/context/AuthContext';
import { useRouter } from 'next/router';

const UserInfo = ({ isStep, setStep, step, next }) => {
  const [dist, setDistrict] = useState('Улаанбаатар');
  const { user } = useAuthContext();
  const { data: Info } = useDocument(`/user/${user?.uid}`);
  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user]);

  const { data: StateData } = useDocument('/staticData/state');
  const { data: BloodType } = useDocument('/staticData/BloodType');
  const [value, setValue] = useState()
  useEffect(() => {
    if (Info) {
      setValue({
        beneficiary: isStep ? '' : Info?.beneficiary,
        member: isStep ? '' : Info?.member,
        youthMovementMember: isStep ? '' : Info?.youthMovementMember,
        volunteer: isStep ? '' : Info?.volunteer,
        bloodDonor: isStep ? '' : Info?.bloodDonor,
        disabilities: isStep ? '' : Info?.disabilities,
        phoneNumber: isStep ? '' : Info?.phoneNumber,
        gender: isStep ? '' : Info?.gender,
        city: isStep ? '' : Info?.city,
        district: isStep ? '' : Info?.district,
        moreInfo: isStep ? '' : Info?.moreInfo,
        email:   Info?.email,
        birthdate: isStep ? '' : Info?.birthdate,
        BloodType: Info?.BloodType
      })
    }
  }, [Info])

  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const setdist = (opt) => {
    setDistrict(opt);
  };

  const add = () => {
    setDocument(`/user/${user?.uid}`, value)
    next()
  }
  return (
    isStep ?
      <>
        <Padding size="30">
          <Stack width="100%" direction="column" gap="75">
            <Stack direction="row">
              <Text fontSize="14px">1. ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ</Text>
            </Stack>
            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between'>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Сайн дурын идэвхтэн{<Text color="red">*</Text>} </Text>
                <Dropdown height='35px' arr={['Тийм', 'Үгүй']} id='volunteer' setdropValue={setValue} dropValue={value} width='390px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Гишүүнчлэл{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={['Алтан гишүүн']} id='member' setdropValue={setValue} dropValue={value} width='390px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Цусны донор{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={['Тийм', 'Үгүй']} id='bloodDonor' setdropValue={setValue} dropValue={value} width='390px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">
                  Хүүхэд залуучуудын хөдөлгөөний гишүүн {<Text color="red">*</Text>}
                </Text>
                <Dropdown height='35px' arr={['Тийм', 'Үгүй']} id='youthMovementMember' setdropValue={setValue} dropValue={value} width='390px' />
              </Stack>
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' >
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Цусны бүлэг{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={BloodType?.BloodType} id='BloodType' setdropValue={setValue} dropValue={value} width='390px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Амьдарч буй, аймаг/хот{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={StateData && Object.keys(StateData)} onClick={setdist} id='city' setdropValue={setValue} dropValue={value} width='390px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Сум/дүүрэг{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={StateData && StateData[dist].district} id='district' setdropValue={setValue} dropValue={value} width='390px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Байр, орц, гудамж{<Text color="red">*</Text>}</Text>
                <StyledInput height='35px' onChange={handleChange} id="moreInfo" width='390px' />
              </Stack>
            </Stack>
            <Stack direction="row" gap="25">
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Хөгжлийн бэрхшээлтэй иргэн эсэх{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={['Тийм', 'Үгүй']} id='disabilities' setdropValue={setValue} dropValue={value} width='390px' />
              </Stack>
            </Stack>

          </Stack>
        </Padding>
        <EmergencyContactPersonTable admin={true} />
        <Button style={{ margin: '70px 0 0 30px' }} width="230px" height="40px" bc='1px solid #0066B3' bgColor="#0066B3" borderRadius="5px" onClick={add}>
          <Text cursor="pointer" color="#fff" >
            Дараагийн алхам
          </Text>
        </Button>
      </>
      :

      <Stack width="100%" justifyContent="center" alignItems="center" >
        <Padding size="30" width="100%">
          <Stack width="100%" direction="column" gap="75">
            <Stack direction="row">
              <Text fontSize="14px">1. ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ </Text>
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' width='83vw' >
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Регистрийн дугаар{<Text color="red">*</Text>} </Text>
                <StyledInput height='35px' width='390px' disabled value={Info?.RD} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Овог{<Text color="red">*</Text>}</Text>
                <StyledInput width='390px' height='35px' disabled value={Info?.lastName} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Нэр{<Text color="red">*</Text>}</Text>
                <StyledInput width='390px' height='35px' value={Info?.firstName} disabled />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">
                  Хүйс {<Text color="red">*</Text>}
                </Text>
                <Dropdown height='35px' arr={['Эрэгтэй', 'Эмэгтэй']} width='390px' value={Info?.gender} onClick={(e) => setValue({ ...value, gender: e })} />
              </Stack>
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' width='100%'>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Төрсөн он/сар/өдөр{<Text color="red">*</Text>} </Text>
                <StyledInput width='390px' height='35px' border='3px solid black' id='birthdate' value={value?.birthdate} onChange={(e) => { handleChange, setValue({ ...value, birthdate: e.target.value }) }} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">И-мэйл хаяг*{<Text color="red">*</Text>}</Text>
                <StyledInput width='390px' height='35px' value={value?.email} onChange={(e) => setValue({ ...value, email: e.target.value })} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Утасны дугаар{<Text color="red">*</Text>}</Text>
                <StyledInput width='390px' height='35px' value={value?.phoneNumber} onChange={(e) => setValue({ ...value, phoneNumber: e.target.value })} />
              </Stack>
              <Stack direction="column" gap="12">
                <Stack direction="column" gap="12">
                  <Text fontSize="12px">Амьдарч буй, аймаг/хот{<Text color="red">*</Text>}</Text>
                  <Dropdown height='35px' arr={StateData && Object.keys(StateData)} width='390px' value={value?.city} onClick={(e) => { setValue({ ...value, city: e }), setdist }} />
                </Stack>
              </Stack>
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' width='100%'>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Сум/дүүрэг{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={StateData && StateData[dist].district} id='district' width='390px' value={value?.district} setdropValue={setValue} dropValue={value} onClick={(e) => setValue({ ...value, district: e })} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Байр, орц, гудамж{<Text color="red">*</Text>}</Text>
                <StyledInput width='390px' height='35px' value={value?.moreInfo} onChange={(e) => setValue({ ...value, moreInfo: e.target.value })} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Цусны бүлэг{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={BloodType?.BloodType} id='BloodType' width='390px' value={value?.BloodType} setdropValue={setValue} dropValue={value} onClick={(e) => setValue({ ...value, BloodType: e })} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Хөгжлийн бэрхшээлтэй иргэн эсэх{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={['Тийм', 'Үгүй']} id='disabilities' value={value?.disabilities} setdropValue={setValue} dropValue={value} width='390px' onClick={(e) => setValue({ ...value, disabilities: e })} />
              </Stack>
            </Stack>
            <Button width='140px' height='33px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' onClick={add} >Хадгалах</Button>
          </Stack>
        </Padding>
      </Stack>);
};
export default UserInfo;