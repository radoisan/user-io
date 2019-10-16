import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {

  state = {
    username:[
      {name: 'Rado'},
      {name: 'Kiro'},
      {name: 'Jeni'},
      {name: 'Radi'}
    ]
  }

  wasClicked = () => {
    //console.log('Was CLICKED!')
    this.setState({
      username:[
        {name: 'Radoslav'},
        {name: 'Kirilll'},
        {name: 'Jeni'},
        {name: 'Radi'}
      ]
    });
  }

  handleNameChange = (event) => {
    this.setState({
      username:[
        {name: event.target.value},
        {name: 'Kirilll'},
        {name: 'Jeni'},
        {name: 'Radi'}
      ]
    });
  }


  render() {
    return (
      <div className="App">

        <UserInput
        name={this.state.username[0].name}
        nameChangeHandler={this.nameChangeHandler}
        //click={()=> this.switchNameHandler('Radooooo')}
        click={this.wasClicked}
        changed={this.handleNameChange}
        />

        <UserOutput
        name={this.state.username[0].name}
        //click={this.switchNameHandler.bind(this,'Radoslav!!!',0)}
        />

        <UserOutput
        name={this.state.username[1].name}
        //click={()=> this.switchNameHandler('Radooooo',2)}
        />

        <UserOutput
        name={this.state.username[2].name}
        //click={this.switchNameHandler.bind(this,'Radoslav!!!',1)}
        />

        <UserOutput
        name={this.state.username[3].name}

        />
      </div>
    );
  }
}

export default App;
