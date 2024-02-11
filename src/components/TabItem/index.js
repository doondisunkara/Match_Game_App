import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabDetails, updateActiveTab} = this.props
    const {tabId, displayText} = tabDetails
    const onClickTabItem = () => {
      updateActiveTab(tabId)
    }
    return (
      <li>
        <button type="button" className="tab-btn" onClick={onClickTabItem}>
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
