import React, {useEffect} from "react";
import {useSelector} from 'react-redux'
import { hotel} from "../../store/hotelSlice";
import './Main.css'
import data from "./Data";
import { CiLocationOn } from "react-icons/ci";
import { TbChecklist } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';
function Main (){
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
    const results=useSelector(hotel)
    console.log (results)
    if (!results.result){
      return <div></div>
    }
    return (
      <div className="Main">
        <span>Most visited destination</span>
        <div className="destinations">
          {results.result.map(item=>
            <div className="single-destination" key={item.hotel_id} data-aos='fade-up' >
              <div className="image">
                <img src={item.max_photo_url}></img>
              </div>
              <div className="detail">
                <div className="location">
                  <div className="location-info">
                    <h2>{item.hotel_name}</h2>
                    <div className="location-flex">
                      <CiLocationOn></CiLocationOn>
                      <span>{item.default_wishlist_name
                      }</span>
                    </div>
                  </div>
                </div>
                <div className="description">
                  <span>{item.descrition}</span>
                  <div>
                    <span>{item.composite_price_breakdown.net_amount.amount_rounded
                    }</span>
                  </div>
                  <div>
                    <span>{item.review_score}</span>
                  </div>
                </div>
                <div className="detailbtn">
                  <button>DETAIL</button>
                  <TbChecklist></TbChecklist>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
}
export default Main