import {Component} from 'react'
import './index.css'

class ImageItem extends Component {
  render() {
    const {imageDetails, calculateScore} = this.props
    const {id, thumbnailUrl} = imageDetails
    const onClickThumbnail = () => {
      calculateScore(id)
    }
    return (
      <li className="image-item">
        <button type="button" className="img-btn" onClick={onClickThumbnail}>
          <img src={thumbnailUrl} alt="thumbnail" className="match-img" />
        </button>
      </li>
    )
  }
}

export default ImageItem
