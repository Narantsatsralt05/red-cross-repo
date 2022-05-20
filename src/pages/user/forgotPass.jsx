import { Button, Margin, Position, Stack, StyledInput, Text } from '../../components';
import React, { useEffect, useState } from 'react';
import Background from '../../assets/image/forgotPassBg.png';

import Logo from '../../assets/icon/logo.svg';
import { useAuthContext } from '../../common/context/AuthContext';
import { useLoaderContext } from '../../common/context/LoaderContext';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
  });
  const [event, setEvent] = useState('');
  const [isTrue, setTrue] = useState(false)
  const handler = (event) => {
    // changing the state to the name of the key
    // which is pressed
    setEvent(event.key);
  };
  const { setLoader } = useLoaderContext()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const { forgetPass, forgotPassError } = useAuthContext();

  if (event === 'Enter') {
    forgetPass(form.email);
  }
  const ResetLoading = async () => {
    setLoader(true)
    await forgetPass(form.email, setTrue)
  }
  useEffect(() => {
    if (isTrue) setLoader(false)
  }, [isTrue])
  return (
    <Stack direction="row" width="100%" height="100vh">
      <Stack direction="column" alignItems="center" width="35%" height="100vh" bg="#fff">
        <Stack height="15vh" width="35%" />
        <img src={Logo.src} width={90} height={90} />
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
            НУУЦ ҮГ СЭРГЭЭХ
          </Text>
        </Margin>
        <>
          <Margin size={[40, 0, 0, 0]} />
          <Stack width="67%" justifyContent="flex-start">
            <Text color="#1B1B1B" fontSize="0.8vw" cursor="pointer">
              Бүртгэлтэй цахим шуудан
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
            {form.email.length >= 10 ? (
              forgotPassError ===
                'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).' ? (
                <Text color="red">и-мэйл бүртгэлгүй байна.</Text>
              ) : (
                ''
              )
            ) : (
              ''
            )}
          </Margin>
        </>
        <Margin size={[30, 0, 0, 0]}>
          <Button
            width="23.5vw"
            height="4.3vh"
            bc="1px solid #0066B3"
            borderRadius="5px"
            bgColor="#0066B3"
            color="#fff"
            onClick={ResetLoading}
          >
            <Text color="#fff" cursor="pointer" fontSize="1.2vw" onClick={ResetLoading}>
              НУУЦ ҮГ СЭРГЭЭХ
            </Text>
          </Button>
        </Margin>
      </Stack>
      <Position position="fixed" bottom="3vh" left="4vw">
        <Text color="#757575" fontFamily="Roboto" fontSize="0.8vw">
          @ 2018-2021 Монголын улаан загалмай нийгэмлэг
        </Text>
      </Position>

      <Stack width="65%" height="100vh">
        <img src={Background.src} width={1700} height={300} />
      </Stack>
    </Stack>
  );
};

export default Login;
