import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import LayoutView from './components/LayoutView';
import LogIn from './views/LogIn';
import AuthorizedRoute from './components/AuthorizedRoute';
import Users from './views/Users';
import Dashboard from './views/Dashboard';
import * as ReactTransitionGroup from 'react-transition-group';
import * as Styles from './router.css';

const HashRouter = ReactRouterDom.HashRouter;
const Route = ReactRouterDom.Route;
const Redirect = ReactRouterDom.Redirect;
const Switch = ReactRouterDom.Switch;
const CSSTransition = ReactTransitionGroup.CSSTransition;
const TransitionGroup = ReactTransitionGroup.TransitionGroup;

export default class RouterConfig extends React.Component {
  public render () {
    return (
      <div>
        <HashRouter>
          <Route
            render={
              ({ location }) => {
                return (
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      classNames={{
                        enter: Styles.fadeEnter,
                        enterActive: Styles.fadeEnterActive,
                        enterDone: Styles.fadeEnterDone
                      }}
                      timeout={300}
                    >
                      <Switch location={location}>
                        <Redirect from="/" to="/login" exact={true} />
                        <Route path={'/login'} component={LogIn} />
                        <LayoutView>
                          <AuthorizedRoute path="/users" component={Users}/>
                          <AuthorizedRoute path='/dashboard' component={Dashboard}/>
                        </LayoutView>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )
              }
            }
          />
        </HashRouter>
      </div>
    )
  }
}
