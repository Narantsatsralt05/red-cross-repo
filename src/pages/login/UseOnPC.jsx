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

const UseOnPC = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [event, setEvent] = useState('');
  const router = useRouter();

  const { user, login, loginError } = useAuthContext();
  const { setLoader } = useLoaderContext();
  const [isTrue, setTrue] = useState(false);
  const handler = (event) => {
    // changing the state to the name of the key
    // which is pressed
    setEvent(event.key);
  };

  const test = async () => {
    setLoader(true);
    await login(form.email, form.password, setTrue);
  };
  useEffect(() => {
    if (isTrue) {
      setLoader(false);
      router.push('/checker');
    } else {
      setLoader(false);
    }
  }, [isTrue]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  if (event === 'Enter') {
    login(form.email, form.password, setTrue);
  }
  return (
    <Stack direction="row" width="100vw" height="100vh" className="bigCOn">
      <Stack direction="column" alignItems="center" width="50%" height="100vh" bg="#fff">
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
              loginError ===
              'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).' ? (
                <Text color="red">и-мэйл бүртгэлгүй байна.</Text>
              ) : (
                ''
              )
            ) : (
              ''
            )}
            {form.email.length >= 10 ? (
              loginError ===
              'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).' ? (
                <Text color="red">хэт олон буруу оролдлого</Text>
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
              <Text color="#1B1B1B" fontSize="0.8vw" cursor="pointer">
                Нууц үг
              </Text>
              <Text color="#757575" fontSize="0.8vw" cursor="pointer" onClick={() => router.push('/user/forgotPass')}>
                Нууц үг мартсан?
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
              {loginError ===
              'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).' ? (
                <Text color="red">нууц үг буруу байна</Text>
              ) : (
                ''
              )}
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
            onClick={() => login(form.email, form.password, setTrue)}
          >
            <Text
              color="#fff"
              cursor="pointer"
              fontSize="1.2vw"
              onClick={() => login(form.email, form.password, setTrue)}
            >
              НЭВТРЭХ
            </Text>
          </Button>
        </Margin>
        <Margin size={[20, 0, 0, 430]}>
        <Text type="ThinH2" onClick={() => router.push('/user/signup')} style={{cursor: 'pointer'}}>Бүртгүүлэх</Text>
        </Margin>
      </Stack>
      <Position position="fixed" bottom="3vh" left="4vw">
        <Text color="#757575" fontFamily="Roboto" fontSize="0.8vw">
          @ 2018-2021 Монголын улаан загалмай нийгэмлэг
        </Text>
      </Position>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${Background.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Position position="absolute" bottom="3vh" right="3.5vw">
          <Border borderColor="#0066B3" borderRadius="20px" overFlow="hidden">
            <Stack
              bg="#0066B3"
              direction="row"
              width="60vw"
              alignItems="center"
              justifyContent="space-around"
              heigth="5vh"
            >
              <img src={Login1.src} width={80} height={80} />
              <Text color="#fff" type="T2">
                САЙН ДУРЫН ИДЭВХТНИЙ БҮРТГЭЛ
              </Text>
              <img src={Login2.src} width={80} height={80} />
              <Text color="#fff" type="T2">
                ГИШҮҮН, ДЭМЖЭГЧДИЙН БҮРТГЭЛ
              </Text>
              <img src={Login3.src} width={80} height={80} />
              <Text color="#fff" type="T2">
                ТУСЛАМЖ ХҮРТЭГЧИЙН БҮРТГЭЛ
              </Text>
            </Stack>
          </Border>
        </Position>
      </div>
    </Stack>
  );
};

export default UseOnPC;