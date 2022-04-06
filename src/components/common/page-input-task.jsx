import React from 'react'
import { Margin } from '../core/margin'
import { StyledInput } from '../core/input'
import { Text } from '../core/text'
import { Stack } from '../core/stack'
import { ErrorMessage, useField } from 'formik'

const InputTask = ({ input, placeholder, label, ...props }) => {
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
                            name={field.name} className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} style={{border:`1px solid ${meta.touched && meta.error && 'red'}`}} />
                        <Text color='red' fontSize='12px' fontWeight='400' lineHeight='12px' style={{ height: '12px' }}>
                            <ErrorMessage name={field.name}>{(msg) => {
                                return <div >{msg}</div>
                            }}</ErrorMessage>
                        </Text>
                    </Margin>

                </label>
            </Margin>
        </Stack>
    )
}

export default InputTask
