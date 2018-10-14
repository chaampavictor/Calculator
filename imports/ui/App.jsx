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

  handleAction = (e) =>{
    const operator = e.target.attributes.getNamedItem('data-filter').value;
    this.setState({
       total: this.state.current,
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
  getNumber = (e) => {
    console.log(e.target.name);
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
              <button name='2' onClick={ this.getNumber }>1</button>
              <button name='3' onClick={ this.getNumber }>1</button>
              <button name='4' onClick={ this.getNumber }>1</button>
              
          </div>
          <div className="row">
              <button data-filter="4" onClick={this.handleType}>4</button>
              <button data-filter="5" onClick={this.handleType}>5</button>
              <button data-filter="6" onClick={this.handleType}>6</button>
              <button data-filter="-" onClick ={this.handleAction}  >-</button>
          </div>
          <div className="row">
              <button data-filter="1" onClick={this.handleType}>1</button>
              <button data-filter="2" onClick={this.handleType}>2</button>
              <button data-filter="3" onClick={this.handleType}>3</button>
              <button data-filter="*" onClick ={this.handleAction}  >*</button>
              <button data-filter="/" onClick ={this.handleAction}  >/</button>
          </div>
          <div className="row">
          <button data-filter="+" onClick ={this.handleAction} >+</button>
              <button data-filter="0" onClick={this.handleType}>0</button>
              <button>save</button>
              <button onClick={this.cancel}>cancel</button>
              <button onClick={this.getResult}>=</button>
          </div>

      </div>
    );
  }
}
export default App