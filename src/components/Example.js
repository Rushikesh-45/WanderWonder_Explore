import React from 'react'
import { Formik, Form } from 'formik'

import FormikControl from './FormikControl'


function Example() {

  const genders = [
    { key: 'male', value: 'male' },
    { key: 'female', value: 'female' },
    { key: 'transgender', value: 'transgender' }
  ]

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: null,
    mobNumber: '',
    gender: ''
  }

  const validate = values => {
    let err = {}

    if (!values.firstName) {
      err.firstName = 'Required';
    }
    if (!values.lastName) {
      err.lastName = 'Required';
    }
    if (!values.middleName) {
      err.middleName = 'Required';
    }

    if (!values.email) {
      err.email = 'Required';
    } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) {
      err.email = 'Invalid email format';
    }

    if (!values.password) {
      err.password = 'Required';
    }
    if (values.password !== values.confirmPassword) {
      err.confirmPassword = 'Password mismatch';
    }

    if (!values.dob) {
      err.dob = 'Required';
    }
    if (!values.mobNumber) {
      err.mobNumber = 'Required';
    }

    return err;
  }


  const onSubmit = values => { console.log("form data", values) }
  return (

    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >{
        formik => {
          return (
            <Form className='signupform'>
              <div className="wlcm"> Let's Wander to Make Wonders</div>
              
                    <FormikControl name="firstName" control='input' type="text" label='First Name' />
                 
                      <FormikControl name="lastName" control='input' type="text" label='Last Name' />
                   
                  <FormikControl name='email' control='input' type="email" label='Email' style={{ width: '400px' }} />
                
                      <FormikControl name='password' control='input' type="password" label='Password' />
                   
                      <FormikControl name='confirmPassword' control='input' type="password" label='Confirm Password' />
                  
                    <FormikControl name='dob' control='date' label='Date of Birth' />
                  
                      <FormikControl name='gender' control='select' options={genders} label='Gender' />
                   
                      <FormikControl name='mobNumber' control='input' type='number' label='Mobile Number' />
                    <button type='reset'>Reset</button> <button type='submit'>Submit</button>
              
            </Form>
          )
        }}
    </Formik>
  )
}

export default Example