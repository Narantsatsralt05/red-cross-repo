import React from 'react'
import Stack from '../styled-component/stack'
import Logo from '../assest/image/logo.svg'
import Image from 'next/image'
import { Center } from '../styled-component/center'
import Text from '../styled-component/text'
import { Margin } from '../styled-component/margin'
import { StyledBorder } from '../components/styledBorder'
import { StyledInput } from '../components/input'
import { Button } from '../components/button'
import sainDurrin from '../assest/icon/sainDuriin.svg'
import gishuun from '../assest/icon/gishuun.svg'
import tuslamj from '../assest/icon/tuslamj.svg'




const Login = () => {
    return (
        <Stack direction='row'>
            <Stack width='32%' justifyContent='center' direction='column' >
                <Margin size={[77, 0, 0, 0]}>
                    <Stack justifyContent='center'  >
                        <Image src={Logo} width={61} height={62} />
                    </Stack>
                </Margin>
                <Margin size={[17, 0, 0, 0]}>
                    <Stack justifyContent='center'>
                        <Text color='#0066B3' FontSize='12px' FontWeight='500' LineHeight='12px' FontFamily='Roboto' FontStyle='normal'>
                            МОНГОЛЫН УЛААН ЗАГАЛМАЙ НИЙГЭМЛЭГ
                        </Text>
                    </Stack>
                </Margin>
                <Margin size={[10, 0, 0, 0]}>
                    <Stack justifyContent='center'>
                        <Text color='#7A7A7A' FontSize='11px' FontWeight='100' LineHeight='13px' FontFamily='Roboto' FontStyle='normal'>
                            <StyledBorder BordeerBottom='1px solid #F5F5F5' width='315px'>
                                <Margin size={[0, 0, 20, 90]}>
                                    Цахим мэдээллийн систем
                                </Margin>
                            </StyledBorder>
                        </Text>
                    </Stack>
                </Margin>
                <Center>
                    <Margin size={[30, 0, 0, 0]}>
                        <Text color='black' FontSize='22px' FontWeight='400' LineHeight='26px' FontFamily='Roboto' FontStyle='normal'>
                            НЭВТРЭХ
                        </Text>
                    </Margin>
                </Center>
                <Center>
                    <label>
                        <Margin size={[0, 0, 5, 2]}>
                            <Text color='#1B1B1B' FontSize='10px' FontWeight='300' LineHeight='12px' FontFamily='Roboto' FontStyle='normal'>
                                И-мэйл хаяг
                            </Text>
                        </Margin>
                        <StyledInput width='294px' height='30px' border='1px solid #D0D0D0' borderradius='5px' placeholder='и-мэйл' />
                    </label>
                </Center>
                <Center>
                    <Margin size={[30, 0, 0, 0]}>
                        <label>
                            <Margin size={[0, 0, 5, 2]}>
                                <Text color='#1B1B1B' FontSize='10px' FontWeight='300' LineHeight='12px' FontFamily='Roboto' FontStyle='normal'>
                                    Нууц үг
                                </Text>
                            </Margin>
                            <StyledInput width='294px' height='30px' border='1px solid #D0D0D0' borderradius='5px' placeholder='Нууц үг' />
                        </label>
                    </Margin>
                </Center>
                <Center>
                    <Margin size={[25, 0, 0, 0]}>
                        <Button bgColor='#0066B3' width='294px' height='30px' radius='5px'>
                            <Stack justifyContent='center' >
                                <Margin size={[7, 0, 0, 0]}>
                                    <Text color='white' FontSize='14px' FontWeight='500' LineHeight='16px' FontFamily='Roboto' FontStyle='normal'>
                                        НЭВТРЭХ
                                    </Text>
                                </Margin>
                            </Stack>
                        </Button>
                    </Margin>
                </Center>
                <Center>
                    <Stack height='33vh' alignItems='end'>
                        <Text color='#7A7A7A' FontSize='7px' FontWeight='300' LineHeight='8px' FontFamily='Roboto' FontStyle='normal'>
                            @ 2018-2021 Монголын улаан загалмай нийгэмлэг
                        </Text>
                    </Stack>
                </Center>
            </Stack>


            <Stack width='68%' alignItems='end' height='95vh' justifyContent='center'>
                <Stack width='700px' justifyContent='space-around' className='text' height='67px' >
                    <Stack direction='row' alignItems='center' >
                        <Image src={sainDurrin} width='50px' height='50px'></Image>
                        <Text color='white' FontSize='12px' FontWeight='500' LineHeight='14px' FontFamily='Roboto' FontStyle='normal'>
                            <Margin size={[0, 0, 0, 10]}>
                                САЙН ДУРЫН <br />ИДЭВХТНИЙ БҮРТГЭЛ
                            </Margin>
                        </Text>
                    </Stack>

                    <Stack direction='row' alignItems='center' >
                        <Image src={gishuun} width='50px' height='50px'></Image>
                        <Text color='white' FontSize='12px' FontWeight='500' LineHeight='14px' FontFamily='Roboto' FontStyle='normal'>
                            <Margin size={[0, 0, 0, 10]}>
                                ГИШҮҮН, ДЭМЖЭГЧДИЙН <br /> БҮРТГЭЛ
                            </Margin>
                        </Text>
                    </Stack>
                    <Stack direction='row' alignItems='center' >
                        <Image src={tuslamj} width='50px' height='50px'></Image>
                        <Text color='white' FontSize='12px' FontWeight='500' LineHeight='14px' FontFamily='Roboto' FontStyle='normal'>
                            <Margin size={[0, 0, 0, 10]}>
                                ТУСЛАМЖ ХҮРТЭГЧИЙН <br /> БҮРТГЭЛ
                            </Margin>
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Login