import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input(props) {
    const { label, name, ...rest}=props
  return (
    <div className='mform-control'>
      {/* <label htmlFor={name}>{label}</label> */}
            <Field placeholder={label} name={name} id={name} {...rest}  />
            <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input
