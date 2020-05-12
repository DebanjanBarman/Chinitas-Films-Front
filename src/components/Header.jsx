import React from 'react'
import { NavLink } from 'react-router-dom'


import './Header.scss';



const  Header = () => {
      
    return (
       <header className="head">
       <p className="net">Chinitas</p>
       <div className="guestZone">
     
       <div><NavLink className="log" to='/login' exact><button>Login</button></NavLink></div>
       </div>
       </header>
       
   )
}

export default Header
