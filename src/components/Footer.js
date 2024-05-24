import React from 'react'
import '../App.css'
import Order from './Order';
const Footer = () => {
    const time=new Date().toLocaleTimeString();
    const hour=new Date().getHours();
    const openHour=10;
    const closeHour=22;
    const isOpen= hour >= openHour && hour <= closeHour;
    console.log(isOpen);
  return (
    <footer className='footer'>
      <p><strong>{time}</strong> {isOpen ?"We are currently open" : "Sorry!We are Closed Now"} untill ({openHour}AM to {closeHour}PM)</p>
      <Order/>
    </footer>
  )
}

export default Footer
