import logo from "./assert/images/logo.jpg";
import './App.css';
import React from "react";

class App extends React.Component{
  url="https://www.bridgelabz.com";
  constructor(){
    super();
    this.state = { userName: ' '}
  }

  onClick = (Sevent) =>{
   console.log("Save button", Sevent);
   window.open(this.url, "_blank");
  }
  onChangeName = (event) => {
    console.log("Name", event.target.value);
    this.setState({userName: event.target.value});
  }
  render(){
    return(
    <div className="App">
      <header className="App-header">
      Hello {this.state.userName} from Bridgelabz
      </header>
      <img className="image" onClick={this.onClick} src={logo} alt="Bridgelabz Logo"/>
      <div>
        <input onChange={this.onChangeName}/>
      </div>
    </div>
  )
}
}

export default App;