import React from "react" 
import { CiLocationOn } from "react-icons/ci";
import { TbChecklist } from "react-icons/tb";
import './searchResult.css'
export const SearchResult = ({results}) =>{
  return (
    <div className="destinations">
          {results.result.map(item=>
            <div className="single-destination" key={item.hotel_id} data-aos='fade-up' >
              <div>
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
                  <div className="price">
                    <span>{`Starting from ${item.composite_price_breakdown.net_amount.amount_rounded
                    }`}</span>
                  </div>
                  <div className="rating">
                    <span className="review_score">{item.review_score}</span>
                    <span>{item.review_score_word}</span>
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
  )
}