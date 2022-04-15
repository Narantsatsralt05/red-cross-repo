import React, { useState } from 'react'
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
import Image from 'next/image';
import exit from '../../assets/icon/icons/Group 5 (1).svg'
import Styledinput from '../core/input';
import Trash from '../../assets/icon/icons/image 1.svg'
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import Delete from './delete';

const RightBarCheck = ({ checkBar, setCheckBar, first, second, third, fourth, fifth, bar, setBar }) => {
    const newSecond = second.split('.').join('-')
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
    };
    const [open, setOpen] = React.useState(true);
    const [deleteDoc, setDeleteDoc] = useState(false)
    const New = () => {
        setCheckBar(false)
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
                        <Stack justifyContent='right' width='100vw' bg='' height='106vh' >
                            <Stack height='100vh' bg='white' direction='column' className='media' bg='white'>
                                <Padding size={[10, 50, 0, 50]}>
                                    <Margin size={[20, 0, 0, 0]}>
                                        <Stack direction='row' justifyContent='space-between' width='100%'>
                                            <Margin size={[4, 40, 0, 0]}>
                                                ХАМРАГДСАН СУРГАЛТ ЗАСАХ
                                            </Margin>
                                            <Image src={exit} onClick={() => setCheckBar(!checkBar)} />
                                        </Stack>
                                    </Margin>
                                    <Margin size={[30, 0, 0, 0]}>
                                        <Center>
                                            <label>
                                                Сургалтын нэр
                                                <Margin size={[10, 0, 0, 0]}>
                                                    <Styledinput width='311px' height='25px' borderRadius='3px' border='0.4px solid gray' value={first} />

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
                                                        <Styledinput type='date' width='311px' height='25px' borderRadius='3px' border='0.4px solid gray' value={newSecond} style={{ fontSize: '12px' }} />
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
                                                    <Styledinput width='311px' height='25px' borderRadius='3px' border='0.4px solid gray' value={third} />
                                                </Margin>
                                            </label>
                                        </Center>
                                    </Margin>
                                    <Margin size={[30, 0, 0, 0]}>
                                        <Center>
                                            <label>
                                                Нэмэлт мэдээлэл
                                                <Margin size={[10, 0, 0, 0]}>
                                                    <Styledinput width='311px' height='25px' borderRadius='3px' border='0.4px solid gray' value={fourth} />
                                                </Margin>
                                            </label>
                                        </Center>
                                    </Margin>
                                    <Position position='fixed' bottom='50px'>
                                        <Margin size={[0, 0, 0, 0]}>
                                            <Border borderWidth={[1, 0, 0, 0]} borderColor='#DCDCDC' style={{ width: '340px' }} >
                                                <Margin size={[0, 0, 0, 0]}>
                                                    <Padding size={[20, 0, 0, 0]}>
                                                        <Stack direction='row' width='21vw' >
                                                            <Image width='20px' height='20px' src={Trash} onClick={() => setDeleteDoc(!deleteDoc)} />
                                                            <Position position='absolute' bottom='30px' left='-110px'>
                                                                {deleteDoc ? <Delete /> : ''}
                                                            </Position>
                                                            <Margin size={[0, 0, 0, 10]}>
                                                                <Button width='60px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' onClick={() => setCheckBar(!checkBar)}  >Болих</Button>
                                                            </Margin>
                                                            <Margin size={[0, 5, 0, 5]}>
                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' onClick={New}>Хадгалаад шинэ</Button>
                                                            </Margin>
                                                            <Margin size={[0, 0, 0, 0]}>
                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' >Хадгалах</Button>
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
                </Border >
            </Text >
        </Modal>
    )
}

export default RightBarCheck