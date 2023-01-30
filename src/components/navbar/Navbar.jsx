import React, { useState, useEffect, useRef } from 'react';
import "./navbar.css";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg"

const Menu = () => {
  return (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#wgpt3'>What is GPT3</a></p>
      <p><a href='#possibility'>Open AI</a></p>
      <p><a href='#features'>Case Studies</a></p>
      <p><a href='#blog'>Library</a></p>
    </>
  )
}

const Navbar = () => {
  const ref = useRef();
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => setToggleMenu(!toggleMenu);

  useEffect(() => {
    const hideToggleMenu = (e) => {
      // console.log(e.target);
      if (toggleMenu && ref.current && !ref.current.contains(e.target)) {
        setToggleMenu(false);
      }
    }

    document.body.addEventListener("mousedown", hideToggleMenu);
    return () => document.body.removeEventListener("mousedown", hideToggleMenu);
  }, [toggleMenu])


  return (
    <nav  className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"></img>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>
          Sign up
        </button>
      </div>

      <nav className='gpt3__navbar-menu' ref={ref}>
        {toggleMenu
          ? < RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> // if its currently open
          : < RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> // if its NOT currently open
        }

        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links' onClick={showMenu}>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}

      </nav>
    </nav>
  )
}

export default Navbar;