import Dropdown from '../components/common/select';
import { useState, useEffect } from 'react';
import { Stack, Text, StyledInput, Padding, Border } from '../components';
import { useDocument } from '../hooks/useDocument';
import { useAuthContext } from '../providers/authContext';
import { useRouter } from 'next/router';
import Header from '../components/common/header';
import {
  MembershipInformationTable,
  VolunteerWorkInformationTable,
  HelpInformationTable,
} from '../components/common/informationSections/sections';

const ProfileHome = () => {
  return (
    <>
      <Stack width="100%" direction="column">
        <Header></Header>
        <Stack width="100vw" direction="column">
          <Padding size={[60, 30, 30, 100]}>
            <Stack direction="column" gap="40">
              <Padding size={[60, 0, 0, 50]}>
                <Stack width="100%" direction="row" gap="40">
                  <Border borderRadius="5px" borderWidth="1">
                    <Stack
                      width="300px"
                      height="170px"
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="30"
                    >
                      <Text
                        fontSize="xx-large"
                        color="#0358A7
"
                      >
                        1
                      </Text>
                      <Text fontSize="large">Сайн дурын ажил хийсэн тоо</Text>
                    </Stack>
                  </Border>
                  <Border borderRadius="5px" borderWidth="1">
                    <Stack
                      width="300px"
                      height="170px"
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="30"
                    >
                      <Text
                        fontSize="xx-large"
                        color="#0358A7
"
                      >
                        1
                      </Text>
                      <Text fontSize="large">Сайн дурын ажил хийсэн тоо</Text>
                    </Stack>
                  </Border>
                  <Border borderRadius="5px" borderWidth="1">
                    <Stack
                      width="300px"
                      height="170px"
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="30"
                    >
                      <Text
                        fontSize="xx-large"
                        color="#0358A7
"
                      >
                        1
                      </Text>
                      <Text fontSize="large">Сайн дурын ажил хийсэн тоо</Text>
                    </Stack>
                  </Border>
                </Stack>
              </Padding>

              <Stack direction="column" width="100vw" gap="30">
                <VolunteerWorkInformationTable />
                <MembershipInformationTable />
                <HelpInformationTable />
              </Stack>
            </Stack>
          </Padding>
        </Stack>
      </Stack>
    </>
  );
};
export default ProfileHome;
