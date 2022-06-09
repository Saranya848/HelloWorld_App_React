import logo from "./assert/images/logo.jpg";
import './App.css';
import React from "react";

class App extends React.Component{
  url="https://www.bridgelabz.com";
  constructor(){
    super();
    this.state = { message: 'Hello from Bridgelabz'}
  }

  onClick = (Sevent) =>{
   console.log("Save button", Sevent);
   window.open(this.url, "_blank");
  }
  render(){
    return(
    <div className="App">
      <header className="App-header">
                   {this.state.message}
      </header>
      <img className="image" onClick={this.onClick} src={logo} alt="Bridgelabz Logo"/>
    </div>
  )
}
}

export default App;