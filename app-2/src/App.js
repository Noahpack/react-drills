import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: ["Candy", "Ramen", "Bread", "Cheese", "Oranges", "Addi"]
    }
  }
  
  render(){
    let messageDisplay = this.state.message.map((element, index)=> {
      return <h2 key={index}>{element}</h2>;
    
   })
    return <div className="App">{messageDisplay}</div>
  }
}
export default App;
