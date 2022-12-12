import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <div>home
        <button><Link to="/contact" >Contact</Link></button>
        <button><Link to="/services" >Services</Link></button>
        
    </div>
  )
}
export default Home;
