import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'

function Checkbox(props) {
    const {name, label, options, ...rest} = props
  return (
    <div className='mform-control'>
   <label>{label}</label>
        <Field name={name} {...rest}>
            {
                ({field})=>{
                    return options.map(o=>{
                        return(
                            <React.Fragment key={o.key}>
                                <br/>  <input type='checkbox' id={o.value} {...field} value={o.value} checked={field.value.includes(o.value)}/>
                              <label htmlFor={o.value}>{o.key}</label>
                            </React.Fragment>
                        )
                    })
                }
            }
        </Field>
        <ErrorMessage name={name} component={TextError} /> 

    </div>
  )
}

export default Checkbox