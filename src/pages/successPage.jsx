import { Button, Margin, Stack, Text, Border } from '../components';
import React, { useEffect } from 'react';
import { CorrectIcon } from '../assets/icon/correctIcon';
import Link from 'next/link';
import { useAuthContext } from '../common/context/AuthContext';
import { useCollection } from '../common/services/firebase';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Success = () => {
  const { user } = useAuthContext();
  const userData = useCollection('/user');
  const [isAdmin, setIsAdmin] = useState("");
  const router = useRouter();

 useEffect(() => {
  userData.data.map((el) => {
    if (user?.email === el.email) {
      if (el.admin === true) {
        //admin
        setIsAdmin('/admin/home');
      } else {
        //user
        setIsAdmin('/user/ProfileHome');
      }
    }
  });
 }, [])

  return (
    <Stack direction="column">
      <Margin size={[270, 0, 0, 0]}>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Border overFlow="hidden" borderRadius="50%" borderColor="#4FBF75">
            <Stack width="7vw" height="7vw" bg="#4FBF75" justifyContent="center" alignItems="center" borderRadius="50%">
              <CorrectIcon />
            </Stack>
          </Border>
          <Margin size={[20, 0, 26, 0]}>
            <Text type="H2">ТАНЫ МЭДЭЭЛЛИЙГ АМЖИЛТТАЙ БҮРТГЭЖ АВЛАА.</Text>
          </Margin>
          <Button
            width="270px"
            height="35px"
            bc="1px solid #0066B3"
            borderRadius="2px"
            bgColor="#0066B3"
            color="#fff"
            onClick={() => router.push(isAdmin)}
          >
            <Text type="T2Bold" onClick={() => router.push(isAdmin)}>
              Үндсэн хуудас руу шилжих
            </Text>
          </Button>
        </Stack>
      </Margin>
    </Stack>
  );
};

export default Success;
