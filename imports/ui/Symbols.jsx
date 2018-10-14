import React from 'react'

const SymbolButtons = props => (
  <div>
    <button onClick={props.add} >+</button>
    <button onClick={props.divide} >/</button>
    <button onClick={props.substract} >-</button>
    <button onClick={props.multiply} >*</button>
  </div>
)
export default SymbolButtons
