// Write your code here
import {Component} from 'react'

import './index.css'

export default class DigitalTimer extends Component {
  state = {minutes: 0, time: 0, isActive: false}

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const {isActive} = this.state
      if (isActive) {
        this.setState(prevState => ({
          time: prevState.time + 1,
        }))
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onStart = () => {
    this.setState({isActive: true})
  }

  onPause = () => {
    this.setState({isActive: false})
  }

  onReset = () => {
    this.setState({time: 0, isActive: false})
  }

  handleAddMinute = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes + 1,
      time: prevState.time + 60,
    }))
  }

  handleLessMinute = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes - 1,
      time: prevState.time - 60,
    }))
  }

  formatTime = time => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`
    const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${minutesStr}:${secondsStr}`
  }

  render() {
    const {time, minutes} = this.state
    return (
      <div className="container">
        <h1>Digital Timer</h1>
        <div className="container-2">
          <div className="timer-container">
            <h1 className="timer-heading">{this.formatTime(time)}</h1>
            <p className="timer-para">Running</p>
          </div>
          <div className="button-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
              className="icon"
              alt="play"
              onClick={this.onStart}
            />
            <p className="timer-para">play</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
              className="icon"
              alt="pause"
              onClick={this.onPause}
            />
            <p className="timer-para">pause</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              className="icon"
              alt="Reset"
              onClick={this.onReset}
            />
            <p className="timer-para">Reset</p>
          </div>
        </div>
        <div className="limit-container">
          <p>Set timer limit</p>
          <div className="button-container">
            <p className="heading" onClick={this.handleAddMinute}>
              -
            </p>
            <h1 className="cap">{minutes}</h1>
            <p className="heading" onClick={this.handleAddMinute}>
              +
            </p>
          </div>
        </div>
      </div>
    )
  }
}
