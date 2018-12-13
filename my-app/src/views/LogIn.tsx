import * as React from 'react';
import * as Styles from './LogIn.css';
import * as ReactTransitionGroup from 'react-transition-group';
import { Form, Icon, Input, Button } from 'antd';

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
    const tokenError = isFieldTouched('token') && getFieldError('token');
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
                      validateStatus={tokenError ? 'error' : undefined}
                    >
                      {
                        getFieldDecorator(
                          'token',
                          {
                            rules: [{ required: true, message: '请输入您的token' }],
                          }
                        )(
                          <Input
                            prefix={
                              <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                            }
                            placeholder="Access Token"
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

export default Form.create()(LogIn)

