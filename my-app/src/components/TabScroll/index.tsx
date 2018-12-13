import * as React from 'react';
import { Icon } from 'antd';
import * as Styles from './index.css';

interface Props {
  children: JSX.Element[] | JSX.Element
}

interface TabScrollInterface {
  rootRef: React.RefObject<HTMLDivElement>
}

class TabScroll extends React.Component<Props, object> implements TabScrollInterface {

  public rootRef: React.RefObject<HTMLDivElement>;

  public render () {
    return (
      <div className={Styles.root} ref={this.rootRef}>
        <a href="javascript:;" className={Styles.leftButton}>
          <Icon type="left" />
        </a>
        <div className={Styles.middleView}>
          <div className={Styles.middleContent}>
            <div>
              {
                this.props.children
              }
            </div>
          </div>
        </div>
        <a href="javascript:;" className={Styles.rightButton}>
          <Icon type="right" />
        </a>
      </div>
    )
  }
}

export default TabScroll