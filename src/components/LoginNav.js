import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginNav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">CARE SHARE GIVE</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{position:"absolute", right:"0px"}}>
                    <ul class="navbar-nav mr-auto">
                    <Link to="/"> <button type="button" class="btn btn-info">Login</button></Link>
                    <Link to="/signup"><button type="button" class="btn btn-info">Sign Up</button></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}
