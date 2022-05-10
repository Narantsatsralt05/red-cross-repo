import React, { useMemo, useState } from 'react'
import {
    Button,
    Center,
    Margin,
    Padding,
    Position,
    Stack,
    Border,
    Text,
} from '../index';
import Select from '../common/dropdown'
import exit from '../../assets/icon/Group 5 (1).svg'
import Image from 'next/image';
import Styledinput from '../core/input';
import Modal from '@mui/material/Modal';
import { addDocument, useCollection, useDocument } from '../../hooks';
import { Formik } from "formik";
import * as Yup from "yup";
const RightBar = ({ bar, setBar, checkBar, setCheckBar, title, el, headers }) => {
    const { data } = useDocument("/staticData/skillProps")
    const propsSelect = useMemo(() => {
        if (title === 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ') return data.VolunteerNames;
        if (title === 'СУРГАЛТ') return data.lessonNames
        if (title === 'УР ЧАДВАР') return data.skillNames
        if (title === 'ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ') return data.membershipNames;
        if (title === 'ТУСЛАМЖИЙН МЭДЭЭЛЭЛ') return data.helpNames
        if (title === 'Яаралтай үед холбоо барих гэр бүлийн гишүүний мэдээлэл') return data.emergencyNames
    }, [data])

  
    const [firstValue, setfirstValue] = useState('')
    const [secondValue, setsecondValue] = useState('')
    const [thirdValue, setthirdValue] = useState('')
    const [fourthValue, setfourthValue] = useState('')
    const [fifthValue, setfifthValue] = useState('')
    const [isSucces, setSucces] = useState('')
    const New = () => {
        setBar(false)
        Add()
        setBar(true)
    }
    const Add = () => {
        if (title === 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ') addDocument('/user/Y2Aiw9KPlijMFfTHIpsy/volunteerWorkInformation', { additionalInformation: fourthValue, date: thirdValue, time: secondValue, volunteering: firstValue }, setSucces)
        if (title === 'УР ЧАДВАР') addDocument('/user/Y2Aiw9KPlijMFfTHIpsy/skills', { skill: firstValue, skillLevel: secondValue, explanation: thirdValue }, setSucces)
        if (title === 'СУРГАЛТ') addDocument('/user/Y2Aiw9KPlijMFfTHIpsy/ coveredTraining', { additionalInformation: fifthValue, trainingTime: fourthValue, trainingType: firstValue, when: secondValue, where: thirdValue }, setSucces)
        if (title === 'ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ') addDocument('/user/Y2Aiw9KPlijMFfTHIpsy/membershipInformation', { additionalInformation: fourthValue, endDate: thirdValue, startDate: secondValue, membershipType: firstValue }, setSucces)
        if (title === 'ТУСЛАМЖИЙН МЭДЭЭЛЭЛ') addDocument('/user/Y2Aiw9KPlijMFfTHIpsy/helpInformation', { additionalInformation: fourthValue, endDate: thirdValue, startDate: secondValue, typeOfAssistance: firstValue }, setSucces)
        if (title === 'Яаралтай үед холбоо барих гэр бүлийн гишүүний мэдээлэл') addDocument('/user/Y2Aiw9KPlijMFfTHIpsy/EmergencyContactPerson', { information: firstValue, name: secondValue, phoneNumber: thirdValue }, setSucces)
    }
    return (
        <Modal
            open={true}
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
                                        onSubmit={async values => {
                                            await new Promise(resolve => setTimeout(resolve, 500));
                                            alert(JSON.stringify(values, null, 2));
                                        }}
                                        validationSchema={Yup.object().shape({
                                            text: Yup.string()
                                                .required("Required"),
                                            text1: Yup.string()
                                                .required("Required"),
                                            text2: Yup.string()
                                                .required("Required"),
                                            text3: Yup.string()
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
                                                            <Margin size={[4, 40, 0, 0]} style={{ width: '280px' }}>
                                                                {title}
                                                            </Margin>
                                                            <Image src={exit} onClick={() => { setBar(!bar) }} />
                                                        </Stack>
                                                    </Margin>
                                                    <Margin size={[30, 0, 0, 0]}>
                                                        <Center>
                                                            <label>
                                                                {headers[0]}
                                                                <Margin size={[10, 0, 0, 0]}>
                                                                    <Select arr={propsSelect} setfirstValue={setfirstValue} firstValue={firstValue}></Select>
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
                                                                        <Styledinput width='311px' height='25px' borderRadius='3px' style={{ fontSize: '12px', border: '0.4px solid gray' }}
                                                                            onBlur={handleBlur} value={values.text3} id='text3'
                                                                            onChange={(e) => {
                                                                                setsecondValue(e.target.value),
                                                                                    handleChange(e)
                                                                            }} />
                                                                        {errors.text3 && touched.text3 && (
                                                                            <Text color='red'>
                                                                                {errors.text3}
                                                                            </Text>
                                                                        )}
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
                                                                        id="text1" value={values.text1}
                                                                        onBlur={handleBlur} onChange={(e) => {
                                                                            setthirdValue(e.target.value);
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
                                                                            setfourthValue(e.target.value);
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
                                                                        id="text2" type="text" value={values.text2}
                                                                        onBlur={handleBlur} onChange={(e) => {
                                                                            setfifthValue(e.target.value);
                                                                            handleChange(e);
                                                                        }} />
                                                                    {errors.text2 && touched.text2 && (
                                                                        <Text color='red'>
                                                                            {errors.text2}
                                                                        </Text>
                                                                    )}
                                                                </Margin>
                                                            </label>
                                                        </Center>
                                                    </Margin> : ''}
                                                    {isSucces ? window.location.reload() : setBar(true)}
                                                    <Position position='fixed' bottom='50px'>
                                                        <Margin size={[0, 0, 0, 0]}>
                                                            <Border borderWidth={[1, 0, 0, 0]} borderColor='#DCDCDC' style={{ width: '314px' }}>
                                                                <Margin size={[0, 0, 0, 40]}>
                                                                    <Padding size={[20, 0, 0, 0]}>
                                                                        <Stack direction='row' width=''>
                                                                            <Button width='120px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' disabled={dirty} style={{ cursor: dirty ? '' : 'not-allowed' }} onClick={New}>Хадгалаад шинэ</Button>
                                                                            <Margin size={[0, 0, 0, 20]} >
                                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' disabled={errors.text3 && touched.text3 && true} style={{ cursor: errors.text3 && touched.text3 && 'not-allowed' }} onClick={Add}>Хадгалах</Button>
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