import * as React from 'react';
import * as Styles from './LayoutView.css';
import { Layout, Spin } from 'antd';
import Breadcrumbs from './Breadcrumbs';
import RouterRecord from './RouterRecord';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import MainMenu from './MainMenu';
import StoreState from '../store/types';
import { getSpinStatus } from '../store/selectors/spin';
import * as SpinAction from '../store/actions/spin';

const Sider = Layout.Sider
const Content = Layout.Content

const mapStateToProps = (state: StoreState) => {
  return {
    spinStatus: getSpinStatus(state)
  }
}

class LayoutView extends React.Component<any, object> {
  public render () {
    console.log(this.props)
    return (
      <React.Fragment>
        <Layout className={Styles.layout}>
          <Sider className={Styles.sider}>
            <div className={Styles.logo}>新世紀エヴァンゲリオン</div>
            <MainMenu/>
          </Sider>
          <Layout className={Styles.contentWrapper}>
            <HeaderNav/>
            <RouterRecord/>
            <Breadcrumbs/>
            <Content className={Styles.content}>
              <Spin spinning={this.props.spinStatus.get(SpinAction.SpinType.Loyout)}>
                {
                  this.props.children
                }
              </Spin>
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    )
  }
}

export default withRouter<any>(connect(mapStateToProps)(LayoutView))
