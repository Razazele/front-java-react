import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-dark  bg-dark navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand"  style={{fontWeight:"600"}} href="/">Fullstack Java-React</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className='btn btn-outline-light' to={"/adduser"}>Agregar Usuario</Link>
  </div>
</nav>
    </div>
  )
}

export default Navbar