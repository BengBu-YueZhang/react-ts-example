import * as React from 'react';
import './App.css';
import RouterConfig from './router';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <RouterConfig/>
        </div>
      </Provider>
    );
  }
}

export default App;
