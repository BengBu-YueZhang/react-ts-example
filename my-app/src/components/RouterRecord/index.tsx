import * as React from 'react';
import TabScroll from '../TabScroll';
import * as Styles from './index.css';
import { connect } from 'react-redux';
import { getRouterRecords } from '../../store/selectors/routerRecord';
import StoreState from '../../store/types';
import * as ReactRouterDom from 'react-router-dom';
import { Tag } from 'antd';
import * as Immutable from 'immutable';

const withRouter = ReactRouterDom.withRouter;

const mapStateToProps = (state: StoreState) => {
  return {
    routerRecords: getRouterRecords(state)
  }
}

class RouterRecord extends React.Component<any, object> {
  public render () {
    const pathname = this.props.location.pathname
    return (
      <div className={Styles.root}>
        <TabScroll>
          {
            this.props.routerRecords.map((record: Immutable.Map<string, string>) => {
              return (
                <Tag
                  color={pathname === record.get('path') ? '#87d068' : '#2db7f5'}
                  key={record.get('path')}
                >
                  {record.get('title')}
                </Tag>
              )
            })
          }
        </TabScroll>
      </div>
    )
  }
}

export default withRouter<any>(connect(mapStateToProps)(RouterRecord))
