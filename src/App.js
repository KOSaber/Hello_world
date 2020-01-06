

import React, {Component} from 'react';


class Hello extends Component{
  constructor(props){
    super()
    this.state = {
      moodPoints: 1
    }
  }

  increaseMood(e) {
    
      if (this.state.moodPoints >= 10)
      {this.setState({ moodPoints: 1} );}
      else
      {this.setState({moodPoints: this.state.moodPoints + 1})};
       
  }

  render(){
    return(
      <div>
      <h1>Hello,{this.props.name}</h1>
      <p>You are {this.props.age} </p>
      <p>its time for tea ..</p>
      <p>Your best animals are : {this.props.animals[0]} </p>
      <p>Your Mood Points are : {this.state.moodPoints} </p>
      <button onClick={(e) => this.increaseMood(e)}>Cheer up!</button>
      </div>
    )
  }
}

export default Hello;