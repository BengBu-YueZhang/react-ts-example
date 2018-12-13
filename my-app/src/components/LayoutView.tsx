import * as React from 'react';
import * as Styles from './LayoutView.css';
import { Layout } from 'antd';
import Breadcrumbs from './Breadcrumbs';

const Sider = Layout.Sider
const Content = Layout.Content

export interface Props {
  children?: any
}

export default class LayoutView extends React.Component<Props, object> {
  public render () {
    return (
      <Layout className={Styles.layout}>
        <Sider className={Styles.sider}>Sider</Sider>
        <Layout className={Styles.contentWrapper}>
          <Breadcrumbs/>
          <Content className={Styles.content}>
            {
              this.props.children
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}
