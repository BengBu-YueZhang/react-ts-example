import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import RouterMap from '../config/routers';
import { getSessionStorage } from '../util/storage';

export interface Location {
  pathname: string;
  [key: string]: any;
}

export interface Props {
  [key: string]: any; 
}

const Route = ReactRouterDom.Route;
const Redirect = ReactRouterDom.Redirect;

function authenticate (location: Location): boolean {
  const pathSnippets: string[] = location.pathname.split('/').filter(i => i);
  const url: string = `/${pathSnippets.join('/')}`;
  const requiresAuth = RouterMap[url].requiresAuth;
  if (requiresAuth) {
    if (getSessionStorage('token')) {
      return true
    }
  } else {
    return true
  }
  return false
}

class AuthorizedRoute extends React.Component<Props, object> {
  public render () {
    const { component: Component, ...rest } = this.props
    return (
      <Route {...rest} render={
        (props) => {
          const isAuth = authenticate(props.location);
          return (
            isAuth ? <Component {...props} /> : <Redirect to={`/login`} />
          ) 
        }}
      />
    )
  }
}

export default AuthorizedRoute