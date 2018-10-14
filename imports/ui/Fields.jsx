import React, { Fragment } from 'react'

const InputFields = (props) => {
  getCounter = count => {
    switch (count) {
      case 'counter1':
        props.getCounter1
        break;
    case 'counter2':
        props.getCounter2
        break;
      default:
        break;
    }
  }

  return (
    <Fragment>
    <input value={ props.counter1 } onChange={ getCounter('counter1') }/>
    <input value={ props.counter2 } onChange={ getCounter('counter2') }/>
    <h4>{props.answer}</h4>
  </Fragment>
  )
}
export default InputFields
