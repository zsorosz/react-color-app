import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE GOES HERE</h1>} />
        <Route exact path="/palette/:id" render={() => <h1>INDIVIDUAL PALETTE GOES HERE</h1>} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
