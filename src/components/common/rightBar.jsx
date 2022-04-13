import React from 'react'
import {
    Button,
    Center,
    Picture,
    Margin,
    Padding,
    Position,
    Stack,
    Border,
    Text,
    StyledInput,
    Styledoneletter
} from '../index';
import Select from '../common/select'
import styled from 'styled-components';
import exit from '../icons/Group 5 (1).svg'
import Image from 'next/image';
import Styledinput from '../core/input';
import Modal from '@mui/material/Modal';

const RightBar = ({ bar, setBar, checkBar, setCheckBar }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
    };
    const [open, setOpen] = React.useState(true);
    const New = () => {
        setBar(false)
        setBar(true)
    }
    return (

        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Text fontFamily='Roboto' lineHeight='12px' fontSize='0.7vw' fontWeight='Regular' fontSize='12px' fontWeight='400' lineHeight='12px'>
                <Border style={{ border: '1px solid black' }}>
                    <Position position='fixed' top='0' right='0' style={{ zIndex: 1 }}>
                        <Stack justifyContent='right' width='100vw' height='106vh' >
                            <Stack direction='column' bg='white' className='media'>
                                <Padding size={[10, 50, 0, 50]}>
                                    <Margin size={[20, 0, 0, 0]}>
                                        <Stack direction='row' justifyContent='space-between' width='100%' >
                                            <Margin size={[4, 40, 0, 0]}>
                                                ХАМРАГДСАН СУРГАЛТ ЗАСАХ
                                            </Margin>
                                            <Image src={exit} onClick={() => { setBar(!bar) }} />
                                        </Stack>
                                    </Margin>
                                    <Margin size={[30, 0, 0, 0]}>
                                        <Center>
                                            <label>
                                                Сургалтын нэр
                                                <Margin size={[10, 0, 0, 0]}>
                                                    <Select arr={['hello', 'hello']}></Select>
                                                </Margin>
                                            </label>
                                        </Center>
                                    </Margin>
                                    <Margin size={[30, 0, 0, 0]}>
                                        <Center>
                                            <label>
                                                Он/сар/өдөр
                                                <Margin size={[10, 0, 0, 0]}>
                                                    <Text fontFamily='Roboto' font-style='normal' >
                                                        <Styledinput type='date' width='311px' height='25px' borderRadius='3px' border='0.4px solid gray' style={{ fontSize: '12px' }} />
                                                    </Text>
                                                </Margin>
                                            </label>
                                        </Center>
                                    </Margin>
                                    <Margin size={[30, 0, 0, 0]}>
                                        <Center>
                                            <label>
                                                Байршил
                                                <Margin size={[10, 0, 0, 0]}>
                                                    <Styledinput width='311px' height='25px' borderRadius='3px' border='0.4px solid gray' />
                                                </Margin>
                                            </label>
                                        </Center>
                                    </Margin>
                                    <Margin size={[30, 0, 0, 0]}>
                                        <Center>
                                            <label>
                                                Нэмэлт мэдээлэл
                                                <Margin size={[10, 0, 0, 0]}>
                                                    <Styledinput width='311px' height='25px' borderRadius='3px' border='0.4px solid gray' />
                                                </Margin>
                                            </label>
                                        </Center>
                                    </Margin>
                                    <Position position='fixed' bottom='50px'>
                                        <Margin size={[0, 0, 0, 0]}>
                                            <Border borderWidth={[1, 0, 0, 0]} borderColor='#DCDCDC' style={{ width: '314px' }}>
                                                <Margin size={[0, 0, 0, 40]}>
                                                    <Padding size={[20, 0, 0, 0]}>
                                                        <Stack direction='row' width=''>
                                                            <Button width='120px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' onClick={New}>Хадгалаад шинэ</Button>
                                                            <Margin size={[0, 0, 0, 20]}>
                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px'>Хадгалах</Button>
                                                            </Margin>
                                                        </Stack>
                                                    </Padding>
                                                </Margin>
                                            </Border>
                                        </Margin>
                                    </Position>
                                </Padding>
                            </Stack>
                        </Stack>
                    </Position >
                </Border>
            </Text>
        </Modal >

    )
}

export default RightBar