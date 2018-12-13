import * as React from 'react';
import { Breadcrumb } from 'antd';
import * as ReactRouterDom from 'react-router-dom';
import RouterMap from '../config/routers';
import * as Styles from './Breadcrumbs.css'

const withRouter = ReactRouterDom.withRouter;
const Link = ReactRouterDom.Link;

class Breadcrumbs extends React.Component<any, object> {
  public render () {
    const { location } = this.props
    const pathSnippets = location.pathname.split('/').filter((i: string) => i)
    const extraBreadcrumbItems = pathSnippets.map((path: string, index: number) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            { RouterMap[url].name }
          </Link>
        </Breadcrumb.Item>
      )
    })
    const breadcrumbItems = [
      (
        <Breadcrumb.Item key="home">
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
      )
    ].concat(extraBreadcrumbItems)
    return (
      <div className={Styles.root}>
        <Breadcrumb>
          {breadcrumbItems}
        </Breadcrumb>
      </div>
    )
  }
}

export default withRouter(Breadcrumbs)
