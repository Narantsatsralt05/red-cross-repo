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
import Styledinput from '../core/input';
import Trash from '../../assets/icon/image 1.svg'
import Modal from '@mui/material/Modal';
import Delete from './delete';
import { addDocument, setDocument, useCollection, useDocument } from '../../common/services/firebase';
import { Formik } from 'formik';
import * as Yup from "yup";
import { useEffect } from 'react';
import { useAuthContext } from '../../common/context/AuthContext';

const RightBarCheck = ({ checkBar, setCheckBar, bar, setBar, title, el, headers, ind }) => {

    const { user } = useAuthContext()
    const { data } = useDocument('/staticData/skillProps')
    const propsSelect = useMemo(() => {
        if (title === 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ') return data?.VolunteerNames;
        if (title === 'СУРГАЛТ') return data?.lessonNames
        if (title === 'УР ЧАДВАР') return data?.skillNames
        if (title === 'ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ') return data?.membershipNames;
        if (title === 'ТУСЛАМЖИЙН МЭДЭЭЛЭЛ') return data?.helpNames
        if (title === 'Яаралтай үед холбоо барих гэр бүлийн гишүүний мэдээлэл') return data?.emergencyNames
    }, [data])
    const [deleteDoc, setDeleteDoc] = useState(false)
    const New = () => {
        setBar(false)
        Add()
        setBar(true)
    }
    const [firstValue, setfirstValue] = useState('')
    const [secondValue, setsecondValue] = useState(el ? el[1] : '')
    const [thirdValue, setthirdValue] = useState(el ? el[2] : '')
    const [fourthValue, setfourthValue] = useState(el ? el[3] : '')
    const [fifthValue, setfifthValue] = useState(el ? el[4] : '')

    const DataVolunteer = useCollection(`/user/${user?.uid}/volunteerWorkInformation`).data[ind]?.uid
    const DataSkill = useCollection(`/user/${user?.uid}/skills`).data[ind]?.uid
    const DataTrain = useCollection(`/user/${user?.uid}/coveredTraining`).data[ind]?.uid
    const DataMember = useCollection(`/user/${user?.uid}/membershipInformation`).data[ind]?.uid
    const DataHelp = useCollection(`/user/${user?.uid}/helpInformation`).data[ind]?.uid
    const DataEmergency = useCollection(`/user/${user?.uid}/EmergencyContactPerson`).data[ind]?.uid
    const [isSucces, setSucces] = useState('')
    const Add = () => {
        if (title === 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ') {
            el ? setDocument(`/user/${user?.uid}/volunteerWorkInformation/${DataVolunteer}`, { additionalInformation: fourthValue, date: thirdValue, time: secondValue, volunteering: firstValue }) : addDocument(`/user/${user?.uid}/volunteerWorkInformation`, { additionalInformation: fourthValue, date: thirdValue, time: secondValue, volunteering: firstValue })
        }
        if (title === `УР ЧАДВАР`) {
            el ? setDocument(`/user/${user?.uid}/skills/${DataSkill}`, { skill: firstValue, skillLevel: secondValue, explanation: thirdValue }) : addDocument(`/user/${user?.uid}/skills`, { skill: firstValue, skillLevel: secondValue, explanation: thirdValue })
        }
        if (title === `СУРГАЛТ`) {
            el ? setDocument(`/user/${user?.uid}/coveredTraining/${DataTrain}`, { additionalInformation: fifthValue, trainingTime: fourthValue, trainingType: firstValue, when: secondValue, where: thirdValue }) : addDocument(`/user/${user?.uid}/coveredTraining`, { additionalInformation: fifthValue, trainingTime: fourthValue, trainingType: firstValue, when: secondValue, where: thirdValue })
        }

        if (title === `ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ`) {
            el ? setDocument(`/user/${user?.uid}/membershipInformation/${DataMember}`, { additionalInformation: fourthValue, endDate: thirdValue, startDate: secondValue, membershipType: firstValue }) : addDocument(`/user/${user?.uid}/membershipInformation`, { additionalInformation: fourthValue, endDate: thirdValue, startDate: secondValue, membershipType: firstValue })
        }
        if (title === `ТУСЛАМЖИЙН МЭДЭЭЛЭЛ`) {
            el ? setDocument(`/user/${user?.uid}/helpInformation/${DataHelp}`, { additionalInformation: fourthValue, endDate: thirdValue, startDate: secondValue, typeOfAssistance: firstValue }) : addDocument(`/user/${user?.uid}/helpInformation`, { additionalInformation: fourthValue, endDate: thirdValue, startDate: secondValue, typeOfAssistance: firstValue })
        }
        if (title === `Яаралтай үед холбоо барих гэр бүлийн гишүүний мэдээлэл`) {
            el ? setDocument(`/user/${user?.uid}/EmergencyContactPerson/${DataEmergency}`, { information: firstValue, name: secondValue, phoneNumber: thirdValue }) : addDocument(`/user/${user?.uid}/EmergencyContactPerson`, { information: firstValue, name: secondValue, phoneNumber: thirdValue }
            )
        }
        setBar(false)
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
                            <Stack height='100vh'  direction='column' className='media' >
                                <Padding size={[10, 50, 0, 50]} style={{backgroundColor: '#f0f4f878'}} >
                                    <Formik
                                        initialValues={{ fourthText: '', thirdText: '', fifthText: '', secondText: '' }}

                                        validationSchema={Yup.object().shape({
                                            fourthText: Yup.string()
                                                .required("Required"),
                                            thirdText: Yup.string()
                                                .required("Required"),
                                            fifthText: Yup.string()
                                                .required("Required"),
                                            secondText: Yup.string()
                                                .required("Required"),
                                        })}
                                        initialValues={{ secondText: secondValue, fourthText: fourthValue, thirdText: thirdValue, fifthText: fifthValue }}
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
                                                            <img src={exit.src} onClick={() => { setCheckBar(false), setBar(false) }} />
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
                                                                            onBlur={handleBlur} id='secondText'
                                                                            onChange={(e) => {
                                                                                setsecondValue(e.target.value),
                                                                                    handleChange(e)
                                                                            }}
                                                                            value={secondValue} borderRadius='3px' />
                                                                        {errors.secondText && touched.secondText && (
                                                                            <Text color='red'>
                                                                                {errors.secondText}
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
                                                                        onBlur={handleBlur} id='thirdText'
                                                                        onChange={(e) => {
                                                                            setthirdValue(e.target.value),
                                                                                handleChange(e)
                                                                        }} value={thirdValue} borderRadius='3px' />
                                                                    {errors.thirdText && touched.thirdText && (
                                                                        <Text color='red'>
                                                                            {errors.thirdText}
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
                                                                            onBlur={handleBlur} id='fourthText'
                                                                            onChange={(e) => {
                                                                                setfourthValue(e.target.value),
                                                                                    handleChange(e)
                                                                            }} value={fourthValue} borderRadius='3px' />
                                                                        {errors.fourthText && touched.fourthText && (
                                                                            <Text color='red'>
                                                                                {errors.fourthText}
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
                                                                    {headers[4]}
                                                                    <Margin size={[10, 0, 0, 0]}>
                                                                        <Styledinput style={{ fontSize: '12px', border: '0.4px solid gray' }} width='311px' height='25px'
                                                                            onBlur={handleBlur} id='fifthText'
                                                                            onChange={(e) => {
                                                                                setfifthValue(e.target.value),
                                                                                    handleChange(e)
                                                                            }} value={fifthValue} borderRadius='3px' />
                                                                        {errors.fifthText && touched.fifthText && (
                                                                            <Text color='red'>
                                                                                {errors.fifthText}
                                                                            </Text>
                                                                        )}
                                                                    </Margin>
                                                                </label>
                                                            </Center>
                                                        </Margin> : ''}
                                                    <Position position='fixed' bottom='50px'>
                                                        <Margin size={[0, 0, 0, 0]}>
                                                            <Border borderWidth={[1, 0, 0, 0]} borderColor='#DCDCDC' style={{ width: '340px' }} >
                                                                <Margin size={[0, 0, 0, 0]}>
                                                                    <Padding size={[20, 0, 0, 0]}>
                                                                        {el ? <Stack direction='row' width='21vw' >
                                                                            <img width='20px' height='20px' src={Trash.src} onClick={() => setDeleteDoc(true)} />
                                                                            <Position position='absolute' bottom='30px' left='-110px'>
                                                                                {deleteDoc && <Delete DataVolunteer={DataVolunteer} setDeleteDoc={setDeleteDoc} DataSkill={DataSkill} DataTrain={DataTrain} DataMember={DataMember} DataHelp={DataHelp} DataEmergency={DataEmergency} title={title} ind={ind} setCheckBar={setCheckBar} />}
                                                                            </Position>
                                                                            <Margin size={[0, 0, 0, 10]}>
                                                                                <Button width='60px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' onClick={() => setCheckBar(false)}>Болих</Button>
                                                                            </Margin>
                                                                            <Margin size={[0, 5, 0, 5]}>
                                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' disabled={Object.keys(errors).length === (headers[4] ? 0 : headers[3] ? 1 : 2) && dirty ? false : true} style={{ cursor: Object.keys(errors).length === (headers[4] ? 0 : headers[3] ? 1 : 2) && dirty ? 'pointer' : 'not-allowed' }} onClick={New}>Хадгалаад шинэ</Button>
                                                                            </Margin>
                                                                            <Margin size={[0, 0, 0, 0]}>
                                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' disabled={Object.keys(errors).length === (headers[4] ? 0 : headers[3] ? 1 : 2) && dirty ? false : true} style={{ cursor: Object.keys(errors).length === (headers[4] ? 0 : headers[3] ? 1 : 2) && dirty ? '' : 'not-allowed' }} onClick={Add} >Хадгалах</Button>
                                                                            </Margin>
                                                                        </Stack>
                                                                            :
                                                                            <Stack direction='row' width=''>
                                                                                <Button width='120px' height='23px' bc='0.5px solid #00000033' color='black' bgColor='white' borderRadius='2px' disabled={Object.keys(errors).length === (headers[4] ? 0 : headers[3] ? 1 : 2) && dirty ? false : true} style={{ cursor: Object.keys(errors).length === (headers[4] ? 0 : headers[3] ? 1 : 2) && dirty ? 'pointer' : 'not-allowed' }} onClick={New}>Хадгалаад шинэ</Button>
                                                                                <Margin size={[0, 0, 0, 20]} >
                                                                                    <Button width='120px' height='23px' bc='0.5px solid #00000033' color='white' bgColor='#0066B3' borderRadius='2px' disabled={Object.keys(errors).length === (headers[4] ? 0 : headers[3] ? 1 : 2) && dirty ? false : true} style={{ cursor: Object.keys(errors).length === (headers[4] ? 0 : headers[3] ? 1 : 2) && dirty ? 'pointer' : 'not-allowed' }} onClick={Add}>Хадгалах</Button>
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