import React from 'react'
import Pizza from '../components/Pizza'
const pizzaData = [
    {
       
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and resomery",
        price: 6,
        image: "focaccia.jpeg",
        soldOut: false
      },
      {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        image: "margherita.jpg",
        soldOut: false,
      },
      {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        image: "spinaci.jpg",
        soldOut: false,
      },
      {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        image: "funghi.jpeg",
        soldOut: false,
      },
      {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        image: "salamino.jpeg",
        soldOut: true,
      },
      {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        image: "prosciutto.jpeg",
        soldOut: false,
      },
  ]

const Menu = () => {
    const pizzas=pizzaData;
    const  numpizza=pizzas.length
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
        { numpizza > 0 ? (
            <ul className='pizzas'>
                 {pizzaData.map((pizza)=>(
                    <Pizza pizzaObj={pizza} key={pizza.name}/>
                 ))}
            </ul>) : (<p>We are still working on our Menu Please Come back Later</p>)}
        </main>
    )
}

export default Menu
