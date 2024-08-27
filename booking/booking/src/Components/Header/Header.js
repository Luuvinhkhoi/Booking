import React,{useState}from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import './Header.css'
function Header(){
    const [isActive, setIsActive]=useState('navBar')
    function openNav(){
      setIsActive('navBar activeNavBar')
    }
    function closeNav(){
        setIsActive('navBar closeNavBar')
    }
    return (
        <div className="Header">
            <div className="brand">
                <h1><MdOutlineTravelExplore/>Booking</h1>
            </div>
            <div className={isActive}>
                <ul className="navList">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>News</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <div className="close" onClick={closeNav}>
                    <IoMdCloseCircle className="icon"/>
                </div>
            </div>
            <div className="toggle" onClick={openNav}>
                    <IoMenu className="icon" />
            </div>
        </div>
    )
}
export default Header