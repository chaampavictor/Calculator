import React, { Fragment } from 'react'
import Fields from './Fields'
import SymbolButtons from './Symbols'

class App extends React.Component {
    state = {
        current: '',
        total: 0,
        operator: ''
      }

  handleType = (e) =>{
    this.setState({
      current: this.state.current + e.target.attributes.getNamedItem('data-filter').value
    });
  }

  calculate = () => {
    const total = parseInt(this.state.total);
    const current = parseInt(this.state.current);
    const sign = this.state.operator;
    switch(sign){
       case "-":
        return total - current;
          break;
       case "+":
          return  total + current;
          break;
       case "*":
          return  total * current;
          break;
       case "/":
          return  total / current;
          break;
       default:
          return 0;
     }
  };

  getAction = e =>{
    const operator = e.target.name
    const { current } = this.state
    this.setState({
       total: current,
       current: '',
       operator: operator
    });
  }

  getResult = () => {
    this.setState({
       total: this.calculate(),
       current: ''
    });
  }
  getNumber = e => {
    const { current } = this.state
    this.setState({
      current: current + e.target.name
    })
  }
  
  cancel = () => {
     this.setState({
        total: '',
        current: '',
        operator: ''
     })
  }

  render() {
    const { total, current } = this.state
    return (
      <div className="Calculator text-center">
          Number: {current}
          <h2>Result: {total} </h2>
          <div className="row">
              <button name='1' onClick={ this.getNumber }>1</button>
              <button name='2' onClick={ this.getNumber }>2</button>
              <button name='3' onClick={ this.getNumber }>3</button>
              <button name='4' onClick={ this.getNumber }>4</button>
              
          </div>
          <div className="row">
              <button name='5' onClick={ this.getNumber }>5</button>
              <button name='6' onClick={ this.getNumber }>6</button>
              <button name='7' onClick={ this.getNumber }>7</button>
              <button name='8' onClick={ this.getNumber }>8</button>
             
          </div>
          <div className="row">
              <button name='9' onClick={ this.getNumber }>9</button>
              <button name='0' onClick={ this.getNumber }>0</button>
          </div>
          <div className="row">
          <button name="+" onClick ={this.getAction} >+</button>
              <button name="-" onClick ={this.getAction}  >-</button>
              <button name="*" onClick ={this.getAction}  >*</button>
              <button name="/" onClick ={this.getAction}  >/</button>
          </div>
          <div className='row'>
           <button>save</button>
              <button onClick={this.cancel}>cancel</button>
              <button onClick={this.getResult}>=</button>
          </div> 

      </div>
    );
  }
}
export default App