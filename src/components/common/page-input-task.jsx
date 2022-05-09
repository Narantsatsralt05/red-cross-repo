import React from 'react'
import { Margin } from '../core/margin'
import { StyledInput } from '../core/input'
import { Text } from '../core/text'
import { Stack } from '../core/stack'
import { ErrorMessage, useField } from 'formik'

const InputTask = ({ input, placeholder, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Stack>   <label>
             
                    <Text fontSize='12px' fontWeight='400' lineHeight='12px' >
                        <Stack direction='row'>
                            {input}
                            <div style={{ color: 'red', marginBottom: '5px' }}>*</div>
                        </Stack>
                    </Text>
                        <StyledInput width='300px' height='35px' font='Roboto' size='13px'
                            border='1px solid #D0D0D0' borderRadius='8px'
                            placeholder={placeholder} autoComplete='off'
                            {...field} {...props} type={field.name} id={field.name}
                            name={field.name} style={{ border: `1px solid ${meta.touched && meta.error ? 'red' : '#D0D0D0'} ` }} />
                        {/* style={{border : '1px solid #D0D0D0'}} */}
                        <Text color='red' fontSize='12px' fontWeight='400' lineHeight='12px' style={{ height: '12px' }}>
                            <ErrorMessage name={field.name}>{(msg) => {
                                return <div >{msg}</div>
                            }}</ErrorMessage>
                        </Text>

                </label>
        </Stack>
    )
}

export default InputTask
