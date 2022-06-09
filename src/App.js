import logo from "./assert/images/logo.jpg";
import './App.css';
import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = { message: 'Hello from Bridgelabz'}
  }
  render(){
    return(
    <div className="App">
      <header className="App-header">
                   {this.state.message}
      </header>
      <img className="image" src={logo} alt="Bridgelabz Logo"/>
    </div>
  )
}
}

export default App;