import React, { Fragment } from 'react';
import Hello from './Hello.jsx';
import SymbolButtons from './Symbols';

class App extends React.Component{
  state = {
    counter: 0,
    answer:0
  }
  increment = () => {
    console.log('increment');
  }
  divide = () => {
    console.log('divide');
  }
  decrement = () => {
    console.log('decrement');
  }
  multiply = () => {
    console.log('multiply');
  }

  render(){
    return(
      <Fragment>
      <h1>Simple Calculator</h1>
      <Hello />
      <SymbolButtons 
        add={() => this.increment()}
        divide={() => this.divide()}
        substract={() => this.decrement()}
        multiply={() => this.multiply()}
      />
    </Fragment>
    )
  }
}

export default App;
