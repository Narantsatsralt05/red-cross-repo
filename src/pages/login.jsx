import { Box, Margin, Stack, StyledInput, Text } from '../components';
import React from 'react';
import Background from '../assets/image/loginBg.png';
import Image from 'next/image';
import Logo from '../assets/icon/logo.svg';

const Login = () => {
  // top, left, bottom, right
  return (
    <Box>
      <Stack direction="row" width="100vw" height="100vh">
        <Stack direction="column" width="35vw" height="100vh" bg="#fff">
          <Image src={Logo} width={90} height={90} />
          <Margin size={[100, 0, 0, 0]}>
            <Text color="#0066B3" fontSize="0.9vw">
              МОНГОЛЫН УЛААН ЗАГАЛМАЙ НИЙГЭМЛЭГ
            </Text>
          </Margin>
          <Text color="#7A7A7A" fontSize="0.9vw" >Цахим мэдээллийн систем</Text>
          <Stack width="500px" height="2px" bg="#F5F5F5"/>
          <Text color="black" fontSize="1.8vw">НЭВТРЭХ</Text>
          <Text color="#1B1B1B" fontSize="0.8vw">И-мэйл хаяг</Text>
          <StyledInput color="#D0D0D0" border="2px solid #D0D0D0"/>
          <Stack direction="row" justifyContent=""></Stack>
        </Stack> 
        <Stack width="65vw" height="100vh">
          <Image src={Background} width={1460} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
