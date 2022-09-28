import React from 'react'

function TextError(props) {
  return (
    <span className='error'>
        {props.children}
    </span>
  )
}

export default TextError