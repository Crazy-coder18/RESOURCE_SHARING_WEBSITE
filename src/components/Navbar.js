import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-warning bg-primary">
        <a class="navbar-brand" href="/"  style={{"color": "black"}} > CARE SHARE  GIVE</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/" style={{"color": "black"}}>Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/electronics"  style={{"color": "black"}}>ELECTRONICS</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/clothing"   style={{"color": "black"}} >CLOTHING</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/sports"    style={{"color": "black"}}>SPORTS</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/education"  style={{"color":"black"}}>EDUCATION</Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link" to="/others"   style={{"color": "black"}} > OTHERS</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/upload"  style={{"color": "black"}}>UPLOAD</Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link" to="/aboutus"  style={{"color": "black"}}>ABOUT US</Link>
              </li>
            
          </ul>
          
        </div>
      </nav>
    </div>
  )
}
