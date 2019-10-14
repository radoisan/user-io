import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {

  state = {
    username:[
      {name: 'Rado'},
      {name: 'Kiro'},
      {name: 'Jeni'}
    ]
  }

  switchNameHandler = (newName,index) => {
    this.setState({
      username:[
        {name: newName},
        {name: 'Kiril'},
        {name: 'Jeni'}
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      username: [
        {name: 'Rado'},
        {name: event.target.value},
        {name: 'Stefania'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        
        <UserInput 
        name={this.state.username[0].name}
        nameChangeHandler={this.nameChangeHandler} 
        click={()=> this.switchNameHandler('Radooooo')}
        />
        
        <UserOutput 
        name={this.state.username[0].name} 
        password={this.state.username[0].password}
        click={this.switchNameHandler.bind(this,'Radoslav!!!',0)} 
        />

        <UserOutput   
        name={this.state.username[1].name} 
        password={this.state.username[1].password} 
        click={()=> this.switchNameHandler('Radooooo',2)}
        />
        
        <UserOutput 
        name={this.state.username[2].name} 
        password={this.state.username[2].password} 
        click={this.switchNameHandler.bind(this,'Radoslav!!!',1)}
        />
      </div>
    );
  }
}

export default App;
