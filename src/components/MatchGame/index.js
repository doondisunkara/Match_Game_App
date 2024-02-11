import {Component} from 'react'
import './index.css'

import TabItem from '../TabItem'
import ImageItem from '../ImageItem'

class MatchGame extends Component {
  state = {
    score: 0,
    countDown: 60,
    activeTabId: '',
    activeImageId: '',
  }

  componentDidMount() {
    const {tabsList, imagesList} = this.props
    const random = imagesList[Math.floor(Math.random() * imagesList.length)]
    this.setState({
      activeTabId: tabsList[0].tabId,
      activeImageId: random.id,
    })
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

  getActiveImage = () => {
    const {activeImageId} = this.state
    const {imagesList} = this.props
    const activeImageUrl = imagesList.find(
      imageDetails => imageDetails.id === activeImageId,
    )
    if (activeImageUrl === undefined) {
      return 'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png'
    }
    return activeImageUrl.imageUrl
  }

  calculateScore = thumbnailId => {
    const {activeImageId} = this.state
    const {imagesList} = this.props
    if (thumbnailId === activeImageId) {
      const random = imagesList[Math.floor(Math.random() * imagesList.length)]
      this.setState(prev => ({
        score: prev.score + 1,
        activeImageId: random.id,
      }))
    }
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
    const activeImageUrl = this.getActiveImage()
    const filteredImagesList = this.getFilteredImagesList()
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
          <img src={activeImageUrl} alt="match" className="random-img" />
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
          <ul className="imageList-container">
            {filteredImagesList.map(imageDetails => (
              <ImageItem
                imageDetails={imageDetails}
                key={imageDetails.id}
                calculateScore={this.calculateScore}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MatchGame
