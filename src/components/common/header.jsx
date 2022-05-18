import { Stack } from '../core/stack';
import Logo from '../../assets/icon/logo.svg';
import Image from 'next/image';
import { Text } from '../core/text';
import hamburger from '../../assets/icon/hamburger.svg';
import { Margin } from '..';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../common/context/AuthContext';
import { useDocument } from '../../common/services/firebase';

export const Header = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const userLocation = useDocument(`/user/${user?.uid}`).data;

  return (
    <Stack bg="#0066B3" width="100vw" height="80px" justifyContent="space-between" alignItems="center">
      <Stack alignItems="center">
        <Margin size={[20, 0, 0, 30]}>
          <Image src={hamburger} width={60} height={60} onClick={() => {
            router.push('/admin');
            location.reload();
          }} />
        </Margin>
        <Margin size={[0, 0, 0, 10]}>
          <Image src={Logo}></Image>
        </Margin>
        <Margin size={[0, 20, 0, 10]}>
          <Text type="H3" color="white">
            МУЗН
          </Text>
        </Margin>
        <Stack width="1px" height="4vh" bg="#fff" />
        <Margin size={[0, 0, 0, 20]}>
          <Text type="T1" color="white">
            {userLocation?.location}
          </Text>
        </Margin>
      </Stack>
      <Margin size={[0, 50, 0, 0]}>
        <Text type="T2" color="#fff">
          {user?.email}
        </Text>
      </Margin>
    </Stack>
  );
};
