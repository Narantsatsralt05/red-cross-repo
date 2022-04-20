import React, { useEffect, useState } from 'react'
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
import exit from '../../assets/icon/Group 5 (1).svg'
import Image from 'next/image';
import Styledinput from '../core/input';
import Modal from '@mui/material/Modal';
import { addDocument, useCollection, useDocument } from '../../hooks';
import { Formik } from "formik";
import * as Yup from "yup";
const RightBar = ({ bar, setBar, checkBar, setCheckBar, title, el, headers }) => {

    const data = useDocument("/staticData/lessonNames")
    const lesson = Object.keys(data.data)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
    };
    const [skillValue, setSkillValue] = useState('')
    const [dateValue, setdateValue] = useState('')
    const [WhereValue, setWhereValue] = useState('')
    const [infoValue, setinfoValue] = useState('')
    const [succesfly, setSucces] = useState('')
    const [open, setOpen] = React.useState(true);
    const New = () => {
        setBar(false)
        setBar(true)
    }
    const option = lesson?.map((lessonItem) => {
        return { text: lessonItem }
    });
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
                                    <Formik
                                        initialValues={{ text: "" }}
                                        onSubmit={async values => {
                                            await new Promise(resolve => setTimeout(resolve, 500));
                                            alert(JSON.stringify(values, null, 2));
                                        }}
                                        validationSchema={Yup.object().shape({
                                            text: Yup.string()
                                                .required("Required"),
                                            text1: Yup.string()
                                                .required("Required")
                                        })}
                                    >
                                        {props => {
                                            const {
                                                values,
                                                touched,
                                                errors,
                                                dirty,
                                                isSubmitting,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                handleReset
                                            } = props;
                                            return (
                                                <form onSubmit={handleSubmit}>
                                                    <Margin size={[20, 0, 0, 0]}>
                                                        <Stack direction='row' justifyContent='space-between' width='100%' >
                                                            <Margin size={[4, 40, 0, 0]}>
                                                                {title} ЗАСАХ
                                                            </Margin>
                                                            <Image src={exit} onClick={() => { setBar(!bar) }} />
                                                        </Stack>
                                                    </Margin>
                                                    <Margin size={[30, 0, 0, 0]}>
                                                        <Center>
                                                            <label>
                                                                {headers[0]}
                                                                <Margin size={[10, 0, 0, 0]}>
                                                                    {/* <Select setSkillValue={setSkillValue} skillValue={skillValue} arr={option}></Select> */}
                                                                    {/* <Select setSkillValue={setSkillValue} skillValue={skillValue} arr={option}></Select> */}
                                                                    <Select arr={{ text: 'hello' }}></Select>

                                                                </Margin>
                                                            </label>
                                                        </Center>
                                                    </Margin>
                                                    <Margin size={[30, 0, 0, 0]}>
                                                        <Center>
                                                            <label>
                                                                {headers[1]}
                                                                <Margin size={[10, 0, 0, 0]}>
                                                                    <Text fontFamily='Roboto' font-style='normal' >
                                                                        <Styledinput type='date' width='311px' height='25px' borderRadius='3px'
                                                                            style={{ fontSize: '12px', border: '0.4px solid gray' }} onChange={(e) => setdateValue(e.target.value)} />
                                                                    </Text>
                                                                </Margin>
                                                            </label>
                                                        </Center>
                                                    </Margin>
                                                    <Margin size={[30, 0, 0, 0]}>
                                                        <Center>
                                                            <label>
                                                                {headers[2]}

                                                                <Margin size={[10, 0, 0, 0]}>
                                                                    <Styledinput width='311px' height='25px' borderRadius='3px' style={{ fontSize: '12px', border: '0.4px solid gray' }}
                                                                        id="text1" type="text" value={values.text1}
                                                                        onBlur={handleBlur} onChange={(e) => {
                                                                            setWhereValue(e.target.value);
                                                                            handleChange(e);
                                                                        }} />
                                                                    {errors.text1 && touched.text1 && (
                                                                        <Text color='red'>
                                                                            {errors.text1}
                                                                        </Text>
                                                                    )}
                                                                </Margin>
                                                            </label>
                                                        </Center>
                                                    </Margin>
                                                    {headers[3] ? <Margin size={[30, 0, 0, 0]}>
                                                        <Center>
                                                            <label>
                                                                {headers[3]}
                                                                <Margin size={[10, 0, 0, 0]}>
                                                                    <Styledinput width='311px' height='25px' borderRadius='3px' style={{ fontSize: '12px', border: '0.4px solid gray' }}
                                                                        id="text" type="text" value={values.text}
                                                                        onBlur={handleBlur} onChange={(e) => {
                                                                            setinfoValue(e.target.value);
                                                                            handleChange(e);
                                                                        }} />
                                                                    {errors.text && touched.text && (
                                                                        <Text color='red'>
                                                                            {errors.text}
                                                                        </Text>
                                                                    )}
                                                                </Margin>
                                                            </label>
                                                        </Center>
                                                    </Margin> : ''}
                                                    {headers[4] ? <Margin size={[30, 0, 0, 0]}>
                                                        <Center>
                                                            <label>
                                                                {headers[4]}
                                                                <Margin size={[10, 0, 0, 0]}>
                                                                    <Styledinput width='311px' height='25px' borderRadius='3px' style={{ fontSize: '12px', border: '0.4px solid gray' }}
                                                                        id="text" type="text" value={values.text}
                                                                        onBlur={handleBlur} onChange={(e) => {
                                                                            setinfoValue(e.target.value);
                                                                            handleChange(e);
                                                                        }} />
                                                                    {errors.text && touched.text && (
                                                                        <Text color='red'>
                                                                            {errors.text}
                                                                        </Text>
                                                                    )}
                                                                </Margin>
                                                            </label>
                                                        </Center>
                                                    </Margin> : ''}
                                                    {succesfly ? 'amjilttai' : ''}
                                                    <Position position='fixed' bottom='50px'>
                                                        <Margin size={[0, 0, 0, 0]}>
                                                            <Border borderWidth={[1, 0, 0, 0]} borderColor='#DCDCDC' style={{ width: '314px' }}>
                                                                <Margin size={[0, 0, 0, 40]}>
                                                                    <Padding size={[20, 0, 0, 0]}>
                                                                        <Stack direction='row' width=''>
                                                                            <Button width='120px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' onClick={New}>Хадгалаад шинэ</Button>
                                                                            <Margin size={[0, 0, 0, 20]}>
                                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' onClick={() => addDocument("/user/Y2Aiw9KPlijMFfTHIpsy/skills", { skill: skillValue, date: dateValue, where: WhereValue, additionalInformation: infoValue }, setSucces)}>Хадгалах</Button>
                                                                            </Margin>
                                                                        </Stack>
                                                                    </Padding>
                                                                </Margin>
                                                            </Border>
                                                        </Margin>
                                                    </Position>
                                                </form>
                                            );
                                        }}
                                    </Formik>
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