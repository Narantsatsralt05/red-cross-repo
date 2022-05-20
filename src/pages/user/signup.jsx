import React, { useState } from 'react';
import { Text, Margin, Button, Stack, Center } from '../../components';
import InputTask from '../../components/common/page-input-task';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Border, Position, Padding } from '../../components';
import Logo from '../../assets/icon/logo.svg';
import Image from 'next/image';
import SignUpBg from '../../assets/image/signupBg.png';
import Info from '../../assets/icon/info.svg';
import Input from '../../components/core/input';
import Dropdown from '../../components/common/dropdown';
import styled, { ThemeProvider } from 'styled-components';
import { useAuthContext } from '../../common/context/AuthContext';
import { addDocument, setDocument } from '../../common/services/firebase';

const Parent = styled.div`
  & > div {
    margin-bottom: 25px;
  }
`;

const SignUp = () => {
  const [check, setCheck] = useState(false);
  const { user, signUp, signUpError } = useAuthContext();
console.log(user.uid)
  const YupShape = ({ max, match, min = 0, mongol, pass, email, number }) => {
    return Yup.string()
      .max(max, `Дээд хязгаар нь ${max} үсэг`)
      .min(min, `Та хамгийн багадаа ${min}-г оруулах естой`)
      .matches(Number.isInteger(mongol) ? /[а-яА-Я]/ : '', Number.isInteger(mongol) ? 'Та монголоор бичнэ үү' : '')
      .matches(
        Number.isInteger(pass) && /(?=.*?[A-Z])/ ? ' ' : ' ',
        Number.isInteger(pass) && 'Ядаж нэг том үсэгтэй байх' ? ' ' : ' ',
      )
      .matches(
        Number.isInteger(pass) && /(?=.*?[0-9])/ ? ' ' : ' ',
        Number.isInteger(pass) && 'Ядаж нэг тоотой байх' ? ' ' : ' ',
      )
      .matches(
        Number.isInteger(number) && /([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])/ ? 'Та 8 тоо оруулах естой' : ' ',
      )

      .matches(
        Number.isInteger(pass) && /(?=.*?[#?!@$%^&*-])/ ? ' ' : ' ',
        Number.isInteger(pass) && 'Ядаж нэг онцгой тэмдэгттэй байх' ? ' ' : ' ',
      )
      .required('Хоосон байна бөглөнө үү')
      .email(email ? 'Та и-мэйл хаягаа оруулна уу' : '');
  };

  const validate = Yup.object({
    RD: Yup.string()
      .matches(/[а-яА-Я]/, 'Та монголоор бичнэ үү')
      .matches(
        /[а-яА-Я][а-яА-Я][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/,
        'Та эхний 2-г үсэг, сүүлийн 8-г заавал  тоо оруулна уу.',
      )
      .max(10, 'Дээд хязгаар нь 10 үсэг')
      .required('Хоосон байна бөглөнө үү'),
    lastName: YupShape({ max: 15, mongol: 1 }),
    firstName: YupShape({ max: 15, mongol: 1 }),
    gender: YupShape({ max: 2, min: 2, mongol: 1 }),
    date: YupShape({ max: 10, match: 1 }),
    location: YupShape({ max: 100, mongol: 1 }),
    phoneNumber: YupShape({ max: 8, min: 8, match: 1 }),
    password: YupShape({ max: 100, min: 6, pass: 1 }),
    passwordConfirm: YupShape({ max: 100, min: 6, pass: 1 }),
    email: YupShape({ max: 100, email: true}),
  });
  const checker = () => {
    setCheck(!check);
  };
  const [genderValue , setGender] = useState()
  const option = ['Эр', 'Эм'];
  return (
    <Formik
      initialValues={{
        RD: '',
        lastName: '',
        firstName: '',
        gender: '',
        date: '',
        location: '',
        phoneNumber: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={validate}
    >
      {(formik) => {
        const { isValid, dirty, values } = formik;
        values.gender = genderValue;
        // console.log(values)
        // const AddDoc = () => {
        // setDocument(`/user/${user.uid}` , values)
        // }
        return (
          <Form>
            <Stack width="100vw" height="100vh" fontFamily="Roboto">
              <Stack width="100vw" justifyContent="center">
                <Stack direction="column" alignItems="center">
                  <Image src={Logo} width={90} height={90} />
                  <Margin size={[30, 0, 0, 0]}>
                    <Text color="#0066B3" type="T1" cursor="pointer">
                      МОНГОЛЫН УЛААН ЗАГАЛМАЙ НИЙГЭМЛЭГ
                    </Text>
                  </Margin>
                  <Margin size={[10, 0, 0, 0]}>
                    <Text color="#7A7A7A" type="T2" cursor="pointer">
                      Цахим мэдээллийн систем
                    </Text>
                  </Margin>
                  <Margin size={[10, 0, 0, 0]}>
                    <Stack width="35vw" height="2px" bg="#F5F5F5" />
                  </Margin>
                  <Margin size={[30, 0, 20, 0]}>
                    <Text color="black" cursor="pointer" type="H3">
                      БҮРТГЭЛ ҮҮСГЭХ
                    </Text>
                  </Margin>
                  <Stack>
                    <Stack
                      direction="row"
                      gap="200"
                      justifyItems="space-between"
                      alignItems="space-between"
                      style={{ marginRight: '10px' }}
                      flexWrap="wrap"
                    >
                      <Stack direction="column">
                        <Parent>
                          <InputTask name="firstName" input="Эцэг/эх-ийн нэр"></InputTask>
                          <label>
                            <Stack direction="row">
                              <div>Хүйс </div>
                              <div style={{ color: 'red', marginBottom: '5px' }}>*</div>
                            </Stack>
                            <Margin size={[0, 0, 25, 0]}>
                              <Dropdown
                                arr={option}
                                width="300px"
                                height="35px"
                                borderRadius="8px"
                                name="gender"
                                input="Хүйс"
                                setfirstValue={setGender}
                              ></Dropdown>
                            </Margin>
                          </label>
                          <InputTask name="date" input="Төрсөн он/сар/өдөр"></InputTask>
                          <InputTask name="phoneNumber" input="Утасны дугаар" type="number"></InputTask>
                          <InputTask name="password" input="Нууц үг" type="password"></InputTask>
                        </Parent>
                      </Stack>
                      <Stack direction="column">
                        <Parent>
                          <InputTask name="lastName" input="Нэр"></InputTask>
                          <InputTask name="RD" input="Регистрийн дугаар" type="text"></InputTask>
                          <InputTask name="email" input="И-мэйл хаяг" type="email"></InputTask>
                          <InputTask name="location" input="Аймаг/Дүүрэг"></InputTask>
                          <InputTask name="passwordConfirm" input="Нууц үг давтах" type="password"></InputTask>
                        </Parent>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Margin size={[0, 0, 10, 0]}>
                    <Stack width="800px" bg="#1890FF1A">
                      <Border borderColor="#1890FF" borderRadius="8px">
                        <Stack direction="row">
                          <Padding size={[22, 0, 0, 15]}>
                            <Image src={Info} width={35} height="35px" />
                          </Padding>
                          <Padding size={[25, 10, 10, 10]}>
                            <Text type="T1">Үйлчилгээний нөхцөл</Text>
                          </Padding>
                        </Stack>
                        <Padding size={[0, 20, 25, 60]}>
                          <Text type="T2">
                            Бүртгүүлэгч таны хувийн мэдээлэл зөвхөн албан хэрэгцээнд ашиглагдах ба Хүний хувийн мэдээлэл
                            хамгаалах тухай хуулийн 3.1, 3.2, 7, 16 дугаар зүйл (Хууль хүчин төгөлдөр болох 2022 оны
                            05-р сарын 1), Кибер аюулгүй байдлын тухай хуулийн 18 дугаар зүйл (Хууль хүчин төгөлдөр
                            болох 2022 оны 05-р сарын 1), Хүүхэд хамгааллын тухай хуулийн 2, 3, 9 дүгээр зүйлээр тус тус
                            баталгаажан хамгаалагдсан болно.
                          </Text>
                        </Padding>
                      </Border>
                    </Stack>
                  </Margin>
                  <Stack direction="row" alignItems="center" style={{ alignSelf: 'flex-start', marginLeft: '5%' }}>
                    <Input type="checkbox" width="20px" />
                    <Margin size={[0, 0, 0, 20]}>
                      <Text type="T1">Нөхцөлийг хүлээн зөвшөөрч байна.</Text>
                    </Margin>
                  </Stack>
                  <Margin size={[40, 0, 0, 0]}>
                        <Button
                          borderRadius="8px"
                          bgColor="#0066B3"
                          width="500px"
                          height="40px"
                          bc="#0066B3"
                          color="white"
                          fontSize="20px"
                          onClick={() =>(signUp(values))}
                        >
                          {/* <Text
                            color="#fff"
                            type="H3"
                            onClick={() =>
                              signUp(
                                values
                              )
                            }
                          > */}
                            БҮРТГҮҮЛЭХ
                          {/* </Text> */}
                        </Button>
                  </Margin>
                </Stack>
                <Position position="fixed" bottom="3vh" left="4vw">
                  <Text color="#757575" type="T2">
                    @ 2018-2021 Монголын улаан загалмай нийгэмлэг
                  </Text>
                </Position>
              </Stack>
              <Stack
                style={{
                  backgroundImage: `url(${SignUpBg.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'right',
                  backgroundRepeat: 'no-repeat',
                  width: '100vw',
                }}
              />
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUp;
