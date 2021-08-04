import React, { Component } from 'react';

class Equipe extends Component {
  render() {
    return (
      <>
        <Sobre name={this.props.name} age={this.props.age} job={this.props.job}/>
      </>
    );
  }
}

class Sobre extends Component {
  render(){
    return (
      <>
        <h2>My name is {this.props.name}</h2>
        <h3>Job: {this.props.job}</h3>
        <h3>Age: {this.props.age}</h3>
      </>
    );
  }
}



function App() {
  return (
    <div>
      <h1>Class Components</h1>
      <hr/>
      <Equipe name="Jean Michael" age="24" job="Developer" />
      <hr/>
      <Equipe name="Lunara Farias" age="28" job="Business" />
    </div>
  );
}

export default App;
