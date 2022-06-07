import React from 'react';

import search from '../../assets/icon/search.svg';
import { useState } from 'react';
import {
  Margin,
  Stack,
  Text,
  Button,
  Usercard,
  Data,
  DataTable,
  StyledInput,
  Border,
  Padding,
  VolunteerInformation,
  Registered,
  Loading,
} from '../../components';
import { Header } from '../../components';
import addPhoto from '../../assets/icon/add.svg';
import sainDur from '../../assets/icon/blue.svg';
import green from '../../assets/icon/green.svg';
import grey from '../../assets/icon/grey.svg';
import { useRouter } from 'next/router';
import textGrammer from '../../assets/icon/textGrammer.svg';
import { useRef } from 'react';
import styled from 'styled-components';
import { useCollection, useDocument } from '../../common/services/firebase';
import { useEffect } from 'react';

const Admin = () => {
  let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const { data } = useCollection('/user')
  const router = useRouter();
  const [activeTab, setactiveTab] = useState();
  const dataValue = useDocument('/count/8npCX1XzMKzfXDmeUlH0').data;
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
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  useEffect(() => {
    if (searchValue.value1.length >= 1) {
      secondInput.current.focus();
    }
    if (searchValue.value2.length >= 1) {
      thirdInput.current.focus();
    }
  }, [searchValue.value1, searchValue.value2]);

  const ResponseInMobile = styled.div`
    @media (max-width: 1570px) {
      display: none;
    }
  `;
  const HeadNames = ({ text }) => {
    return (
      <Padding size={[0, 0, 5, 0]}>
        <Border
          style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)' }}
          borderColor="#EDEDED"
          borderRadius="10px"
          overFlow="hidden"
        >
          <Stack bg="#FFFFFF" width="100%" height="80px" justifyContent="flex-start" alignItems="center">
            <Margin size={[0, 0, 0, 30]}>
              <Stack direction="column" gap="10px">
                <Text type="H2">{text}</Text>
                <Stack bg="#0066B3" width="100%" height="1px" />
              </Stack>
            </Margin>
          </Stack>
        </Border>
      </Padding>
    );
  };
  const tabs = {
    headers: [
      { text: 'Бүртгэл нэмэх', photo: addPhoto, path: '/admin/register', headName: '' },
      { text: 'Бүртгэлтэй хэрэглэгчийн жагсаалт', photo: sainDur, path: '', headName: 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ' },
      { text: 'Гишүүдийн жагсаалт', photo: grey, path: '', headName: 'ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ' },
      { text: 'Тусламж хүртэгчдийн жагсаалт', photo: green, path: '', headName: 'ТУСЛАМЖ ХҮРТЭГЧДИЙН МЭДЭЭЛЭЛ' },
    ],
    body: [
      <Loading />,
      <Stack bg="#FAFAFA" height="calc(100vh - 180px)" width="calc(100vw - 130px)" direction="column">
        <VolunteerInformation />
      </Stack>,
      <Stack bg="#FAFAFA" height="calc(100vh - 180px)" width="calc(100vw - 130px)" direction="column">
        <Registered />
      </Stack>,
      <Stack bg="#FAFAFA" height="calc(100vh - 180px)" width="calc(100vw - 130px)" direction="column">
        <Registered />
      </Stack>,
    ],
  };

  return (
    <Stack direction="column" >
      <Header />
      {activeTab &&
        tabs.headers.map((el, index) => {
          if (index === activeTab) {
            return <HeadNames key={index} text={el.headName} />;
          }
        })}
      <Stack
        direction="row"
        justifyContent="space-between"
        bg="#FAFAFA"
        height={activeTab === undefined ? 'calc(100vh - 80px)' : 'calc(100vh - 160px)'}
      >
        <Stack height="100%" alignItems="center" width={activeTab === undefined ? '15vw' : '100px'} direction="row">
          <Padding style={{ height: '100%', boxShadow: `0px 0px 8px rgba(0, 0, 0, 0.15)` }} size={[0, 30, 0, 30]}>
            <Stack height="100%" direction="column" justifyContent="space-between" alignItems="center">
              <Stack direction="column">
                {tabs &&
                  tabs.headers.map((item, index) => {
                    return (
                      <Stack
                        direction="row"
                        key={index}
                        onClick={() => {
                          setactiveTab(index), router.push(item.path);
                        }}
                        alignItems="center"
                      >
                        <Margin size={[20, 0, 0, 0]}>
                          {activeTab === index ? (
                            <Border borderColor="#F4F4F4" borderRadius="5px">
                              <Stack
                                width="50px"
                                height="50px"
                                justifyContent="center"
                                alignItems="center"
                                bg="#F4F4F4"
                                direction="row"
                                gap="3"
                              >
                                <Border borderRadius="2px" borderColor="#0358A7">
                                  <Stack bg="#0358A7" height="40px" width="1px" />
                                </Border>
                                <Stack width="40px" height="40px">
                                  <img src={item.photo.src} />
                                </Stack>
                              </Stack>
                            </Border>
                          ) : (
                            <Stack width="50px" height="50px">
                              <img src={item.photo.src} />
                            </Stack>
                          )}
                        </Margin>
                        <ResponseInMobile>
                          {activeTab === undefined && (
                            <Margin size={[20, 0, 0, 20]}>
                              <Stack alignItems="center" justifyContent="flex-start" width="10vw" height="3vh">
                                <Text cursor="pointer" type="T1">
                                  {item.text}
                                </Text>
                              </Stack>
                            </Margin>
                          )}
                        </ResponseInMobile>
                      </Stack>
                    );
                  })}
              </Stack>
              <Margin size={[0, 0, 30, 0]}>
                {activeTab === undefined ? (
                  <Text color="#757575" type="T4Spaced">
                    @ 2018-2021 Монголын улаан загалмай нийгэмлэг
                  </Text>
                ) : (
                  <Stack width="50px" height="50px">
                    <img src={textGrammer.src} />
                  </Stack>
                )}
              </Margin>
            </Stack>
          </Padding>
        </Stack>

        {activeTab === undefined ? (
          <Stack height="93vh" bg="#F6F6F6" justifyContent="space-evenly" direction="column">
            <Margin size={[0, 30, 0, 40]}>
              <Stack justifyContent="space-between" flexWrap="wrap">
                <Data value={dataValue?.all} text="НИЙТ " color={'#0066B3'}></Data>
                <Data value={dataValue?.volunteerActivist} text="САЙН ДУРЫН ИДЭВХТЭН" color={'#626262'}></Data>
                <Data value={dataValue?.helper} text="ТУСЛАМЖ  ХҮРТЭГЧ" color={'#DD5D00'}></Data>
                <Data value={dataValue?.member} text="ГИШҮҮН" color={'#D90000'}></Data>
              </Stack>
            </Margin>

            <Margin size={[0, 0, 0, 40]}>
              <Stack direction="column" height="75px" justifyContent="space-between">
                <Text fontSize="14px">РЕГИСТРИЙН ДУГААР БИЧНЭ ҮҮ.</Text>
                <Stack gap={'15'}>
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
                    bc="none"
                    onClick={searchButton}
                  >
                    <img src={search.src} />
                  </Button>
                </Stack>
              </Stack>
            </Margin>

            <Margin size={[0, 30, 0, 40]}>
              <Stack
                bg="#FFFFFF"
                height="30vh"
                style={{ borderRadius: '5px', border: '1px solid #EDEDED' }}
                direction="column"
              >
                <Margin size={[0, 0, 0, 0]}>
                  <Stack width="200px" height="50px" justifyContent="center" alignItems="center">
                    <Text type="T3">ХАЙЛТЫН ҮР ДҮН</Text>
                  </Stack>
                </Margin>
                <div
                  style={{
                    overflow: 'scroll',
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '82vw',
                  }}
                >
                  {
                    data?.map((el) => {
                      return (
                        <Margin size={[0, 0, 30, 40]} >
                          <Usercard el={el} />
                        </Margin>
                      )
                    })
                  }
                </div>
              </Stack>
            </Margin>

            <Margin size={[0, 30, 0, 40]}>
              <Stack height="30%">
                <DataTable></DataTable>
              </Stack>
            </Margin>
          </Stack>
        ) : (
          tabs.body[activeTab]
        )}
      </Stack>
    </Stack>

  );
};
export default Admin;
