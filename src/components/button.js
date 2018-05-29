import React from 'react'

const Button = (props) => {

  const changeButton = (event) => {
    if (event.target.className === "button_on") {
      event.target.className = "button_off"
    } else {
      event.target.className = "button_on"
    }
  }

  return (
    <div>
      <button className="button_on" onClick={changeButton}>{props.name}</button>
    </div>
  )
}

export default Button
