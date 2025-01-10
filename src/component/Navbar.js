import React from 'react'
import { Link , useNavigate} from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("authToken")
        navigate("/login")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">GYMAGIC</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-Link text-light text-decoration-none mx-2" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* if we are logged in then only show cart */}
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-Link text-light text-decoration-none mx-2" to="/cart">cart</Link>
                                </li>
                                : ""}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className="d-flex">
                                <div className="navbar-nav  mx-2 mb-2 mb-lg-0">

                                    <Link className="btn bg-light text-dark text-decoration-none mx-2" aria-current="page" to="/login">login</Link>


                                    <Link className="btn bg-light text-dark  text-decoration-none mx-2" to="/signup">signup</Link>

                                </div>
                            </div>
                            : <div>
                                <div className="btn bg-light text-dark  text-decoration-none mx-2"  onClick={handleLogout}>logout</div>
                            </div>
                        }
                        <form className="d-flex">
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
