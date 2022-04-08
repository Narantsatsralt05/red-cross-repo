import React, { useState } from 'react'
import { Text, Margin, Button, Stack } from '../../components'
import InputTask from '../../components/common/page-input-task'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Border } from '../core/border'


const LeftBar = () => {
    const YupShape = ({ max, match, min = 0, mongol }) => {
        return Yup.string()
            .max(max, `Дээд хязгаар нь ${max} үсэг`)
            .min(min, `Та ${min} ийг л оруулах естой`)
            .matches(
                Number.isInteger(mongol) ? /[а-яА-Я]/ : '',
                Number.isInteger(mongol) ? 'Та монголоор бичнэ үү' : '')
            .matches(
                Number.isInteger(match) ? /[1-9]/ : /[А-Я]/,
                Number.isInteger(match) ? 'Та заавал тоо оруулна уу.' : "Та эхний 1-ийг заавал том үсэг оруулна уу.",
            )
            .required('Хоосон байна бөглөнө үү')

    }

    const validate = Yup.object({
        register: Yup.string()
            .matches(/[а-яА-Я]/, 'Та монголоор бичнэ үү')
            .matches(
                /[а-яА-Я][а-яА-Я][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/,
                "Та эхний 2 ийг үсэг, сүүлийн 8 ийг заавал  тоо оруулна уу."
            )
            .max(10, 'Дээд хязгаар нь 10 үсэг')
            .required('Хоосон байна бөглөнө үү'),
        urgiinOvog: YupShape({ max: 15, mongol: 1 }),
        lastName: YupShape({ max: 15, mongol: 1 }),
        firstName: YupShape({ max: 15, mongol: 1 }),
        sex: YupShape({ max: 2, min: 2, mongol: 1 }),
        buleg: YupShape({ min: 1, max: 1, match: 1 }),
        date: YupShape({ max: 10, match: 1 }),
        country: YupShape({ max: 100, mongol: 1 }),
        province: YupShape({ max: 100, mongol: 1 }),
        duureg: YupShape({ max: 100, mongol: 1 }),
        gazar: YupShape({ max: 200, mongol: 1 }),
        yaraltaiNer: YupShape({ max: 10, mongol: 1 }),
        henni: YupShape({ max: 10, mongol: 1 }),
        phone: YupShape({ max: 8, min: 8, match: 1 }),

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
                    <Border borderRadius='10px' borderColor='rgb(245, 247, 249)' style={{ backgroundColor: 'rgb(245, 247, 249)' }} >
                        <Text fontFamily='Roboto' font-style='normal'>
                            <Stack direction='row' width="100%" justifyContent='end'  >
                                <Stack width="100%">
                                    <Stack direction='column' width='100%' height='100%' >
                                        <Margin size={[20, 0, 0, 0]}>
                                            <Stack direction='row' justifyContent='space-between' >
                                                <Margin size={[3, 0, 0, 15]}>
                                                    <Text fontWeight='400' fontSize='12px' lineHeight='12px' color='#000000'>
                                                        ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ
                                                    </Text>
                                                    <Margin size={[30, 0, 0, 0]}>
                                                        <Text fontWeight='400' fontSize='12px' lineHeight='12px' color='black' fontStyle='light'>Үндсэн</Text>
                                                    </Margin>
                                                </Margin>
                                                <Margin size={[0, 10, 0, 0]}>
                                                    <Button bgColor='#0066B3' width='98px' height='23px' radius='3px'
                                                        type="submit" border='none' color='white'
                                                        disabled={!(dirty && isValid)}
                                                        style={{ cursor: (dirty && isValid) ? 'pointer' : 'not-allowed' }}
                                                    >
                                                        Хадгалах
                                                    </Button>

                                                </Margin>
                                            </Stack>
                                        </Margin>
                                        <Stack direction='row' justifyContent='space-between' style={{ marginRight: '10px' }} flexWrap='wrap' justifyContent='left'>
                                            <Stack direction='column' >
                                                <InputTask name='register' input='Регистрийн дугаар' placeholder='УК94092597' type='text'></InputTask>
                                                <InputTask name='lastName' input='Нэр' placeholder='Нямсамбуу'></InputTask>
                                                <Margin size={[40, 0, 0, 15]}>
                                                    <Text fontWeight='300' fontSize='12px' lineHeight='12px' color='black'>Оршин суух хаяг</Text>
                                                </Margin>
                                                <InputTask name='date' input='Төрсөн огноо' placeholder='1994.09.25'></InputTask>
                                                <InputTask name='duureg' input='Сум, дүүрэг' placeholder=''></InputTask>
                                                <Margin size={[40, 0, 0, 15]}>
                                                    <Text fontWeight='300' fontSize='12px' lineHeight='12px' color='black'>Яаралтай үед холбоо барих</Text>
                                                </Margin>
                                                <InputTask name='yaraltaiNer' input='Нэр' placeholder=''></InputTask>
                                            </Stack>
                                            <Stack direction='column'>
                                                <InputTask name='urgiinOvog' input='Ургийн овог' placeholder='Элжигэн'></InputTask>
                                                <InputTask name='sex' input='Хүйс' placeholder='Эр'></InputTask>
                                                <Margin size={[52, 0, 0, 0]}>
                                                    <InputTask name='country' input='Улс' placeholder='MN-Монгол'></InputTask>
                                                    <InputTask name='gazar' input='Газар' placeholder=''></InputTask>
                                                </Margin>
                                                <Margin size={[52, 0, 0, 0]}>
                                                    <InputTask name='henni' input='Таны хэн болох' placeholder=''></InputTask>
                                                </Margin>
                                            </Stack>
                                            <Stack direction='column'>
                                                <InputTask name='firstName' input='Эцэг/эх-ийн нэр' placeholder='Даваа'></InputTask>
                                                <InputTask name='buleg' input='Цусны бүлэг' placeholder='1'></InputTask>
                                                <Margin size={[52, 0, 0, 0]}>
                                                    <InputTask name='province' input='Аймаг, хот' placeholder=''></InputTask>
                                                </Margin>
                                                <Margin size={[132, 0, 0, 0]}>
                                                    <InputTask name='phone' input='Утас' placeholder=''>
                                                    </InputTask>
                                                </Margin>
                                            </Stack>
                                        </Stack>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Text>
                    </Border>
                </Form>
            }}
        </Formik>

    )
}

export default LeftBar