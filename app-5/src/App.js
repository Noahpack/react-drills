import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './image'

class App extends Component{
  render() {
    return (
      <div className="App">
        <Image url={"https://www.businessupturn.com/wp-content/uploads/2020/09/Untitled-design-24-3.jpg"}/>
      </div>
    )
  }

}

export default App;
