import {Component} from 'react'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    countDown: 60,
  }

  render() {
    const {score, countDown} = this.state
    return (
      <div className="app-container">
        <div className="content-navbar">
          <img src="" alt="" className="logo" />
          <div className="navbar-details-container">
            <p>{`Score: ${score}`}</p>
            <div>
              <img src="" alt="" />
              <p>{`${countDown} sec`}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MatchGame
