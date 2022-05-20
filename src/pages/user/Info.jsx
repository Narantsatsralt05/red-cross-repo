import Dropdown from '../../components/common/dropdown';
import { useState, useEffect } from 'react';
import { Stack, Text, StyledInput, Padding, Button } from '../../components';
import { addDocument, setDocument, useDocument } from '../../common/services/firebase';
import { useAuthContext } from '../../common/context/AuthContext';
import { useRouter } from 'next/router';

const UserInfo = ({ isStep }) => {
  const [dist, setDistrict] = useState('Улаанбаатар');
  const { user } = useAuthContext();
  const { data: Info } = useDocument(`/user/${user.uid}`);
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
        moreInfo: isStep ? '' : Info?.moreInfzo,
        email: isStep ? '' : Info?.email,
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
    console.log(value)
    setDocument(`/user/${user.uid}`, value)
  }
  console.log(value)
  return (
    isStep ?
      <Stack width="100%" justifyContent="center" alignItems="center" >
        <Padding size="30">
          <Stack width="100%" direction="column" gap="75">
            <Stack direction="row">
              <Text fontSize="14px">1. ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ</Text>
            </Stack>
            <Stack direction="row" gap="25" flexWrap="wrap" width='83vw' justifyContent='space-between'>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Сайн дурын идэвхтэн{<Text color="red">*</Text>} </Text>
                <Dropdown height='35px' arr={['Тийм', 'Үгүй']} id='volunteer' value={value?.volunteer} setdropValue={setValue} dropValue={value} width='400px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Гишүүнчлэл{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={['Алтан гишүүн']} id='member' value={value?.member} setdropValue={setValue} dropValue={value} width='400px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Цусны донор{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={['Тийм', 'Үгүй']} id='bloodDonor' value={value?.bloodDonor} setdropValue={setValue} dropValue={value} width='400px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">
                  Хүүхэд залуучуудын хөдөлгөөний гишүүн {<Text color="red">*</Text>}
                </Text>
                <Dropdown height='35px' arr={['Тийм', 'Үгүй']} id='youthMovementMember' value={value?.youthMovementMember} setdropValue={setValue} dropValue={value} width='400px' />
              </Stack>
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' >
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Цусны бүлэг{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={BloodType?.BloodType} id='BloodType' value={value?.BloodType} setdropValue={setValue} dropValue={value} width='400px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Амьдарч буй, аймаг/хот{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={StateData && Object.keys(StateData)} onClick={setdist} id='city' value={value?.city} setdropValue={setValue} dropValue={value} width='400px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Сум/дүүрэг{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={StateData && StateData[dist].district} id='district' value={value?.district} setdropValue={setValue} dropValue={value} width='400px' />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Байр, орц, гудамж{<Text color="red">*</Text>}</Text>
                <StyledInput height='35px' onChange={handleChange} value={value?.moreInfo} id="moreInfo" width='400px' />
              </Stack>
            </Stack>
            <Stack direction="row" gap="25">
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Хөгжлийн бэрхшээлтэй иргэн эсэх{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={['Тийм', 'Үгүй']} id='disabilities' value={value?.disabilities} setdropValue={setValue} dropValue={value} width='400px' />
              </Stack>
            </Stack>
            {/* <Button width='140px' height='33px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' onClick={add} >Дараагийн алхам</Button> */}
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

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' width='97vw' >
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Регистрийн дугаар{<Text color="red">*</Text>} </Text>
                <StyledInput width='400px' height='35px' disabled value={Info?.RD} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Овог{<Text color="red">*</Text>}</Text>
                <StyledInput width='400px' height='35px' disabled value={Info?.lastName} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Нэр{<Text color="red">*</Text>}</Text>
                <StyledInput width='400px' height='35px' value={Info?.firstName} disabled />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">
                  Хүйс {<Text color="red">*</Text>}
                </Text>
                <Dropdown height='35px' arr={['Эрэгтэй', 'Эмэгтэй']} width='400px' value={Info?.gender} onClick={(e) => setValue({ ...value, gender: e })} />
              </Stack>
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between' width='100%'>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Төрсөн он/сар/өдөр{<Text color="red">*</Text>} </Text>
                <StyledInput width='400px' height='35px' id='birthdate' value={value?.birthdate} onChange={(e) => {handleChange ,setValue({ ...value, birthdate: e.target.value })} } />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">И-мэйл хаяг*{<Text color="red">*</Text>}</Text>
                <StyledInput width='400px' height='35px' value={value?.email} onChange={(e) => setValue({ ...value, email: e.target.value })} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Утасны дугаар{<Text color="red">*</Text>}</Text>
                <StyledInput width='400px' height='35px' value={value?.phoneNumber} onChange={(e) => setValue({ ...value, phoneNumber: e.target.value })} />
              </Stack>
              <Stack direction="column" gap="12">
                <Stack direction="column" gap="12">
                  <Text fontSize="12px">Амьдарч буй, аймаг/хот{<Text color="red">*</Text>}</Text>
                  <Dropdown height='35px' arr={StateData && Object.keys(StateData)} width='400px'  value={value?.city} onClick={(e) => {setValue({ ...value, city: e }) , setdist}} />
                </Stack>
              </Stack>
            </Stack>

            <Stack direction="row" gap="25" flexWrap="wrap" justifyContent='space-between'  width='100%'>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Сум/дүүрэг{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={StateData && StateData[dist].district} id='district' width='400px' value={value?.district} setdropValue={setValue} dropValue={value} onClick={(e) => setValue({ ...value, district: e })} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Байр, орц, гудамж{<Text color="red">*</Text>}</Text>
                <StyledInput width='400px' height='35px' value={value?.moreInfo} onChange={(e) => setValue({ ...value, moreInfo: e.target.value })} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Цусны бүлэг{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={BloodType?.BloodType} id='BloodType' width='400px' value={value?.BloodType} setdropValue={setValue} dropValue={value} onClick={(e) => setValue({ ...value, BloodType: e })} />
              </Stack>
              <Stack direction="column" gap="12">
                <Text fontSize="12px">Хөгжлийн бэрхшээлтэй иргэн эсэх{<Text color="red">*</Text>}</Text>
                <Dropdown height='35px' arr={['Тийм', 'Үгүй']} id='disabilities' value={value?.disabilities} setdropValue={setValue} dropValue={value} width='400px' onClick={(e) => setValue({ ...value, disabilities: e })} />
              </Stack>
            </Stack>
            <Button width='140px' height='33px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' onClick={add} >Хадгалах</Button>
          </Stack>
        </Padding>
      </Stack>);
};
export default UserInfo;