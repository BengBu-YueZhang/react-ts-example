import * as React from 'react';
import * as Styles from './LayoutView.css';
import { Layout } from 'antd';

const Sider = Layout.Sider
const Content = Layout.Sider

export interface Props {
  children?: any
}

export default class LayoutView extends React.Component<Props, object> {
  public render () {
    return (
      <Layout className={Styles.layout}>
        <Sider className={Styles.sider}>Sider</Sider>
        <Layout>
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
