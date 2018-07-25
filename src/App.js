import React, { Component } from 'react';
import './App.css';
import sealJSON from './seals.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sealPic: sealJSON[0].sealBasicPic,
      htmlTest: "<a href=\"http://google.com\">Google</a>"
    };
  };

  render() {

    return (
      <div className="container">
        <div className="seal-pic" dangerouslySetInnerHTML={{__html: this.state.sealPic}}>
        </div>
      </div>
    );
    
  }
}

export default App;
