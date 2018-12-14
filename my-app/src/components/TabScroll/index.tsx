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
  viewRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  timer: number;
  handleButtonClick: (direction: string) => void;
  setTranslateX: () => void
  getDomWidth: (callback: () => {}) => void
}

class TabScroll extends React.Component<Props, State> implements TabScrollInterface {

  public viewRef!: React.RefObject<HTMLDivElement>;
  public contentRef!: React.RefObject<HTMLDivElement>;
  public timer!: number;

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

  public getDomWidth (callback: () => void = () => {}): void {
    const contentWidth: number = this.contentRef.current ? this.contentRef.current.getBoundingClientRect().width : 0
    const viewWidth: number = this.viewRef.current ? this.viewRef.current.getBoundingClientRect().width : 0
    const translateX = this.state.translateX ? this.state.translateX : 0
    this.setState({ contentWidth, viewWidth, translateX }, () => {
      callback()
    })
  }

  public setTranslateX = () => {
    if (this.contentRef && this.contentRef.current) {
      const { translateX } = this.state
      let currentTranslateX = 0
      const that = this
      if (this.contentRef.current.style && this.contentRef.current.style.transform) {
        currentTranslateX = parseInt(this.contentRef.current.style.transform.split('(')[1].split(',')[0].split('px')[0], 10)
      } else {
        currentTranslateX = 0
      }
      console.log(this.contentRef.current.style.transform)
      this.timer = window.requestAnimationFrame(function animation () {
        if ( translateX > currentTranslateX ) {
          currentTranslateX += 100
          if (currentTranslateX >= translateX) {
            currentTranslateX = translateX
          }       
        } else {
          currentTranslateX -= 100
          if (currentTranslateX <= translateX) {
            currentTranslateX = translateX
          }
        }
        if (that.contentRef && that.contentRef.current) {
          that.contentRef.current.style.transform = `translate3d(${currentTranslateX}px, 0, 0)`
        }
        if (currentTranslateX === translateX) {
          window.cancelAnimationFrame(that.timer)
        } else {
          that.timer = window.requestAnimationFrame(animation)
        }
      })
    }
  }

  public componentDidMount () {
    setTimeout(() => {
      this.getDomWidth(this.setTranslateX)
    }, 50)
  }

  public componentDidUpdate (prevProps: Props) {
    if (prevProps.children !== this.props.children) {
      this.getDomWidth()
    }
  }

  public render () {
    return (
      <div className={Styles.root}>
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