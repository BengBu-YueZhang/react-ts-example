import * as React from 'react';
import TabScroll from '../TabScroll';
import * as Styles from './index.css';

// interface State {
// }

// interface Props {
// }

class RouterRecord extends React.Component<object, object> {
  public render () {
    return (
      <div className={Styles.root}>
        <TabScroll>
          <React.Fragment/>
        </TabScroll>
      </div>
    )
  }
}

export default RouterRecord