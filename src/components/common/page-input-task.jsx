import React from 'react'
import { Margin } from '../../components/core/margin'
import { StyledInput } from '../../components/core/input'
import { Text } from '../../components/core/text'
import { Stack } from '../../components/core/stack'
import { ErrorMessage, useField, Field } from 'formik'
import { useAuthContext } from '../../providers/authContext'

const InputTask = ({ input, placeholder, label,  ...props }) => {
    const { saveError, setsaveError } = useAuthContext();
    const [field, meta] = useField(props);
    return (
        <Stack>
            <Margin size={[22, 0, 0, 15]}>
                <label>
                    <Text fontSize='12px' fontWeight='400' lineHeight='12px'  >
                        <Stack direction='row'>
                            {input}
                            <div style={{ color: 'red' }}>*</div>
                        </Stack>
                    </Text>
                    <Margin size={[10, 0, 0, 0]}>
                        <StyledInput width='300px' height='25px' font='Roboto' size='13px'
                            border='1px solid #D0D0D0' borderradius='5px'
                            placeholder={placeholder} autoComplete='off'
                            {...field} {...props} type={field.name} id={field.name}
                            name={field.name} className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} />
                        <Text color='red' fontSize='12px' fontWeight='400' lineHeight='12px' >
                            <ErrorMessage name={field.name}>{(msg) => { 
                                return <div>{msg}</div>
                            }}</ErrorMessage>

                        </Text>
                    </Margin>

                </label>
            </Margin>
        </Stack>
    )
}

export default InputTask








// import Image from 'next/image'
// import React, { useState } from 'react'
// import Pic from '../assets/icon/userInfo.svg'
// import { Text } from '../components/core/text'
// import Help from '../assets/icon/HELP.svg'
// import gishuunInfo from '../assets/icon/ims2 blue 1.svg'
// import tuslamjInfo from '../assets/icon/ims3 blue 1.svg'
// import { Margin } from '../components/core/margin'
// import { Padding } from '../components/core/padding'
// import { Border } from '../components/core/border'
// import { Button } from '../components/core/button'
// import InputTask from './page-input-task'
// import { Stack } from '../components/core/stack'



// const LeftBar = () => {


//     return (
//         <Text fontFamily='Roboto' font-style='normal'>
//             <Stack direction='row'>
//                 <Stack width='1vw' >
//                     <Text fontWeight='300' fontSize='10px' lineHeight='12px' color='#484848'>
//                         <div className="box" >
//                             <Stack direction='column'>
//                                 <Padding size={[6, 0, 6, 7]} style={{ backgroundColor: '#E5E5E5' }}>
//                                     <Stack direction='row' width='154px' justifyContent='start' alignItems='center'   >
//                                         <Image src={Pic}></Image>
//                                         <Margin size={[0, 0, 0, 3]}>
//                                             Хувь хүний мэдээлэл
//                                         </Margin>
//                                     </Stack>
//                                 </Padding>
//                                 <Padding size={[6, 0, 6, 7]}>
//                                     <Stack direction='row' width='154px' justifyContent='start' alignItems='center'>
//                                         <Image src={Help}></Image>
//                                         <Margin size={[0, 0, 0, 3]}>
//                                             Сайн дурын ажлын мэдээлэл
//                                         </Margin>
//                                     </Stack>
//                                 </Padding>
//                                 <Padding size={[6, 0, 6, 7]}>
//                                     <Stack direction='row' width='154px' justifyContent='start' alignItems='center'>
//                                         <Image src={gishuunInfo}></Image>
//                                         <Margin size={[0, 0, 0, 3]}>
//                                             Гишүүнчлэлийн мэдээлэл
//                                         </Margin>
//                                     </Stack>
//                                 </Padding>
//                                 <Padding size={[6, 0, 6, 7]}>
//                                     <Stack direction='row' width='154px' justifyContent='start' alignItems='center'>
//                                         <Image src={tuslamjInfo}></Image>
//                                         <Margin size={[0, 0, 0, 3]}>
//                                             Тусламжийн мэдээлэл
//                                         </Margin>
//                                     </Stack>
//                                 </Padding>
//                             </Stack>
//                         </div>
//                     </Text>
//                 </Stack>
//                 <Stack >
//                     <div className="" style={{ backgroundColor: '#E5E5E5' }}>
//                         <Stack direction='column' >
//                             <Margin size={[20, 0, 0, 0]}>
//                                 <Stack direction='row' justifyContent='space-between'>
//                                     <Margin size={[0, 0, 0, 30]}>
//                                         <Text fontWeight='400' fontSize='12px' lineHeight='12px' color='#000000'>
//                                             ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ
//                                         </Text>
//                                     </Margin>
//                                     <Button bgColor='#0066B3' width='98px' height='23px' radius='3px'>
//                                         <Text fontWeight='400' fontSize='12px' lineHeight='12px' color='white'>Хадгалах</Text>
//                                     </Button>
//                                 </Stack>
//                             </Margin>
//                             <Margin size={[0, 0, 0, 30]}>
//                                 <Text fontWeight='300' fontSize='12px' lineHeight='12px' color='black'>Үндсэн</Text>
//                             </Margin>
//                             <Stack direction='row' justifyContent='space-between'>
//                                 <InputTask input='Регистрийн дугаар' placeholder='УК94092597'>
//                                 </InputTask>
//                                 <InputTask input='Регистрийн дугаар' placeholder='УК94092597'>
//                                 </InputTask>
//                                 <InputTask input='Регистрийн дугаар' placeholder='УК94092597'>
//                                 </InputTask>
//                             </Stack>

//                         </Stack>
//                     </div>
//                 </Stack>
//             </Stack>
//         </Text >

//     )
// }

// export default LeftBar