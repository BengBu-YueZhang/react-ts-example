import * as React from 'react';
import './App.css';

import HelloReactTs from './components/HelloReactTs'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HelloReactTs
          name={'赵晨'}
        />
      </div>
    );
  }
}

export default App;
