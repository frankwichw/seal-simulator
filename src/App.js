import React, { Component } from 'react';
import './App.css';
import sealJSON from './seals.json';
import Button from './components/Button/button.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lives: 3,
      points: 0,
      sealPic: sealJSON[0].sealBasicPic,
      approachClickCount: 0,
      backUpClickCount: 0,
      fishClickCount: 0
    };
  };

  // handling "back up" button click
  handleSetStateNeutral = () => {
    // adding to "back up" click count for future zoom out feature
    const backUpCount = this.state.backUpClickCount + 1;
    this.setState({backUpClickCount: backUpCount});
    // changing seal pic to default
    this.setState({sealPic: sealJSON[0].sealBasicPic});
  };

  // handling "approach" button click
  handleSetStateAngry = () => {
    // adding to "approach" click count for future zoom in feature
    const approachCount = this.state.approachClickCount + 1;
    this.setState({approachClickCount: approachCount});
    // subtracting from lives 
    const livesCount = this.state.lives - 1;
    this.setState({lives: livesCount});
    // subtracting from points
    const pointsCount = this.state.points - 1;
    this.setState({points: pointsCount});
    // changing seal pic to angry
    this.setState({sealPic: sealJSON[1].sealAngryPic});
  };

  // handling "give fish" button click
  handleSetStateFish = () => {
    // adding to "give fish" click count for future functionality
    const fishCount = this.state.fishClickCount + 1;
    this.setState({fishClickCount: fishCount});
    // addint to points
    const pointsCount = this.state.points + 1;
    this.setState({points: pointsCount});
    // changing seal pic to eating fish
    this.setState({sealPic: sealJSON[2].sealFishPic});
  };

  // handling "give incremental fish" button click
  handleIncrementalFish = () => {
    // adding to "give fish" click count for future functionality
    const fishCount = this.state.fishClickCount + 1;
    this.setState({fishClickCount: fishCount});
    // addint to points
    const pointsCount = this.state.points + 1;
    this.setState({points: pointsCount});
    // changing seal pic to eating fish
    this.setState({sealPic: sealJSON[2].sealFishPic});
  };

  render() {
    return (
      <div className="container">
        <div class="stats-container">
          <h1>Lives: {this.state.lives} Points: {this.state.points}</h1>
        </div>

        <div className="seal-pic" dangerouslySetInnerHTML={{__html: this.state.sealPic}}>
        </div>
        <Button 
          name="APROACH"
          id="approach"
          class="button"
          onClick={this.handleSetStateAngry}
        />

        <Button 
          name="BACK UP"
          id="back-up"
          class="button"
          onClick={this.handleSetStateNeutral}
        />


        <Button 
          name="GIVE FISH"
          id="give-fish"
          class="button"
          onClick={this.handleSetStateFish}
        />

        <Button 
          name="GIVE FISH INCREMENTALLY"
          class={this.state.fishClickCount > 10 ? "button" : "button hide"}
          id="give-fish-incrementally"
          onClick={this.handleIncrementalFish}
        />
      </div>
    );

  }
}

export default App;
