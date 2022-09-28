import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

function TextArea(props) {
    const {label, name, ...rest} = props; 
    return (
    
        <div className="mform-control">
            {/* <label htmlFor={name}>{name}</label> */}
            <Field as ='textarea' id={name} name={name} {...rest} placeholder={name} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    
  )
}

export default TextArea