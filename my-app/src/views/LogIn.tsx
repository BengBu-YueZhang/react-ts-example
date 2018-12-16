import * as React from 'react';
import * as Styles from './LogIn.css';
import * as ReactTransitionGroup from 'react-transition-group';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as LoginActions from '../store/actions/login';

const CSSTransition = ReactTransitionGroup.CSSTransition;
const FormItem = Form.Item;

function hasErrors(fieldsError: object): boolean {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export interface State {
  username: string;
  password: string;
  form: boolean;
}


class LogIn extends React.Component<any, State> {
  constructor (props: any) {
    super(props)
    this.state = {
      form: false,
      username: '',
      password: ''
    }
    console.log(this.props)
  }

  public componentDidMount(): void {
    this.setState({
      form: true
    })
  }

  public handleLoginClick = (): void => {
    const { username, password } = this.props.form.getFieldsValue()
    this.props.dispatch(LoginActions.loginRequest(
      username, password, () => this.props.history.push('/')
    ))
  }

  public render () {
    const { getFieldDecorator, getFieldError, getFieldsError, isFieldTouched } = this.props.form;
    const userNameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div className={Styles.wrapper}>
        <CSSTransition
          in={this.state.form}
          timeout={1000}
          classNames={{
            enter: Styles['form-enter'],
            enterActive: Styles['form-enter-active'],
            enterDone: Styles['form-enter-done']
          }}
          unmountOnExit={true}
        >
          {
            () => {
              return (
                <div className={Styles.root}>
                  <Form>
                    <FormItem
                      validateStatus={userNameError ? 'error' : undefined}
                    >
                      {
                        getFieldDecorator(
                          'username',
                          {
                            rules: [{ required: true, message: '请输入您的用户名' }],
                          }
                        )(
                          <Input
                            prefix={
                              <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                            }
                            placeholder="username"
                          />
                        )
                      }
                    </FormItem>
                    <FormItem
                      validateStatus={passwordError ? 'error' : undefined}
                    >
                      {
                        getFieldDecorator(
                          'password',
                          {
                            rules: [{ required: true, message: '请输入您的密码' }],
                          }
                        )(
                          <Input
                            prefix={
                              <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                            }
                            placeholder="password"
                          />
                        )
                      }
                    </FormItem>
                    <FormItem>
                      <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                          hasErrors(getFieldsError())
                        }
                        block={true}
                        onClick={this.handleLoginClick}
                      >
                        登录
                      </Button>
                    </FormItem>
                  </Form>
                </div>
              )
            }
          }
        </CSSTransition>
      </div>
    )
  }
}

export default connect()(Form.create()(LogIn))
