import * as React from 'react';
import './App.css';

import Counter from './components/Counter';
import HelloReactTs from './components/HelloReactTs';
import store from './store';
import Message from './components/Message'
import { Provider } from 'react-redux';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HelloReactTs
            name={'赵晨'}
          />
          <Counter/>
          <Message/>
        </div>
      </Provider>
    );
  }
}

export default App;
