import React from 'react'

const Button = (props) => {

  return (
    <div>
      <button className="button_on" onClick={props.toggle}>{props.stock[0]}</button>
    </div>
  )
}

export default Button
