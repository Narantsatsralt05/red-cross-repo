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
import Image from 'next/image';
import exit from '../../assets/icon/Group 5 (1).svg'
import Styledinput from '../core/input';
import Trash from '../../assets/icon/image 1.svg'
import Modal from '@mui/material/Modal';
import Delete from './delete';
import { addDocument, setDocument, useCollection, useDocument } from '../../common/services/firebase';
import { Formik } from 'formik';
import * as Yup from "yup";
import { useEffect } from 'react';

const RightBarCheck = ({ checkBar, setCheckBar, bar, setBar, title, el, headers, ind }) => {
    // const { loading, data } = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/skills');
    // console.log(data[ind]?.uid)
    // useEffect(() => {
    //     console.log(loading)
    //     if (!loading) {
    //         console.log('asd')
    //     }

    // }, [])
    const { data } = useDocument('/staticData/skillProps')
    const propsSelect = useMemo(() => {
        if (title === 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ') return data?.VolunteerNames;
        if (title === 'СУРГАЛТ') return data?.lessonNames
        if (title === 'УР ЧАДВАР') return data?.skillNames
        if (title === 'ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ') return data?.membershipNames;
        if (title === 'ТУСЛАМЖИЙН МЭДЭЭЛЭЛ') return data?.helpNames
        if (title === 'Яаралтай үед холбоо барих гэр бүлийн гишүүний мэдээлэл') return data?.emergencyNames
    }, [data])

    const UptadeDoc = () => {

    }
    const [deleteDoc, setDeleteDoc] = useState(false)
    const New = () => {
        setCheckBar(false)
        setBar(true)
        Add()
    }
    const [firstValue, setfirstValue] = useState('')
    const [secondValue, setsecondValue] = useState(el ? el[1] : '')
    const [thirdValue, setthirdValue] = useState(el ? el[2] : '')
    const [fourthValue, setfourthValue] = useState(el ? el[3] : '')
    const [fifthValue, setfifthValue] = useState(el ? el[4] : '')

    const DataVolunteer = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/volunteerWorkInformation').data[ind]?.uid
    const DataSkill = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/skills').data[ind]?.uid
    const DataTrain = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/coveredTraining').data[ind]?.uid
    const DataMember = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/membershipInformation').data[ind]?.uid
    const DataHelp = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/helpInformation').data[ind]?.uid
    const DataEmergency = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/EmergencyContactPerson').data[ind]?.uid
    const [isSucces, setSucces] = useState('')
    const Add = () => {
        if (title === 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ') {
            el ? setDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/volunteerWorkInformation/${DataVolunteer}`, { additionalInformation: fourthValue, date: thirdValue, time: secondValue, volunteering: firstValue }) : addDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/volunteerWorkInformation`, { additionalInformation: fourthValue, date: thirdValue, time: secondValue, volunteering: firstValue })
            setBar(false)
        }
        if (title === `УР ЧАДВАР`) {
            el ? setDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/skills/${DataSkill}`, { skill: firstValue, skillLevel: secondValue, explanation: thirdValue }) : addDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/skills`, { skill: firstValue, skillLevel: secondValue, explanation: thirdValue })
            setBar(false)
        }
        if (title === `СУРГАЛТ`) {
            el ? setDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/ coveredTraining/${DataTrain}`, { additionalInformation: fifthValue, trainingTime: fourthValue, trainingType: firstValue, when: secondValue, where: thirdValue }) : addDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/ coveredTraining`, { additionalInformation: fifthValue, trainingTime: fourthValue, trainingType: firstValue, when: secondValue, where: thirdValue })
            setBar(false)
        }

        if (title === `ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ`) {
            el ? setDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/membershipInformation/${DataMember}`, { additionalInformation: fourthValue, endDate: thirdValue, startDate: secondValue, membershipType: firstValue }) : addDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/membershipInformation`, { additionalInformation: fourthValue, endDate: thirdValue, startDate: secondValue, membershipType: firstValue })
            setBar(false)
        }
        if (title === `ТУСЛАМЖИЙН МЭДЭЭЛЭЛ`) {
            el ? setDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/helpInformation/${DataHelp}`, { additionalInformation: fourthValue, endDate: thirdValue, startDate: secondValue, typeOfAssistance: firstValue }) : addDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/helpInformation`, { additionalInformation: fourthValue, endDate: thirdValue, startDate: secondValue, typeOfAssistance: firstValue })
            setBar(false)
        }
        if (title === `Яаралтай үед холбоо барих гэр бүлийн гишүүний мэдээлэл`) {
            el ? setDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/EmergencyContactPerson/${DataEmergency}`, { information: firstValue, name: secondValue, phoneNumber: thirdValue }) : addDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/EmergencyContactPerson`, { information: firstValue, name: secondValue, phoneNumber: thirdValue }
            )
            setBar(false)
        }
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
                            <Stack height='100vh' bg='white' direction='column' className='media' bg='white'>
                                <Padding size={[10, 50, 0, 50]}>
                                    <Formik
                                        initialValues={{ text: "" }}

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
                                        initialValues={{ text3: secondValue, text: fourthValue, text1: thirdValue, text2: fifthValue }}
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
                                                        <Stack direction='row' justifyContent='space-between' width='100%'>
                                                            <Margin size={[4, 40, 0, 0]} style={{ width: '280px' }} >
                                                                {title} ЗАСАХ
                                                            </Margin>
                                                            <Image src={exit} onClick={() => { setCheckBar(false), setBar(false) }} />
                                                        </Stack>
                                                    </Margin>
                                                    <Margin size={[30, 0, 0, 0]}>
                                                        <Center>
                                                            <label>
                                                                {headers[0]}
                                                                <Margin size={[10, 0, 0, 0]}>
                                                                    {() => setfirstValue(el ? el[0] : '')}
                                                                    <Select value={el ? el[0] : ''} arr={propsSelect} setfirstValue={setfirstValue} firstValue={firstValue} ></Select>
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
                                                                        <Styledinput style={{ fontSize: '12px', border: '0.4px solid gray' }} width='311px' height='25px'
                                                                            onBlur={handleBlur} id='text3'
                                                                            onChange={(e) => {
                                                                                setsecondValue(e.target.value),
                                                                                    handleChange(e)
                                                                            }}
                                                                            value={secondValue} borderRadius='3px' />
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
                                                                    <Styledinput style={{ fontSize: '12px', border: '0.4px solid gray' }} width='311px' height='25px'
                                                                        onBlur={handleBlur} id='text1'
                                                                        onChange={(e) => {
                                                                            setthirdValue(e.target.value),
                                                                                handleChange(e)
                                                                        }} value={thirdValue} borderRadius='3px' />
                                                                    {errors.text1 && touched.text1 && (
                                                                        <Text color='red'>
                                                                            {errors.text1}
                                                                        </Text>
                                                                    )}
                                                                </Margin>
                                                            </label>
                                                        </Center>
                                                    </Margin>
                                                    {headers[3] ?
                                                        <Margin size={[30, 0, 0, 0]}>
                                                            <Center>
                                                                <label>
                                                                    {headers[3]}
                                                                    <Margin size={[10, 0, 0, 0]}>
                                                                        <Styledinput style={{ fontSize: '12px', border: '0.4px solid gray' }} width='311px' height='25px'
                                                                            onBlur={handleBlur} id='text'
                                                                            onChange={(e) => {
                                                                                setfourthValue(e.target.value),
                                                                                    handleChange(e)
                                                                            }} value={fourthValue} borderRadius='3px' />
                                                                        {errors.text && touched.text && (
                                                                            <Text color='red'>
                                                                                {errors.text}
                                                                            </Text>
                                                                        )}
                                                                    </Margin>
                                                                </label>
                                                            </Center>
                                                        </Margin> : ''}
                                                    {headers[4] ?
                                                        <Margin size={[30, 0, 0, 0]}>
                                                            <Center>
                                                                <label>
                                                                    {headers[3]}
                                                                    <Margin size={[10, 0, 0, 0]}>
                                                                        <Styledinput style={{ fontSize: '12px', border: '0.4px solid gray' }} width='311px' height='25px'
                                                                            onBlur={handleBlur} id='text2'
                                                                            onChange={(e) => {
                                                                                setfifthValue(e.target.value),
                                                                                    handleChange(e)
                                                                            }} value={fifthValue} borderRadius='3px' />
                                                                        {errors.text2 && touched.text2 && (
                                                                            <Text color='red'>
                                                                                {errors.text2}
                                                                            </Text>
                                                                        )}
                                                                    </Margin>
                                                                </label>
                                                            </Center>
                                                        </Margin> : ''}
                                                    {isSucces ? window.location.reload() : ''}
                                                    <Position position='fixed' bottom='50px'>
                                                        <Margin size={[0, 0, 0, 0]}>
                                                            <Border borderWidth={[1, 0, 0, 0]} borderColor='#DCDCDC' style={{ width: '340px' }} >
                                                                <Margin size={[0, 0, 0, 0]}>
                                                                    <Padding size={[20, 0, 0, 0]}>
                                                                        {el ? <Stack direction='row' width='21vw' >
                                                                            <Image width='20px' height='20px' src={Trash} onClick={() => setDeleteDoc(!deleteDoc)} />
                                                                            <Position position='absolute' bottom='30px' left='-110px'>
                                                                                {deleteDoc && <Delete DataVolunteer={DataVolunteer} DataSkill={DataSkill} DataTrain={DataTrain} DataMember={DataMember} DataHelp={DataHelp} DataEmergency={DataEmergency} title={title} ind={ind} setBar={setBar} />}
                                                                            </Position>
                                                                            <Margin size={[0, 0, 0, 10]}>
                                                                                <Button width='60px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' onClick={() => setCheckBar(false)}>Болих</Button>
                                                                            </Margin>
                                                                            <Margin size={[0, 5, 0, 5]}>
                                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' disabled={errors.text3 && touched.text3 && true} style={{ cursor: errors.text3 && touched.text3 && 'not-allowed' }} onClick={New}>Хадгалаад шинэ</Button>
                                                                            </Margin>
                                                                            <Margin size={[0, 0, 0, 0]}>
                                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' disabled={errors.text3 && touched.text3 && true} style={{ cursor: errors.text3 && touched.text3 && 'not-allowed' }} onClick={Add} >Хадгалах</Button>
                                                                            </Margin>
                                                                        </Stack>
                                                                            :
                                                                            <Stack direction='row' width=''>
                                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' disabled={errors.text3 && touched.text3 && true} style={{ cursor: errors.text3 && touched.text3 && 'not-allowed' }} onClick={New}>Хадгалаад шинэ</Button>
                                                                                <Margin size={[0, 0, 0, 20]} >
                                                                                    <Button width='120px' height='23px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' disabled={errors.text3 && touched.text3 && true} style={{ cursor: errors.text3 && touched.text3 && 'not-allowed' }} onClick={Add}>Хадгалах</Button>
                                                                                </Margin>
                                                                            </Stack>
                                                                        }
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
                </Border >
            </Text >
        </Modal >
    )
}

export default RightBarCheck