import { Button, Margin, Position, Stack, StyledInput, Text, Border } from '../../components/core';
import React, { useEffect, useState } from 'react';
import Background from '../../assets/image/loginBg.png';
import Login1 from '../../assets/icon/login1.png';
import Login2 from '../../assets/icon/login2.png';
import Login3 from '../../assets/icon/login3.png';
import Logo from '../../assets/icon/logo.svg';
import { useAuthContext } from '../../common/context/AuthContext';
import { useRouter } from 'next/router';
import { maxWidth, width } from '@mui/system';
import { useLoaderContext } from '../../common/context/LoaderContext';

const UseOnPhone = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handler = (event) => {
    // changing the state to the name of the key
    // which is pressed
    setEvent(event.key);
  };
  const { setLoader } = useLoaderContext()
  const [isTrue, setTrue] = useState(false);

  useEffect(() => {
    if (isTrue) {
      setLoader(false);
      router.push('/user/checker');
    } else {
      setLoader(false);
    }
  }, [isTrue]);
  const [event, setEvent] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const { user, login, loginError } = useAuthContext();

  if (event === 'Enter') {
    login(form.email, form.password, setTrue);
  }

  useEffect(() => {
    if (user != null) {
      //   router.push('/home');
    }
  }, [user]);
  const [width, setWidth] = useState();
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <Stack direction="row" width="100%" height="100vh">
      <Stack direction="column" alignItems="center" width="100vw" height="100vh" bg="#fff">
        <Stack height="15vh" width="35%" />
        <img src={Logo.src} width={150} height={150} />
        <Margin size={[30, 0, 0, 0]}>
          <Text color="#0066B3" fontSize="3vw" cursor="pointer">
            ???????????????? ?????????? ???????????????? ??????????????????
          </Text>
        </Margin>
        <Margin size={[10, 0, 0, 0]}>
          <Text color="#7A7A7A" fontSize="2.9vw" cursor="pointer">
            ?????????? ???????????????????? ????????????
          </Text>
        </Margin>
        <Margin size={[10, 0, 0, 0]}>
          <Stack width="60vw" height="2px" bg="#F5F5F5" />
        </Margin>
        <Margin size={[30, 0, 0, 0]}>
          <Text color="black" fontSize="3.8vw" cursor="pointer">
            ??????????????
          </Text>
        </Margin>
        <>
          <Stack width="77%" justifyContent="flex-start">
            <Text color="#1B1B1B" fontSize="2.8vw" cursor="pointer">
              ??-???????? ????????
            </Text>
          </Stack>
          <Margin size={[10, 0, 0, 0]}>
            <StyledInput
              color="#1B1B1B"
              border="2px solid #D0D0D0"
              width="78vw"
              height="4.3vh"
              size="3.2vw"
              placeholder="??-????????"
              onChange={handleChange}
              value={form.email}
              id="email"
              type="text"
            />
            {form.email.length >= 10 ? (
              loginError ===
              'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).' ? (
                <Text color="red">??-???????? ???????????????????? ??????????.</Text>
              ) : (
                ''
              )
            ) : (
              ''
            )}
            {form.email.length >= 10 ? (
              loginError ===
              'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).' ? (
                <Text color="red">?????? ???????? ?????????? ??????????????????</Text>
              ) : (
                ''
              )
            ) : (
              ''
            )}
          </Margin>
        </>
        <Margin size={[20, 0, 0, 0]}>
          <>
            <Stack direction="row" justifyContent="space-between">
              <Text color="#1B1B1B" fontSize="2.8vw" cursor="pointer">
                ???????? ????
              </Text>
              <Text color="#757575" fontSize="2.8vw" cursor="pointer" onClick={() => router.push('/forgotPass')}>
                ???????? ???? ???????????????
              </Text>
            </Stack>
            <Margin size={[10, 0, 0, 0]}>
              <StyledInput
                color="#1B1B1B"
                border="2px solid #D0D0D0"
                width="78vw"
                height="4.3vh"
                size="3.2vw"
                onChange={handleChange}
                value={form.password}
                id="password"
                type="password"
                placeholder="???????? ????"
                onKeyPress={(e) => handler(e)}
              />
              {loginError ===
              'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).' ? (
                <Text color="red">???????? ???? ?????????? ??????????</Text>
              ) : (
                ''
              )}
            </Margin>
          </>
        </Margin>
        <Margin size={[30, 0, 0, 0]}>
          <Button
            width="78vw"
            height="4.3vh"
            bc="1px solid #0066B3"
            borderRadius="5px"
            bgColor="#0066B3"
            color="#fff"
            onClick={() => login(form.email, form.password, setTrue)}
          >
            <Text color="#fff" cursor="pointer" fontSize="3.2vw" onClick={() => login(form.email, form.password)}>
              ??????????????
            </Text>
            <Margin size={[20, 0, 0, 430]}>
        <Text type="ThinH2" onClick={() => router.push('/user/signup')}>????????????????????</Text>
        </Margin>
          </Button>
        </Margin>
      </Stack>
      <Position position="fixed" bottom="3vh" left="4vw">
        <Text color="#757575" fontFamily="Roboto" type="T2">
          @ 2018-2021 ???????????????? ?????????? ???????????????? ??????????????????
        </Text>
      </Position>
    </Stack>
  );
};

export default UseOnPhone;