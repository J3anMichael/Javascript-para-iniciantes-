import React, { Component } from 'react';





class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'Jean Michael',
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }



  aumentar() {
    let state = this.state;
    state.contador += 1;
    this.setState(state);
  }
  diminuir() {
    let state = this.state;
    state.contador -= 1;
    this.setState(state);
  }

  render() {
    return (

      <>
        <h1>Contador</h1>
        <h3><button onClick={this.state.diminuir}>-</button>{this.state.contador}<button onClick={this.aumentar}>+</button></h3>
      </>
    )
  }
}

export default App;