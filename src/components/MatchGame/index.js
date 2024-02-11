import {Component} from 'react'
import './index.css'

import TabItem from '../TabItem'
import ImageItem from '../ImageItem'

class MatchGame extends Component {
  state = {
    score: 0,
    countDown: 60,
    activeTabId: '',
  }

  componentDidMount() {
    const {tabsList} = this.props
    this.setState({activeTabId: tabsList[0].tabId})
    this.intervalId = setInterval(this.updateCountDown, 1000)
  }

  getFilteredImagesList = () => {
    const {activeTabId} = this.state
    const {imagesList} = this.props
    const filteredList = imagesList.filter(
      imageDetails => imageDetails.category === activeTabId,
    )
    return filteredList
  }

  updateCountDown = () => {
    this.setState(prev => ({countDown: prev.countDown - 1}))
  }

  updateActiveTab = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {score, countDown, activeTabId} = this.state
    const {tabsList} = this.props
    const filteredImagesList = this.getFilteredImagesList
    return (
      <div className="app-container">
        <div className="content-navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
          <div className="navbar-details-container">
            <p className="countdown-heading">
              Score: <span className="countdown-value">{score}</span>
            </p>
            <div className="countdown-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-icon"
              />
              <p className="countdown-value">{`${countDown} sec`}</p>
            </div>
          </div>
        </div>
        <div className="game-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png"
            alt="fruit"
          />
          <ul className="tabsList-container">
            {tabsList.map(eachTab => (
              <TabItem
                tabDetails={eachTab}
                key={eachTab.tabId}
                updateActiveTab={this.updateActiveTab}
                isActive={eachTab.tabId === activeTabId}
              />
            ))}
          </ul>
          <ul>
            {filteredImagesList.map(imageDetails => (
              <ImageItem
                imageDetails={imageDetails}
                key={imageDetails.category}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MatchGame
