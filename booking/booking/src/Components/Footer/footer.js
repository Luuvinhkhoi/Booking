import React, {useEffect} from "react";
import './Footer.css'
import { BsSend } from "react-icons/bs";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css';
function Footer(){
    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])
    return(
        <div className="footer">
            <video src={`${process.env.PUBLIC_URL}/161045-822582085.mp4`} autoPlay muted loop></video>
            <div className="content">
                <div className="contact" data-aos='fade-up'>
                    <div className="text">
                        <span>Keep in touch</span>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="email-input">
                        <input placeholder="Enter email address"></input>
                    </div>
                    <button type="submit" className="btn">Send
                        <BsSend ></BsSend>
                    </button>
                </div>
                <div className="introduction" data-aos='fade-up'>
                    <div className="brand">
                        <MdOutlineTravelExplore />
                        <h1>Booking</h1>
                    </div>
                    <div className="description">
                        <span>Welcome to Booking, your ultimate gateway to exploring Viet Nam.
                        Whether you're a seasoned traveler or planning your first getaway, our platform is designed to make your travel dreams a reality.</span>
                    </div>
                    <div className="list">
                        <div className="agencylist">
                            <span>OUR AGENCY</span>
                            <ul>
                                <li><IoIosArrowForward/>Services</li>
                                <li><IoIosArrowForward/>Insurance</li>
                                <li><IoIosArrowForward/>Agency</li>
                                <li><IoIosArrowForward/>Tourism</li>
                                <li><IoIosArrowForward/>Payment</li>
                            </ul>
                        </div>
                        <div className="partnerlist">
                            <span>Partners</span>
                            <ul>
                                <li><IoIosArrowForward/>Booking</li>
                                <li><IoIosArrowForward/>RentalCar</li>
                                <li><IoIosArrowForward/>HostelWorld</li>
                                <li><IoIosArrowForward/>Trivago</li>
                                <li><IoIosArrowForward/>Advisor</li>
                            </ul>  
                        </div>
                        <div className="lastminute">
                            <span>Last Minute</span>
                            <ul>
                                <li><IoIosArrowForward/>HoiAn</li>
                                <li><IoIosArrowForward/>HoChiMinh</li>
                                <li><IoIosArrowForward/>HaNoi</li>
                                <li><IoIosArrowForward/>Hue</li>
                                <li><IoIosArrowForward/>Dalat</li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer