import * as React from 'react';
import * as Styles from './LogIn.css';
import * as ReactTransitionGroup from 'react-transition-group';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux'

const CSSTransition = ReactTransitionGroup.CSSTransition;
const FormItem = Form.Item;

function hasErrors(fieldsError: object): boolean {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export interface State {
  token: string;
  form: boolean;
}

export interface Props {
  form: any;
}

class LogIn extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      form: false,
      token: '',
    }
  }

  public componentDidMount (): void {
    this.setState({
      form: true
    })
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
