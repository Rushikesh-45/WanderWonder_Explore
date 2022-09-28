import React from 'react'
import Input from './controls/Input'
import TextArea from './controls/TextArea'
import Options from './controls/Options'
import Radio from './controls/Radio'
import Checkbox from './controls/Checkbox'
import DatePicker from './controls/DatePicker'

function FormikControl(props) {
  const {control,iclass, ...rest}=props

  switch(control){
    case 'input':
      return <Input {...rest} className={iclass}/>

    case 'textarea':
        return <TextArea {...rest} className='myinput' />
    case 'select': return <Options {...rest} className={iclass}/>

    case 'checkbox': return <Checkbox {...rest} className={iclass} />

    case 'radio': return <Radio {...rest} className={iclass}/>

    case 'date': return <DatePicker {...rest} className={iclass}/>

    default:  
    return null;
  }
}

export default FormikControl