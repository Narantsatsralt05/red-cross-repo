import { Button, Margin, Stack, Text, Border } from '../components';
import React from 'react';
import {Header} from '../components/common/header'
import { CorrectIcon } from '../assets/icon/correctIcon'
import Link from 'next/link';

const Success = () => {
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
                        <Text type='H2' >
                            ТАНЫ МЭДЭЭЛЛИЙГ АМЖИЛТТАЙ БҮРТГЭЖ АВЛАА.
                        </Text>
                    </Margin>
                    <Button
                        width="270px"
                        height="35px"
                        bc="1px solid #0066B3"
                        borderRadius="2px"
                        bgColor="#0066B3"
                        color="#fff"
                        onClick={() => {}}
                    >
                        <Link href="/user/profileHome">
                            <Text type="T2Bold" >
                                Үндсэн хуудас руу шилжих
                            </Text> 
                        </Link>
                    </Button>
                </Stack>
            </Margin>
        </Stack>
    )       
}

export default Success;