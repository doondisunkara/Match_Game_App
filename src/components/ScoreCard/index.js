import {Component} from 'react'
import './index.css'

class ScoreCard extends Component {
  render() {
    const {score, resetGame} = this.props
    const onClickReset = () => {
      resetGame()
    }
    return (
      <div className="score-card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
        <h1 className="score-heading">YOUR SCORE</h1>
        <p className="final-score">{score}</p>
        <button type="button" className="reset-btn" onClick={onClickReset}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-icon"
          />
          PLAY AGAIN
        </button>
      </div>
    )
  }
}

export default ScoreCard
