import * as React from 'react';
// import { Breadcrumb } from 'antd';
// import * as ReactRouterDom from 'react-router-dom';
// import RouterMap from '../config/routers';

export interface Location {
  pathname: string;
  [key: string]: any;
} 

// const withRouter = ReactRouterDom.withRouter;
// const Link = ReactRouterDom.Link;

class Breadcrumbs extends React.Component<Location, object> {
  public render () {
    return null
  }
}

export default Breadcrumbs
