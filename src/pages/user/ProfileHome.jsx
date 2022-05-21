import { Stack, Text, Padding, Border, Margin } from '../../components';
import { FullShadow, WarningShadow } from '../../components/core/shadow';
import { Header } from '../../components/common/header';
import { Tabs } from '../../components/common/tabs';
import {
  MembershipInformationTable,
  VolunteerWorkInformationTable,
  HelpInformationTable,
} from '../../components/common/informationSections/sections';
import { useCollection, useDocument } from '../../common/services/firebase';
import { useAuthContext } from '../../common/context/AuthContext';
import UserInfo from '../../components/common/userInfo';

const ProfileHome = () => {
  const { user } = useAuthContext();
  const { data: volunteercount } = useCollection(`/user/${user?.uid}/volunteerWorkInformation`);
  const { data: membership } = useCollection(`/user/${user?.uid}/membershipInformation`);
  const { data: helpNumer } = useCollection(`user/${user?.uid}/help`);
  const { data: document } = useDocument(`/user/${user?.uid}`);
  const { data: help } = useCollection(`/user/${user?.uid}/helpInformation`);
  const date = membership[0]?.startDate;
  const memberType = membership[0]?.membershipType;
  const tabData = {
    headers: [{ text: 'Нүүр' }, { text: 'Үндсэн мэдээлэл' }],
    body: [
      <Stack width="100vw" direction="column" >
        <Padding size={[50, 0, 0, 40]}>
          <Stack direction="column" gap="40">
            <Padding size={[20, 20, 20, 100]}>
              <Stack width="100%" direction="row" gap="50" flexWrap="wrap">
                <FullShadow>
                  <Border borderColor="#00000022" borderRadius="5px" borderWidth="1">
                    <Stack
                      width="300px"
                      height="170px"
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="15"
                    >
                      <Text type={'H3'} color="#0358A7">
                        {volunteercount?.length}
                      </Text>
                      <Stack textAlign="center" width="80%">
                        <Text type={'ThinH1'}>Сайн дурын ажил хийсэн тоо</Text>
                      </Stack>
                    </Stack>
                  </Border>
                </FullShadow>
                <FullShadow>
                  <Border borderColor="#00000022" borderRadius="5px" borderWidth="1">
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
                        {membership[0]?.startDate}
                      </Text>
                      <Stack textAlign="center" width="80%">
                        <Text type={'ThinH1'}>Гишүүнчлэлийн мэдээлэл</Text>
                      </Stack>
                    </Stack>
                  </Border>
                </FullShadow>
                <FullShadow>
                  <Border borderColor="#00000022" borderRadius="5px" borderWidth="1">
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
                        {help.length}
                      </Text>
                      <Stack textAlign="center" width="80%">
                        <Text type={'ThinH1'}>Тусламжийн тоон мэдээлэл</Text>
                      </Stack>
                    </Stack>
                  </Border>
                </FullShadow>
              </Stack>
            </Padding>

            <Stack direction="column" width="100vw" gap="30">
              <VolunteerWorkInformationTable/>
              <MembershipInformationTable />
              <HelpInformationTable />
            </Stack>
          </Stack>
        </Padding>
      </Stack>,
      <div ><UserInfo /></div>,
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
                <Text type="ThinH2">Харьяалал:</Text>
                <Text type="ThinH2"> Баянзүрх дүүргийн Улаан загалмай хороо</Text>
              </Stack>
            </Stack>
          </Margin>
          <Margin size={[20, 40, 20, 20]}>
            <Stack direction="column" gap="4">
              <Text color="#0066B3">Төлөв</Text>
              <Stack alignItems="center" direction="row" gap="5px">
                <Text type="H2">Сайн дурын идэвхтэн:</Text>
                <Text type="ThinH2">{document?.volunteer}</Text>
              </Stack>

              <Stack alignItems="center" direction="row" gap="5px">
                <Text type="H2">Гишүүнчлэл:</Text>
                <Text type="ThinH2">
                  {memberType}/{date}/?
                </Text>
              </Stack>
              <Stack alignItems="center" direction="row" gap="5px">
                <Text type="H2">Цусны донор:</Text>
                <Text type="ThinH2">{document?.bloodDonor}</Text>
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
