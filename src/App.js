import React, { Component } from 'react';
import './App.css';
import sealJSON from './seals.json';
import Button from './components/Button/button.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sealPic: sealJSON[0].sealBasicPic,
      approachClickCount: 0,
      backUpClickCount: 0
    };
  };

  handleSetStateAngry = () => {
    const newCount = this.state.approachClickCount + 1;
    this.setState({approachClickCount: newCount});
    this.setState({sealPic: sealJSON[1].sealAngryPic});
  };

  handleSetStateNeutral = () => {
    const newCount = this.state.backUpClickCount + 1;
    this.setState({backUpClickCount: newCount});
    this.setState({sealPic: sealJSON[0].sealBasicPic});
  };

  render() {
    console.log("approach: " + this.state.approachClickCount);
    console.log("back up: " + this.state.backUpClickCount);
    return (
      <div className="container">
        <div className="seal-pic" dangerouslySetInnerHTML={{__html: this.state.sealPic}}>
        </div>
        <Button 
          name="APROACH"
          onClick={this.handleSetStateAngry}
        />

        <Button 
          name="BACK UP"
          onClick={this.handleSetStateNeutral}
        />
      </div>
    );

  }
}

export default App;
