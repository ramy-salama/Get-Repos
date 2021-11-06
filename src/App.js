import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Request  from "./Componants/Request";
import Nav   from "./Componants/Nav";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/Request" component={Request } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
