
import Image from 'next/image'
import React, { useState } from 'react'
import Pic from '../../assets/icon/userInfo.svg'
import { Text } from '../../components/core/text'
import Help from '../../assets/icon/HELP.svg'
import gishuunInfo from '../../assets/icon/ims2 blue 1.svg'
import tuslamjInfo from '../../assets/icon/ims3 blue 1.svg'
import { Margin } from '../../components/core/margin'
import { Padding } from '../../components/core/padding'
import { Border } from '../../components/core/border'
import { Button } from '../../components/core/button'
import InputTask from './page-input-task'
import { Stack } from '../../components/core/stack'
import { Formik, Form } from 'formik'
import SignUp from './sign-up'
import * as Yup from 'yup'
import { NotificationModal } from '../../components/common/notificationModal'
import Styledinput from '../../components/core/input'


const LeftBar = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validate = Yup.object({
        register: Yup.string()
            .matches(
                /[а-яА-Я][а-яА-Я][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/,
                "Та эхний 2 ийг үсэг, сүүлийн 8 ийг заавал  тоо оруулна уу."
            )
            .max(10, 'Дээд хязгаар нь 10 үсэг')
            .required('Хоосон байна бөглөнө үү'),
        urgiinOvog: Yup.string()
            .max(15, 'Дээд хязгаар нь 15 үсэг')
            .matches(
                /[А-Я]/,
                "Та эхний 1-ийг заавал том үсэг оруулна уу."
            )
            .required('Хоосон байна бөглөнө үү'),
        lastName: Yup.string()
            .max(15, 'Дээд хязгаар нь 15 үсэг')
            .matches(
                /[А-Я]/,
                "Та эхний 1-ийг заавал том үсэг оруулна уу."
            )
            .required('Хоосон байна бөглөнө үү'),
        firstName: Yup.string()
            .max(15, 'Дээд хязгаар нь 15 үсэг')
            .matches(
                /[А-Я]/,
                "Та эхний 1-ийг заавал том үсэг оруулна уу."
            )
            .required('Хоосон байна бөглөнө үү'),
        sex: Yup.string()
            .max(2, 'Дээд хязгаар нь 2 үсэг')
            .min(2, 'Та 1 ийг л оруулах естой')
            .required('Хоосон байна бөглөнө үү'),
        buleg: Yup.string()
            .matches(
                /[1-9]/,
                "Та заавал тоо оруулна уу."
            )
            .min(1, 'Та 1 ийг л оруулах естой')
            .max(1, 'Дээд хязгаар нь 1 тоо')
            .required('Хоосон байна бөглөнө үү'),
        date: Yup.string()
            .max(10, 'Дээд хяз  гаар нь 10 үсэг')
            .required('Хоосон байна бөглөнө үү'),
        country: Yup.string()
            .max(10, 'Дээд хязгаар нь 10 үсэг')
            .matches(
                /[А-Я]/,
                "Та эхний 1-ийг заавал том үсэг оруулна уу."
            )
            .required('Хоосон байна бөглөнө үү'),
        province: Yup.string()
            .max(10, 'Дээд хязгаар нь 10 үсэг')
            .matches(
                /[А-Я]/,
                "Та эхний 1-ийг заавал том үсэг оруулна уу."
            )
            .required('Хоосон байна бөглөнө үү'),
        duureg: Yup.string()
            .max(10, 'Дээд хязгаар нь 10 үсэг') 
            .matches(
                /[А-Я]/,
                "Та эхний 1-ийг заавал том үсэг оруулна уу."
            )
            .required('Хоосон байна бөглөнө үү'),
        gazar: Yup.string()
            .max(20, 'Дээд хязгаар нь 10 үсэг')
            .matches(
                /[А-Я]/,
                "Та эхний 1-ийг заавал том үсэг оруулна уу."
            )
            .required('Хоосон байна бөглөнө үү'),
        yaraltaiNer: Yup.string()
            .max(20, 'Дээд хязгаар нь 10 үсэг')
            .matches(
                /[А-Я]/,
                "Та эхний 1-ийг заавал том үсэг оруулна уу."
            )
            .required('Хоосон байна бөглөнө үү'),
        henni: Yup.string()
            .max(10, 'Дээд хязгаар нь 10 үсэг')
            .matches(
                /[А-Я]/,
                "Та эхний 1-ийг заавал том үсэг оруулна уу."
            )
            .required('Хоосон байна бөглөнө үү'),
        phone: Yup.string()
            .matches(
                /[1-9]/,
                "Та заавал тоо оруулна уу."
            )
            .min(8, 'Та 8 ийг л оруулах естой')
            .max(8, 'Дээд хязгаар нь 8 тоо')
            .required('Хоосон байна бөглөнө үү'),
    })
    return (
        <Formik initialValues={{
            register: '',
            urgiinOvog: '',
            lastName: '',
            firstName: '',
            sex: '',
            buleg: '',
            date: '',
            country: '',
            province: '',
            duureg: '',
            gazar: '',
            yaraltaiNer: '',
            henni: '',
            phone: '',
        }}
            validationSchema={validate}>
            {(formik) => {
                const { isValid, dirty } = formik;
                return <Form>
                    <Text fontFamily='Roboto' font-style='normal'>
                        <Stack direction='row' width="100%" justifyContent='end'>
                            <Stack style={{ marginLeft: '10px', marginRight: '10px' }}  >
                                <Margin size={[0, 0, 0, 10]}>
                                    <Stack style={{ backgroundColor: 'rgb(245, 247, 249)' }} direction='column' width='90vw' height='80vh'>
                                        <Margin size={[20, 0, 0, 0]}>
                                            <Stack direction='row' justifyContent='space-between'  >
                                                <Margin size={[3, 0, 0, 15]}>
                                                    <Text fontWeight='400' fontSize='12px' lineHeight='12px' color='#000000'>
                                                        ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ
                                                    </Text>
                                                    <Margin size={[30, 0, 0, 0]}>
                                                        <Text fontWeight='300' fontSize='12px' lineHeight='12px' color='black'>Үндсэн</Text>
                                                    </Margin>
                                                </Margin>
                                                <Margin size={[0, 10, 0, 0]}>
                                                    <Button bgColor='#0066B3' width='98px' height='23px' radius='3px'
                                                        type="submit" border='none' color='white'
                                                        className={!(dirty && isValid) ? "disabled-btn" : ""}
                                                        disabled={!(dirty && isValid)}
                                                        style={{ cursor: (dirty && isValid) ? 'pointer' : 'not-allowed' }}
                                                    >
                                                        Хадгалах
                                                    </Button>

                                                </Margin>
                                            </Stack>
                                        </Margin>
                                        <Stack direction='row' justifyContent='space-between' style={{ marginRight: '10px' }}>
                                            <Stack direction='column'>
                                                <InputTask name='register' input='Регистрийн дугаар' placeholder='УК94092597' type='text'>
                                                </InputTask>
                                                <InputTask name='lastName' input='Нэр' placeholder='Нямсамбуу'>
                                                </InputTask>
                                                <Margin size={[40, 0, 0, 15]}>
                                                    <Text fontWeight='300' fontSize='12px' lineHeight='12px' color='black'>Оршин суух хаяг</Text>
                                                </Margin>
                                                <InputTask name='date' input='Төрсөн огноо' placeholder='1994.09.25'>
                                                </InputTask>
                                                <InputTask name='duureg' input='Сум, дүүрэг' placeholder=''>
                                                </InputTask>
                                                <Margin size={[40, 0, 0, 15]}>
                                                    <Text fontWeight='300' fontSize='12px' lineHeight='12px' color='black'>Яаралтай үед холбоо барих</Text>
                                                </Margin>
                                                <InputTask name='yaraltaiNer' input='Нэр' placeholder=''>
                                                </InputTask>
                                            </Stack>
                                            <Stack direction='column'>
                                                <InputTask name='urgiinOvog' input='Ургийн овог' placeholder='Элжигэн'>
                                                </InputTask>
                                                <InputTask name='sex' input='Хүйс' placeholder='Эр'>
                                                </InputTask>
                                                <Margin size={[50, 0, 0, 0]}>
                                                    <InputTask name='country' input='Улс' placeholder='MN-Монгол'>
                                                    </InputTask>
                                                    <InputTask name='gazar' input='Газар' placeholder=''>
                                                    </InputTask>
                                                </Margin>
                                                <Margin size={[50, 0, 0, 0]}>
                                                    <InputTask name='henni' input='Таны хэн болох' placeholder=''>
                                                    </InputTask>
                                                </Margin>
                                            </Stack>
                                            <Stack direction='column'>
                                                <InputTask name='firstName' input='Эцэг/эх-ийн нэр' placeholder='Даваа'>
                                                </InputTask>
                                                <InputTask name='buleg' input='Цусны бүлэг' placeholder='1'>
                                                </InputTask>
                                                <Margin size={[50, 0, 0, 0]}>
                                                    <InputTask name='province' input='Аймаг, хот' placeholder=''>
                                                    </InputTask>
                                                </Margin>
                                                <Margin size={[120, 0, 0, 0]}>
                                                    <InputTask name='phone' input='Утас' placeholder=''>
                                                    </InputTask>
                                                </Margin>
                                            </Stack>
                                        </Stack>

                                    </Stack>
                                </Margin>

                            </Stack>
                        </Stack>
                    </Text>
                </Form>
            }}
        </Formik>

    )
}

export default LeftBar