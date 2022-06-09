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
    </div>
  )
}
}

export default App;