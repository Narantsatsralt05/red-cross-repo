import React, { useState } from 'react';
import { Text, Margin, Button, Stack, Center } from '../components';
import InputTask from '../components/common/page-input-task';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Border } from '../components';
import Logo from '../assets/icon/logo.svg';
import Image from 'next/image';
import SignUpBg from '../assets/image/SignUpBg.png';
import { Padding } from '../components';
import Info from '../assets/icon/info.svg';

const SignUp = () => {
  const [check, setCheck] = useState(false);
  const YupShape = ({ max, match, min = 0, mongol }) => {
    return Yup.string()
      .max(max, `Дээд хязгаар нь ${max} үсэг`)
      .min(min, `Та ${min} ийг л оруулах естой`)
      .matches(Number.isInteger(mongol) ? /[а-яА-Я]/ : '', Number.isInteger(mongol) ? 'Та монголоор бичнэ үү' : '')
      .matches(
        Number.isInteger(match) ? /[1-9]/ : /[А-Я]/,
        Number.isInteger(match) ? 'Та заавал тоо оруулна уу.' : 'Та эхний 1-ийг заавал том үсэг оруулна уу.',
      )
      .required('Хоосон байна бөглөнө үү');
  };

  const validate = Yup.object({
    register: Yup.string()
      .matches(/[а-яА-Я]/, 'Та монголоор бичнэ үү')
      .matches(
        /[а-яА-Я][а-яА-Я][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/,
        'Та эхний 2 ийг үсэг, сүүлийн 8 ийг заавал  тоо оруулна уу.',
      )
      .max(10, 'Дээд хязгаар нь 10 үсэг')
      .required('Хоосон байна бөглөнө үү'),
    lastName: YupShape({ max: 15, mongol: 1 }),
    firstName: YupShape({ max: 15, mongol: 1 }),
    sex: YupShape({ max: 2, min: 2, mongol: 1 }),
    date: YupShape({ max: 10, match: 1 }),
    duureg: YupShape({ max: 100, mongol: 1 }),
    phone: YupShape({ max: 8, min: 8, match: 1 }),
    password: YupShape({ max: 100, min: 6 }),
  });
  const checker = () => {
    setCheck(!check);
  };
  console.log(check);
  return (
    <Formik
      initialValues={{
        register: '',
        lastName: '',
        firstName: '',
        sex: '',
        date: '',
        duureg: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={validate}
    >
      {(formik) => {
        const { isValid, dirty } = formik;
        return (
          <Form>
            <Stack width="100%">
              <Stack direction="column" width="100%" height="100%" alignItems="center">
                <Stack height="15vh" width="35%" />
                <Image src={Logo} width={90} height={90} />
                <Margin size={[30, 0, 0, 0]}>
                  <Text color="#0066B3" fontSize="0.9vw" cursor="pointer">
                    МОНГОЛЫН УЛААН ЗАГАЛМАЙ НИЙГЭМЛЭГ
                  </Text>
                </Margin>
                <Margin size={[10, 0, 0, 0]}>
                  <Text color="#7A7A7A" fontSize="0.9vw" cursor="pointer" fontWeight="100">
                    Цахим мэдээллийн систем
                  </Text>
                </Margin>
                <Margin size={[10, 0, 0, 0]}>
                  <Stack width="30vw" height="2px" bg="#F5F5F5" />
                </Margin>
                <Margin size={[30, 0, 20, 0]}>
                  <Text color="black" fontSize="1.8vw" cursor="pointer" fontWeight="300">
                    БҮРТГЭЛ ҮҮСГЭХ
                  </Text>
                </Margin>
                <Stack direction="row" justifyContent="space-between" style={{ marginRight: '10px' }} flexWrap="wrap">
                  <Stack direction="column">
                    <InputTask name="firstName" input="Эцэг/эх-ийн нэр"></InputTask>
                    <InputTask name="sex" input="Хүйс"></InputTask>
                    <InputTask name="date" input="Төрсөн он/сар/өдөр"></InputTask>
                    <InputTask name="phone" input="Утасны дугаар"></InputTask>
                    <InputTask name="password" input="Нууц үг" type="password"></InputTask>
                  </Stack>
                  <Stack direction="column">
                    <InputTask name="lastName" input="Нэр"></InputTask>
                    <InputTask name="register" input="Регистрийн дугаар" type="text"></InputTask>
                    <InputTask name="email" input="И-мэйл хаяг" type="email"></InputTask>
                    <InputTask name="duureg" input="Аймаг/Дүүрэг"></InputTask>
                    <InputTask name="passwordConfirm" input="Нууц үг давтах" type="password"></InputTask>
                  </Stack>
                </Stack>
                <Margin size={[30, 0, 20, 0]}>
                  <Stack width="850px" bg="#1890FF1A">
                    <Border borderColor="#1890FF" borderRadius="8px">
                      <Stack direction="row">
                        <Padding size={[22, 0, 0, 15]}>
                          <Image src={Info} />
                        </Padding>
                        <Padding size={[20, 10, 10, 10]}>
                          <Text fontWeight="200" fontSize="20px">
                            Үйлчилгээний нөхцөл
                          </Text>
                        </Padding>
                      </Stack>
                      <Padding size={[0, 20, 25, 50]}>
                        <Text fontWeight="100">
                          Бүртгүүлэгч таны хувийн мэдээлэл зөвхөн албан хэрэгцээнд ашиглагдах ба Хүний хувийн мэдээлэл
                          хамгаалах тухай хуулийн 3.1, 3.2, 7, 16 дугаар зүйл (Хууль хүчин төгөлдөр болох 2022 оны 05-р
                          сарын 1), Кибер аюулгүй байдлын тухай хуулийн 18 дугаар зүйл (Хууль хүчин төгөлдөр болох 2022
                          оны 05-р сарын 1), Хүүхэд хамгааллын тухай хуулийн 2, 3, 9 дүгээр зүйлээр тус тус баталгаажан
                          хамгаалагдсан болно.
                        </Text>
                      </Padding>
                    </Border>
                  </Stack>
                </Margin>
                <Stack width="20px" height="20px" bg={check === true ? '#1890FF' : '#fff'} onClick={checker}>
                  <Border borderColor="#1890FF">
                    <Text>✓</Text>
                  </Border>
                </Stack>
              </Stack>
              <Stack height="100vh">
                <Image src={SignUpBg} height={1200} width={1700} />
              </Stack>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUp;
