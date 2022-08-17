import './index.css'

const HistoryItem = props => {
  const {item, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const deleteTrigger = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item-container">
      <p className="item-time">{timeAccessed}</p>
      <div className="item-name-container">
        <img className="item-logo" src={logoUrl} alt="domain logo" />
        <p className="item-title">{title}</p>
        <p className="item-url">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        testID="delete"
        onClick={deleteTrigger}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default HistoryItem
