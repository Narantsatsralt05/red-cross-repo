import { Box, Button, Margin, NotificationModal, Position, Stack, StyledInput, Text } from '../components';
import React, { useState } from 'react';
import Background from '../assets/image/loginBg.png';
import Image from 'next/image';
import Logo from '../assets/icon/logo.svg';
import { useAuthContext } from '../providers/authContext';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const { login } = useAuthContext();
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
          <Text color="#7A7A7A" fontSize="0.9vw" cursor="pointer">
            Цахим мэдээллийн систем
          </Text>
        </Margin>
        <Margin size={[10, 0, 0, 0]}>
          <Stack width="30vw" height="2px" bg="#F5F5F5" />
        </Margin>
        <Margin size={[30, 0, 0, 0]}>
          <Text color="black" fontSize="1.8vw" cursor="pointer">
            НЭВТРЭХ
          </Text>
        </Margin>
        <>
          <Stack width="67%" justifyContent="flex-start">
            <Text color="#1B1B1B" fontSize="0.8vw" cursor="pointer">
              И-мэйл хаяг
            </Text>
          </Stack>
          <Margin size={[10, 0, 0, 0]}>
            <StyledInput
              color="#D0D0D0"
              border="2px solid #D0D0D0"
              width="23.5vw"
              height="4.3vh"
              size="1.4vw"
              placeholder="и-мэйл"
              onChange={handleChange}
              value={form.email}
              id="email"
              type="text"
            />
          </Margin>
        </>
        <Margin size={[20, 0, 0, 0]}>
          <>
            <Stack direction="row" justifyContent="space-between">
              <Text color="#1B1B1B" fontSize="0.8vw" cursor="pointer">
                Нууц үг
              </Text>
              <Text color="#757575" fontSize="0.8vw" cursor="pointer">
                Нууц үг мартсан?
              </Text>
            </Stack>
            <Margin size={[10, 0, 0, 0]}>
              <StyledInput
                color="#D0D0D0"
                border="2px solid #D0D0D0"
                width="23.5vw"
                height="4.3vh"
                size="1.4vw"
                onChange={handleChange}
                value={form.password}
                id="password"
                type="password"
                placeholder="нууц үг"
              />
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
            onClick={() => login(form.email, form.password)}
          >
            <Text color="#fff" cursor="pointer" fontSize="1.2vw">
              НЭВТРЭХ
            </Text>
          </Button>
        </Margin>
      </Stack>
      <Position position="fixed" bottom="3vh" left="4vw">
        <Text color="#757575" fontFamily="Roboto" fontSize="0.8vw">
          @ 2018-2021 Монголын улаан загалмай нийгэмлэг
        </Text>
      </Position>
      {/* <NotificationModal bg="#fff"/> */}
      <Stack width="65%" height="100vh">
        <Image src={Background} width={1700} height={300} />
      </Stack>
    </Stack>
  );
};

export default Login;
