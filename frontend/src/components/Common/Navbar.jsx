import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      {/* {Left-Logo} */}
      <div>
        <Link to="/" className="text-2xl font-medium">
        Rabbit
        </Link>
      </div>
      {/* {Center - Navigation Link} */}
      <div className="hidden md-flex space-x-6">
        
      </div>
    </nav>
    </>
  )
}

export default Navbar