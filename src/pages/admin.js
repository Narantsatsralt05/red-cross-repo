import {
  Margin,
  FullShadow,
  Stack,
  Text,
  Center,
  Border,
  Button,
  Usercard,
  DashSideBar,
  Data,
  DataTable,
  StyledInput,
} from '../components';
import bell from '../assets/icon/ring.svg';
import Image from 'next/image';
import search from '../assets/icon/search.svg';
import { useAuthContext } from '../providers/authContext';
import { useDocument } from '../hooks';
import { useRef } from 'react';
import { useState } from 'react';

const Admin = () => {
  const { user } = useAuthContext();
  const [searchValue, setSearchValue] = useState({
    value1: '',
    value2: '',
    value3: '',
  });
  const [readySearch, setReadySearch] = useState(false);
  const handleChange = (e) => {
    setSearchValue({ ...searchValue, [e.target.id]: e.target.value });
  };
  const searchButton = () => {
    setReadySearch(true);
  };
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  if (searchValue.value1.length >= 1) {
    secondInput.current.focus();
  }
  if (searchValue.value2.length >= 1) {
    thirdInput.current.focus();
  }

  let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const userLocation = useDocument(`/user/${user._delegate?.uid}`).data;
  return (
    <Stack width="100vw" height="100vh" bg="#FFFFFF">
      <DashSideBar></DashSideBar>
      <Margin size={[0, 0, 0, 298]}>
        <Stack
          width="86.5vw"
          height="100vh"
          bg="#F6F6F6"
          justifyContent="space-evenly"
          alignItems="center"
          direction="column"
        >
          <Stack
            style={{ borderRadius: '10px', boxShadow: '0px 0px 10px 0px #00000040' }}
            width="83vw"
            height="80px"
            bg="#FFFFFF"
            alignItems="center"
            justifyContent="space-between"
          >
            <Margin size={[0, 0, 0, 10]}>
              <Text fontSize="17px" fontWeight="500">
                {userLocation?.location}
              </Text>
            </Margin>
            <Stack justifyContent="space-evenly" width="20%">
              <Stack bg="#F6F6F6">
                <Image src={bell}></Image>
              </Stack>
              <Stack bg="#F6F6F6" alignItems="center">
                <Text fontSize="15px" fontWeight="400">
                  {user.email}
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack width="83vw" justifyContent="space-between" flexWrap="wrap">
            <Data color={'#0066B3'}></Data>
            <Data color={'#626262'}></Data>
            <Data color={'#DD5D00'}></Data>
            <Data color={'#D90000'}></Data>
          </Stack>
          <Stack direction="column" height="75px" justifyContent="space-between" width="83vw">
            <Text fontSize="14px">РЕГИСТРИЙН ДУГААР БИЧНЭ ҮҮ.</Text>
            <Stack justifyContent="space-between" width="390px">
              <StyledInput
                onChange={handleChange}
                value={searchValue.value1}
                id="value1"
                ref={firstInput}
                width="45px"
                height="45px"
                placeholder="X"
                type="string"
              ></StyledInput>
              <StyledInput
                onChange={handleChange}
                value={searchValue.value2}
                id="value2"
                ref={secondInput}
                width="45px"
                height="45px"
                placeholder="X"
                type="text"
              ></StyledInput>
              <StyledInput
                onChange={handleChange}
                value={searchValue.value3}
                id="value3"
                ref={thirdInput}
                width="220px"
                height="45px"
                placeholder="XXXXXXXX"
                type="number"
              ></StyledInput>
              <Button
                width="45px"
                height="45px"
                borderRadius="5px"
                bgColor="#1890FF"
                justifyContent="center"
                alignItems="center"
                onClick={searchButton}
              >
                <Image src={search}></Image>
              </Button>
            </Stack>
          </Stack>
          <Stack
            width="83vw"
            bg="#FFFFFF"
            height="30%"
            style={{ borderRadius: '5px', border: '1px solid #EDEDED' }}
            direction="column"
          >
            <Margin size={[0, 0, 0, 0]}>
              <Stack width="200px" height="50px" justifyContent="center" alignItems="center">
                <Text fontSize="14px" fontFamily="roboto" fontWeight="300">
                  ХАЙЛТЫН ҮР ДҮН
                </Text>
              </Stack>
            </Margin>
            <div
              style={{
                overflow: 'auto',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                flexDirection: 'row',
                display: 'flex',
              }}
            >
              {a.map((el) => {
                return (
                  <Margin size={[0, 0, 30, 40]}>
                    <Usercard></Usercard>
                  </Margin>
                );
              })}
            </div>
          </Stack>
          <DataTable></DataTable>
        </Stack>
      </Margin>
    </Stack>
  );
};
export default Admin;
