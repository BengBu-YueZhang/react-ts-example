import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import LayoutView from './components/LayoutView';
import LogIn from './views/LogIn';
import AuthorizedRoute from './components/AuthorizedRoute';
import Users from './views/Users'

const HashRouter = ReactRouterDom.HashRouter;
const Route = ReactRouterDom.Route;
const Redirect = ReactRouterDom.Redirect;
const Switch = ReactRouterDom.Switch;

export default class RouterConfig extends React.Component {
  public render () {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Redirect from="/" to="/login" exact={true} />
            <Route path={'/login'} component={LogIn} />
            <LayoutView>
              <AuthorizedRoute path="/users" component={Users}/>
            </LayoutView>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
