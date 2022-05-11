import { useState, useEffect } from 'react';
import { Stack, Text, Padding, Border,Margin } from '../components';
import { useDocument } from '../hooks/useDocument';
import { useAuthContext } from '../providers/authContext';
import { useRouter } from 'next/router';
import Header from '../components/common/header';
import {Tabs} from '../components/common/tabs';
import {
  MembershipInformationTable,
  VolunteerWorkInformationTable,
  HelpInformationTable,
} from '../components/common/informationSections/sections';
import { useCollection } from '../hooks';

const ProfileHome = () => {
  const volunteercount = useCollection(`/user/Y2Aiw9KPlijMFfTHIpsy/volunteerWorkInformation`);
  const membership = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/membershipInformation');
  // console.log(membership.data[0].startDate.split('.')+ 'member');
  console.log('member ->', membership);
  const startDate = membership?.data[0]?.startDate?.split('.').map((e) => parseInt(e, 10));
  const endDate = membership?.data[0]?.endDate?.split('.').map((e) => parseInt(e, 10));
  console.log(startDate && startDate[0] + 'year' + startDate[1] + 'month' + startDate[2] + 'day');
  console.log('startDate', startDate);
  const tabData = {
    headers: [
      { text: 'Нүүр' },
      { text: 'Үндсэн мэдээлэл' }
    ],
    body: [
      <Stack width="100vw" direction="column">
          <Padding size={[60, 30, 30, 100]}>
            <Stack direction="column" gap="40">
              <Padding size={[60, 0, 0, 50]}>
                <Stack width="100%" direction="row" gap="40" flexWrap="wrap">
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
                        {volunteercount.data.length}
                      </Text>
                      <Stack textAlign="center" width="80%">
                        <Text type={'H2Semi'}>Сайн дурын ажил хийсэн тоо</Text>
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
                       {/* {startDate[0]+'.'+startDate[1]+'.'+startDate[2]} */}
                      </Text>
                      <Stack textAlign="center" width="80%">
                        <Text type={'H2Semi'}>Гишүүнчлэлийн мэдээлэл</Text>
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
                        <Text type={'H2Semi'}>Тусламжийн тоон мэдээлэл</Text>
                      </Stack>
                    </Stack>
                  </Border>
                </Stack>
              </Padding>

              <Stack direction="column" width="90vw" gap="30">
                <VolunteerWorkInformationTable />
                {/* <MembershipInformationTable /> */}
                <HelpInformationTable />
              </Stack>
            </Stack>
          </Padding>
        </Stack>,
      <div>Үндсэн мэдээлэл</div>
    ]
  }
  return (
    <>
      <Stack width="100%" direction="column">
        <Header></Header>
        <Margin size={[10,10,10,10]}>
          <Stack direction="row" justifyContent="space-between" height="150px">
          <Stack direction="column" gap="10">
            <Text type="Header">Bataa Bataa</Text>
            <Text type="H3">Харьяалал: Баянзүрх дүүргийн Улаан загалмай хороо</Text>
          </Stack>
          <Stack direction="column" gap="4">
            <Text
              color="#0066B3"
            >
              Төлөв
            </Text>
            <Stack direction="row" gap="5">
              <Text>Сайн дурын идэвхтэн:</Text>
              <Text>true</Text>
            </Stack>

            <Stack direction="row" gap="5">
              <Text>Гишүүнчлэл:</Text>
              {/* <Text>{membership.data[0].membershipType+'/'+endDate[0]+'.'+endDate[1]+'.'+endDate[2]+"/"+'дуусна'}</Text> */}
            </Stack>
            <Stack direction="row" gap="5">
              <Text>Цусны донор:</Text>
              <Text>NONE</Text>
            </Stack>
          </Stack>
        </Stack>
        <Tabs data={tabData} type="row" />

        </Margin>
        
        {/* <Stack width="100vw" direction="column">
          <Padding size={[60, 30, 30, 100]}>
            <Stack direction="column" gap="40">
              <Padding size={[60, 0, 0, 50]}>
                <Stack width="100%" direction="row" gap="40" flexWrap="wrap">
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
                        {volunteercount.data.length}
                      </Text>
                      <Stack textAlign="center" width="80%">
                        <Text type={'H2Semi'}>Сайн дурын ажил хийсэн тоо</Text>
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
                       {startDate[0]+'.'+startDate[1]+'.'+startDate[2]}
                      </Text>
                      <Stack textAlign="center" width="80%">
                        <Text type={'H2Semi'}>Гишүүнчлэлийн мэдээлэл</Text>
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
                        <Text type={'H2Semi'}>Тусламжийн тоон мэдээлэл</Text>
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
        </Stack> */}
      </Stack>
    </>
  );
};

export default ProfileHome;
