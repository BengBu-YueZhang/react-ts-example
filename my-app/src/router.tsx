import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import LayoutView from './components/LayoutView';
import LogIn from './views/LogIn';

const HashRouter = ReactRouterDom.HashRouter
const Route = ReactRouterDom.Route
const Redirect = ReactRouterDom.Redirect
const Switch = ReactRouterDom.Switch

export default class RouterConfig extends React.Component {
  public render () {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Redirect from="/" to="/login" exact={true} />
            <Route path={'/login'} component={LogIn} />
            <LayoutView/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
