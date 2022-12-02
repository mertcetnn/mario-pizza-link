import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from ".././Modal/Modal";
import "./_Navbar.scss";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <div className="nav-logo">
          <img src="https://picsum.photos/200/300" alt="logo" />
        </div>
        <div className="nav-footer">
          <div className="nav-list">
            <ul>
              <li className="nav-home">
                <i class="fa-solid fa-house"></i>
                <Link to="/">Home</Link>
              </li>
              <li className="nav-menu">
                <i class="fa-solid fa-utensils"></i>
                <Link to="/menu">Menu</Link>
              </li>
              <li className="nav-about">
                <i class="fa-solid fa-building"></i>
                <Link to="/about">About</Link>
              </li>
              <li className="nav-contact">
                <i class="fa-solid fa-phone"></i>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-signs">
            <button onClick={() => setShowModal(!showModal)}>
              <i class="fa-solid fa-user"></i>
              Sign In
            </button>
            <button>
              <i class="fa-solid fa-user-plus"></i>Sign Up
            </button>
          </div>
        </div>
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
      </div>
    </>
  );
}

export default Navbar;
