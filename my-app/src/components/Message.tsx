import * as React from 'react'
import { connect } from 'react-redux'
import { InterfaceStoreState } from '../store/reducers'
import * as Immutable from 'immutable'

const mapStateToProps = ({ messages }: InterfaceStoreState) => {
  return {
    messages
  }
}

export interface InterfaceProps {
  messages: Immutable.List<Immutable.Map<string, string>>;
}

class Message extends React.Component<InterfaceProps, object> {
  public render () {
    return <div>{this.props.messages.size}</div>
  }
}

export default connect(mapStateToProps)(Message)