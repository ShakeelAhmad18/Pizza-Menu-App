import React from 'react'
import '../App.css'

const Pizza = (props) => {

  return (
    <li className={`pizza ${props.pizzaObj.soldOut ?  "sold-out" : ' '}`}>
      <img src={props.pizzaObj.image} alt={props.pizzaObj.name} />
      <div>
        <h3 style={{ fontFamily: "serif" }}>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.soldOut? "SOLD OUT" :  props.pizzaObj.price + 3}</span>
      </div>
    </li>
  )
}

export default Pizza
