// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, applyText} = props

  const {suggestion} = details
  const onSubmit = () => {
    applyText(suggestion)
  }

  return (
    <li className="list">
      <p className="para">{suggestion}</p>
      <img
        className="icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onSubmit}
      />
    </li>
  )
}

export default SuggestionItem
