import { Button, Margin, Stack, Text, Border } from '../components';
import React from 'react';
import Header from '../components/common/header'
import { CorrectIcon } from '../assets/icon/correctIcon'

const Success = () => {
    return (
        <Stack direction="column">
            <Header/>
            <Margin size={[270, 0, 0, 0]}>
                <Stack direction="column" justifyContent="center" alignItems="center">
                <Border overFlow="hidden" borderRadius="50%" borderColor="#4FBF75">
                    <Stack width="150px" height="150px" bg="#4FBF75" justifyContent="center" alignItems="center" borderRadius="50%"> 
                            <CorrectIcon/>
                    </Stack>
                    </Border>
                    <Margin size={[20, 0, 26, 0]}>
                        <Text color='#000000' fontSize="28px" fontWeight="200" letterSpacing="1px">
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
                        cursor="pointer"
                        // onClick={() => }
                    >
                        <Text fontWeight="500" fontSize="16px" cursor="pointer">
                            Үндсэн хуудас руу шилжих
                        </Text> 
                    </Button>
                </Stack>
            </Margin>
        </Stack>
    )       
}

export default Success;