
import { Stack, Text, Padding, Border, Margin } from '../components';
import {Header} from '../components/common/header';
import { Tabs } from '../components/common/tabs';
import {
  MembershipInformationTable,
  VolunteerWorkInformationTable,
  HelpInformationTable,
} from '../components/common/informationSections/sections';
import { useCollection } from '../common/services/firebase';

const ProfileHome = () => {
  const { data: volunteercount } = useCollection(`/user/Y2Aiw9KPlijMFfTHIpsy/volunteerWorkInformation`);
  const { data: membership } = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/membershipInformation');
  const startDate = membership[0]?.startDate?.split('.').map((e) => parseInt(e, 10));
  const endDate = membership[0]?.endDate?.split('.').map((e) => parseInt(e, 10));

  const tabData = {
    headers: [{ text: 'Нүүр' }, { text: 'Үндсэн мэдээлэл' }],
    body: [
      <Stack width="100vw" direction="column">
        <Padding size={[60, 30, 30, 100]}>
          <Stack direction="column" gap="40px">
            <Padding size={[20, 20, 20, 20]}>
              <Stack width="100%" direction="row" gap="50px" flexWrap="wrap">
                <Border borderRadius="5px" borderWidth="1">
                  <Stack
                    width="300px"
                    height="170px"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="15"
                  >
                    <Text type={'H3'} color="#0358A7">
                      {volunteercount.length}
                    </Text>
                    <Stack textAlign="center" width="80%">
                      <Text type={'ThinH1'}>Сайн дурын ажил хийсэн тоо</Text>
                    </Stack>
                  </Stack>
                </Border>
                <Border borderRadius="5px" borderWidth="1">
                  <Stack
                    width="300px"
                    height="170px"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="15"
                  >
                    <Text
                      type={'H3'}
                      color="#0358A7
"
                    >
                      {startDate && startDate[0] + '.' + startDate[1] + '.' + startDate[2]}
                    </Text>
                    <Stack textAlign="center" width="80%">
                      <Text type={'ThinH1'}>Гишүүнчлэлийн мэдээлэл</Text>
                    </Stack>
                  </Stack>
                </Border>
                <Border borderRadius="5px" borderWidth="1">
                  <Stack
                    width="300px"
                    height="170px"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="15"
                  >
                    <Text
                      type={'H3'}
                      color="#0358A7
"
                    >
                      1
                    </Text>
                    <Stack textAlign="center" width="80%">
                      <Text type={'ThinH1'}>Тусламжийн тоон мэдээлэл</Text>
                    </Stack>
                  </Stack>
                </Border>
              </Stack>
            </Padding>

            <Stack direction="column" width="90vw" gap="30">
              <VolunteerWorkInformationTable />
              <MembershipInformationTable />
              <HelpInformationTable />
            </Stack>
          </Stack>
        </Padding>
      </Stack>,
      <div>Үндсэн мэдээлэл</div>,
    ],
  };
  return (
    <>
      <Stack width="100%" direction="column">
        <Header></Header>

        <Stack direction="row" justifyContent="space-between" height="120px" width="100vw">
          <Margin size={[30, 20, 0, 40]}>
            <Stack direction="column" gap="20px">
              <Stack gap="5px">
                <Text textTransform="uppercase" type="H2">
                  Даваа
                </Text>
                <Text textTransform="uppercase" type="H2">
                  овогтой
                </Text>
                <Text textTransform="uppercase" type="H2">
                  Hямсамбуу
                </Text>
              </Stack>
              <Stack gap="5px">
                <Text type="ThinH2">
                  Харьяалал:  
                </Text>
                <Text type="ThinH2"> Баянзүрх дүүргийн Улаан загалмай хороо</Text>
              </Stack>
              
            </Stack>
          </Margin>
          <Margin size={[20,40,20,20]}>
            <Stack direction="column" gap="4">
            <Text color="#0066B3">Төлөв</Text>
            <Stack alignItems='center' direction="row" gap="5px">
              <Text type="H2">Сайн дурын идэвхтэн:</Text>
              <Text type="ThinH2">true</Text>
            </Stack>

            <Stack alignItems='center' direction="row" gap="5px">
              <Text type="H2">Гишүүнчлэл:</Text>
              <Text type="ThinH2">
                {endDate &&
                  membership[0]?.membershipType +
                    '/' +
                    endDate[0] +
                    '.' +
                    endDate[1] +
                    '.' +
                    endDate[2] +
                    '/' +
                    'дуусна'}
              </Text>
            </Stack>
            <Stack alignItems='center' direction="row" gap="5px">
              <Text type="H2">Цусны донор:</Text>
              <Text type="ThinH2">NONE</Text>
            </Stack>
          </Stack>
          </Margin>
          
        </Stack>
        <Tabs data={tabData} type="row" />
      </Stack>
    </>
  );
};

export default ProfileHome;
