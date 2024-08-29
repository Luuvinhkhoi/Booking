import React from "react";
import './Introduction.css'
import img7 from '../../Assets/img7.jpg'
function Introduction(){
    return (
        <div className="introduction">
            <div className="welcome">
                <div className="welcome-img">
                    <img src={img7}></img>
                </div>
                <div className="welcome-content">
                    <h2>Hope you will enjoy your holiday</h2>
                    <span>Your trusted partner for exploring the wonders of this beautiful country. Vietnam is a land of contrasts, where ancient history meets vibrant modernity,
                     and breathtaking natural landscapes provide the backdrop to a rich cultural heritage.
                     From the towering limestone islands of Ha Long Bay to the terraced rice fields of Sapa
                    , and from the bustling streets of Ho Chi Minh City to the tranquil waterways of the Mekong Delta,
                    Vietnam offers endless opportunities for adventure, relaxation, and cultural exploration</span>
                </div>
            </div>
            <div className="slogan">
                <h2>Explore the world with ease – book in just a few clicks!</h2>
            </div>
            <div className="advan">
                <div className="advan-1">
                    <div className="advan-1-content">
                        <div className="title">
                            <h3>EASY TO USE</h3>
                        </div>
                        <div className="desc">
                            <span>Modern booking websites are designed that easy to book in 1 click</span>
                        </div>
                    </div>
                </div>
                <div className="advan-1">
                    <div className="advan-1-content">
                        <div className="title">
                            <h3>BEST PRICE</h3>
                        </div>
                        <div className="desc">
                            <span>We have direct agreements with hotels, airlines, and other service providers</span>
                        </div>
                    </div>
                </div>
                <div className="advan-1">
                    <div className="advan-1-content">
                        <div className="title">
                            <h3>24/7 SUPPORT</h3>
                        </div>
                        <div className="desc">
                            <span>Trusted customer service you can rely on, 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Introduction