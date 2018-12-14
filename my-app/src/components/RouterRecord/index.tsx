import * as React from 'react';
import TabScroll from '../TabScroll';
import * as Styles from './index.css';
import { connect } from 'react-redux';
import { getRouterRecords } from '../../store/selectors/routerRecord';
import StoreState from '../../store/types';
import * as ReactRouterDom from 'react-router-dom';

const withRouter = ReactRouterDom.withRouter;

const mapStateToProps = (state: StoreState) => {
  return {
    routerRecords: getRouterRecords(state)
  }
}

class RouterRecord extends React.Component<any, object> {
  public render () {
    console.log(this.props.routerRecords)
    return (
      <div className={Styles.root}>
        <TabScroll>
          <React.Fragment/>
        </TabScroll>
      </div>
    )
  }
}

export default withRouter<any>(connect(mapStateToProps)(RouterRecord))
