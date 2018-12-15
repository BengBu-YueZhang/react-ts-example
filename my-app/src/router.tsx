import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import LayoutView from './components/LayoutView';
import LogIn from './views/LogIn';
import AuthorizedRoute from './components/AuthorizedRoute';
import Users from './views/Users';
import Dashboard from './views/Dashboard';
import * as ReactTransitionGroup from 'react-transition-group';
import * as Styles from './router.css';
import { Spin } from 'antd';
import { connect } from 'react-redux';

const HashRouter = ReactRouterDom.HashRouter;
const Route = ReactRouterDom.Route;
const Redirect = ReactRouterDom.Redirect;
const Switch = ReactRouterDom.Switch;
const CSSTransition = ReactTransitionGroup.CSSTransition;
const TransitionGroup = ReactTransitionGroup.TransitionGroup;

class RouterConfig extends React.Component {
  public render () {
    return (
      <div>
        <HashRouter>
          <Route
            render={
              ({ location }) => {
                return (
                  <React.Fragment>
                    <Spin spinning={false}>
                      <Route path={'/login'} component={LogIn} />
                      <LayoutView>
                        <TransitionGroup>
                          <CSSTransition
                            key={location.pathname}
                            classNames={{
                              enter: Styles.fadeEnter,
                              enterActive: Styles.fadeEnterActive,
                              enterDone: Styles.fadeEnterDone,
                              exit: Styles.fadeExit
                            }}
                            timeout={300}
                          >
                            <Switch location={location}>
                              <AuthorizedRoute path="/users" component={Users}/>
                              <AuthorizedRoute path='/dashboard' component={Dashboard}/>
                              <Redirect from="/" to="/dashboard" exact={true} />
                            </Switch>
                          </CSSTransition>
                        </TransitionGroup>
                      </LayoutView>
                    </Spin>
                  </React.Fragment>
                )
              }
            }
          />
        </HashRouter>
      </div>
    )
  }
}

export default connect()(RouterConfig);
