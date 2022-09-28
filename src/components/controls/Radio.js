import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'

function Radio(props) {
    const {label, name, options, ...rest }= props
  return (
    <span className='mform-control, flex' style={{marginLeft: '10px'}}>
        
        <Field name={name} {...rest}>
            {
                ({field})=>{
                    return options.map(o=>{
                        return(
                            <React.Fragment key={o.key} >
                                <input type='radio' id={o.value} {...field} value={o.value} checked={field.value==o.value} style={{marginLeft: '30px'}}/>
                                <label htmlFor={o.value}>{o.key}</label>
                            </React.Fragment>
                        )
                    })
                }
            }
        </Field>
        <ErrorMessage name={name} component={TextError} /> 
    </span>
  )
}

export default Radio