import React from 'react'
import { Formik, Form } from 'formik'
import InputTask from './page-input-task'
import * as Yup from 'yup'
const SignUp = () => {
    const validate = Yup.object({
        name: Yup.string()
            .max(15, 'Must be 15 character or less')
            .required('Required'),
    })
    const Wrapper = styled.div`
    &:hover ${Button} {
      display: none;
    }
  `
    return (
        <Formik initialValues={{
            name: '',
        }}
            validationSchema={validate}>
            {formik => {
                { console.log(formik.values) }
                return <Form>
                    <InputTask name='name' label='name' />
                </Form>
            }}

        </Formik>
    );

}

export default SignUp

