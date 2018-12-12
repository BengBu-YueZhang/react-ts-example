import * as React from 'react';
import './App.css';
import RouterConfig from './router'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <RouterConfig/>
      </div>
    );
  }
}

export default App;
