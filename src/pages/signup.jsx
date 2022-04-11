import { Button, Margin, NotificationModal, Position, Stack, StyledInput, Text } from '../components';
import React, { useState } from 'react';
import Background from '../assets/image/loginBg.png';
import Image from 'next/image';
import Logo from '../assets/icon/logo.svg';
import { useAuthContext } from '../providers/authContext';
import { useRouter } from 'next/router';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [event, setEvent] = useState('');

  const handler = (event) => {
    // changing the state to the name of the key
    // which is pressed
    setEvent(event.key);
    console.log(event)
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const { signUp, signUpError } = useAuthContext();

  if (event === 'Enter') {
    signUp(form.email, form.password);
  }
  const router = useRouter();
  return (
    <Stack direction="row" width="100%" height="100vh">
      <Stack direction="column" alignItems="center" width="35%" height="100vh" bg="#fff">
        <Stack height="15vh" width="35%" />
        <Image src={Logo} width={90} height={90} />
        <Margin size={[30, 0, 0, 0]}>
          <Text color="#0066B3" fontSize="0.9vw" cursor="pointer">
            МОНГОЛЫН УЛААН ЗАГАЛМАЙ НИЙГЭМЛЭГ
          </Text>
        </Margin>
        <Margin size={[10, 0, 0, 0]}>
          <Text color="#7A7A7A" fontSize="0.9vw" cursor="pointer" fontWeight="100">
            Цахим мэдээллийн систем
          </Text>
        </Margin>
        <Margin size={[10, 0, 0, 0]}>
          <Stack width="30vw" height="2px" bg="#F5F5F5" />
        </Margin>
        <Margin size={[30, 0, 0, 0]}>
          <Text color="black" fontSize="1.8vw" cursor="pointer">
            БҮРТГЭЛ ҮҮСГЭХ
          </Text>
        </Margin>
        <>
          <Stack width="67%" justifyContent="flex-start">
            <Text color="#1B1B1B" fontSize="0.8vw" cursor="pointer" fontWeight="100">
              И-мэйл хаяг
            </Text>
          </Stack>
          <Margin size={[10, 0, 0, 0]}>
            <StyledInput
              color="#1B1B1B"
              border="2px solid #D0D0D0"
              width="23.5vw"
              height="4.3vh"
              size="1.2vw"
              placeholder="и-мэйл"
              onChange={handleChange}
              value={form.email}
              id="email"
              type="text"
            />
            {/* {form.email.length >= 10 ? (
              loginError ===
              'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).' ? (
                <Text color="red">и-мэйл бүртгэлгүй байна.</Text>
              ) : (
                ''
              )
            ) : (
              ''
            )} */}
            {/* {form.email.length >= 10 ? (
              singUpError ===
              'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).' ? (
                <Text color="red">хэт олон буруу оролдлого</Text>
                
              ) : (
                ''
              )
            ) : (
              ''
            )} */}
            {console.log(signUpError)}
          </Margin>
        </>
        <Margin size={[20, 0, 0, 0]}>
          <>
            <Stack direction="row" justifyContent="space-between">
              <Text color="#1B1B1B" fontSize="0.8vw" cursor="pointer" fontWeight="100">
                Нууц үг
              </Text>
            </Stack>
            <Margin size={[10, 0, 0, 0]}>
              <StyledInput
                color="#1B1B1B"
                border="2px solid #D0D0D0"
                width="23.5vw"
                height="4.3vh"
                size="1.2vw"
                onChange={handleChange}
                value={form.password}
                id="password"
                type="password"
                placeholder="нууц үг"
                onKeyPress={(e) => handler(e)}
              />
              {signUpError ===
              'Firebase: Password should be at least 6 characters (auth/weak-password).' ? (
                <Text color="red">хамгийн багадаа 6н оронтой байх.</Text>
              ) : (
                ''
              )}
            </Margin>
          </>
        </Margin>
        <Margin size={[20, 0, 0, 0]}>
          <>
            <Stack direction="row" justifyContent="space-between">
              <Text color="#1B1B1B" fontSize="0.8vw" cursor="pointer" fontWeight="100">
                Нууц үг давтах
              </Text>
            </Stack>
            <Margin size={[10, 0, 0, 0]}>
              <StyledInput
                color="#1B1B1B"
                border="2px solid #D0D0D0"
                width="23.5vw"
                height="4.3vh"
                size="1.2vw"
                // onChange={handleChange}
                // value={form.passwordConfirm}
                id="password"
                type="password"
                placeholder="нууц үг давтах"
                onKeyPress={(e) => handler(e)}
              />
              {/* {signUpError ===
              'Firebase: Password should be at least 6 characters (auth/weak-password).' ? (
                <Text color="red">хамгийн багадаа 6н оронтой байх.</Text>
              ) : (
                ''
              )} */}
            </Margin>
          </>
        </Margin>
        <Margin size={[30, 0, 0, 0]}>
          <Button
            width="23.5vw"
            height="4.3vh"
            bc="1px solid #0066B3"
            borderRadius="5px"
            bgColor="#0066B3"
            color="#fff"
            onClick={() => signUp(form.email, form.password)}
          >
            <Text color="#fff" cursor="pointer" fontSize="1.2vw" onClick={() => signUp(form.email, form.password)}>
              БҮРТГҮҮЛЭХ
            </Text>
          </Button>
        </Margin>
      </Stack>
      <Position position="fixed" bottom="3vh" left="4vw">
        <Text color="#757575" fontFamily="Roboto" fontSize="0.8vw" fontWeight="100">
          @ 2018-2021 Монголын улаан загалмай нийгэмлэг
        </Text>
      </Position>
      <Stack width="65%" height="100vh">
        <Image src={Background} width={1700} height={300} />
      </Stack>
    </Stack>
  );
};

export default SignUp;