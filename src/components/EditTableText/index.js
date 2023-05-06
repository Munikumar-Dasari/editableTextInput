import {Component} from 'react'

import './index.css'

class EditTableText extends Component {
  state = {
    inputText: '',
    isButton: false,
  }

  onClickInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButton: !prevState.isButton}))
  }

  render() {
    const {inputText, isButton} = this.state
    const buttonText = isButton ? 'Edit' : 'Save'
    return (
      <div className="app-container">
        <div className="edit-text-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {isButton ? (
              <p className="inputValue">{inputText}</p>
            ) : (
              <input
                type="text"
                className="input"
                value={inputText}
                onChange={this.onClickInputText}
              />
            )}
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditTableText
