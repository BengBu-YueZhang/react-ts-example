import * as React from 'react';
import { Icon } from 'antd';
import * as Styles from './index.css';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

interface State {
  translateX: number;
  viewWidth: number;
  contentWidth: number;
}

interface TabScrollInterface {
  rootRef: React.RefObject<HTMLDivElement>;
  viewRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  handleButtonClick: (direction: string) => void;
  setTranslateX: () => void
}

class TabScroll extends React.Component<Props, State> implements TabScrollInterface {

  public rootRef!: React.RefObject<HTMLDivElement>;
  public viewRef!: React.RefObject<HTMLDivElement>;
  public contentRef!: React.RefObject<HTMLDivElement>;

  constructor (props: Props) {
    super(props)
    this.state = {
      contentWidth: 0,
      translateX: 0,
      viewWidth: 0,
    }
    this.viewRef = React.createRef()
    this.contentRef = React.createRef()
  }

  public handleButtonClick = (direction: string) => {
    const { contentWidth, viewWidth, translateX } = this.state
    let moveDistance: number = Math.abs(contentWidth - viewWidth > contentWidth ? viewWidth : contentWidth - viewWidth)
    switch (direction) {
      case 'left':
        moveDistance = translateX + moveDistance
        break
      case 'right':
        moveDistance = translateX - moveDistance
        break
    }
    if (moveDistance >= 0) {
      moveDistance = 0
    }
    if (moveDistance <= viewWidth - contentWidth) {
      moveDistance = viewWidth - contentWidth
    }
    this.setState({
      translateX: moveDistance
    }, () => {
      this.setTranslateX()
    })
  }

  public setTranslateX = () => {
    if (this.contentRef && this.contentRef.current) {
      const { translateX } = this.state
      this.contentRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`
    }
  }

  public componentDidMount () {
    const contentWidth: number = this.contentRef.current ? this.contentRef.current.getBoundingClientRect().width : 0
    const viewWidth: number = this.viewRef.current ? this.viewRef.current.getBoundingClientRect().width : 0
    const translateX = 0
    this.setState({ contentWidth, viewWidth, translateX }, () => {
      this.setTranslateX()
    })
  }

  public componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  public render () {
    return (
      <div className={Styles.root} ref={this.rootRef}>
        {
          this.state.contentWidth > this.state.viewWidth && (
            <a
              href="javascript:;"
              className={Styles.button}
              onClick={() => this.handleButtonClick('left')}
            >
              <Icon style={{fontSize: '12px'}} type="left" />
            </a>
          )
        }
        <div className={Styles.middleView} ref={this.viewRef}>
          <div className={Styles.middleContent} ref={this.contentRef}>
            <div>
              {
                this.props.children
              }
            </div>
          </div>
        </div>
        {
          this.state.contentWidth > this.state.viewWidth && (
            <a
              href="javascript:;"
              className={Styles.button}
              onClick={() => this.handleButtonClick('right')}
            >
              <Icon style={{fontSize: '12px'}} type="right" />
            </a>
          )
        }
      </div>
    )
  }
}

export default TabScroll