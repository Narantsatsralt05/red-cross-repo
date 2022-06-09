import { Stack } from '../core/stack';
import Logo from '../../assets/icon/logo.svg';
import { Text } from '../core/text';
import hamburger from '../../assets/icon/hamburger.svg';
import { Button, Margin, Position } from '..';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../common/context/AuthContext';
import { useCollection, useDocument } from '../../common/services/firebase';
import { useState } from 'react';
import female from "../../assets/icon/female.svg"
import man from "../../assets/icon/men 1.svg"

const LogoutText = (logOut, setLogout, isLogout) => {
  return (
    <Text fontSize='12px' fontFamily='Roboto' lineHeight='12px' fontWeight='300'>
      <div className="" style={{
        width: 0, height: 0, borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '25px solid #ffffffff', marginLeft: '90px'
      }} ></div>
      <Stack width='172px' height='66px' bg='white' direction='column' style={{ boxShadow: '0px 0px 20px  #888888' }}>
        <Margin size={[8, 0, 0, 13]}>
          Та гармаар байна уу?
        </Margin>
        <Margin size={[8, 0, 0, 0]}>
          <Stack direction='row' justifyContent='space-around'>
            <Button width='60px' height='23px' borderRadius='2px' bgColor='#33000000' bc='0.5px solid black' onClick={() => { setLogout(false) }}>Үгүй</Button>
            <Button width='60px' height='23px' borderRadius='2px' bgColor='#0066B3' color='white' onClick={logOut} >Тийм</Button>
          </Stack>
        </Margin>
      </Stack>

    </Text>
  )
}

export const Header = ({admin}) => {
  const { user, logOut } = useAuthContext();
  const router = useRouter();
  const userLocation = useDocument(`/user/${user?.uid}`).data;
  const [isLogout, setLogout] = useState(false)
  return (
    <Stack bg="#0066B3" width="100vw" height="80px" justifyContent="space-between" alignItems="center">
      <Stack alignItems="center">
        <Margin size={[20, 0, 0, 30]}>
          <img src={hamburger.src} width={60} height={60} onClick={() => {
            admin ? router.push('/admin/home') : router.push('/user/home')
          }} />
        </Margin>
        <Margin size={[0, 0, 0, 10]}>
          <img src={Logo.src} />
        </Margin>
        <Margin size={[0, 20, 0, 10]}>
          <Text type="T1" color="white" className="media540">
            МУЗН
          </Text>
        </Margin>
        <Stack width="1px" height="4vh" bg="#fff" />
        <Margin size={[0, 0, 0, 20]}> 
          <Text type="T1" color="white" className="media540" >
            {userLocation?.location}
          </Text>
        </Margin>
      </Stack>
      <Margin size={[0, 50, 0, 0]}>
        <Stack direction='row' alignItems="center">
          <Text type="T2" color="#fff" className="media540" >
            {user?.email}
          </Text>
          <Margin size={[0,0,0,30]}  onClick={() => setLogout(!isLogout)} style={{ cursor: 'pointer' }}>
          <img src={man.src}  />
          </Margin>
        </Stack>
        <Position position="absolute" top="60px" right="3px">
          {isLogout ? LogoutText(logOut, setLogout, isLogout) : ''}
        </Position>
      </Margin>
    </Stack>
  );
};