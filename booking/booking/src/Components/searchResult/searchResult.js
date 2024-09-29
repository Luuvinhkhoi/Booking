import React, { useState } from "react" ;
import { CiLocationOn } from "react-icons/ci";
import { TbChecklist } from "react-icons/tb";
import './searchResult.css'
import {useSelector, useDispatch} from 'react-redux'
import { hotel, getDetail, getPhotos, getDescriptions} from "../../store/hotelSlice";
import { Link, useLocation } from "react-router-dom";
export const SearchResult = () =>{
  const results=useSelector(hotel)
  const dispatch=useDispatch()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const checkin = searchParams.get('checkin');
  const checkout = searchParams.get('checkout');
  console.log(results)
  if (results.length===0){
    return(
      <p>Loading</p>
    )
  }
  function handleClick(id){
    dispatch(getDetail({arg1: id, arg2: checkin, arg3: checkout}))
    dispatch(getPhotos({arg1:id}))
    dispatch(getDescriptions({arg1:id}))
  }
  return (
    <div className="Main">
      <div className="destinations">
                {results.result.map(item=>
                <Link
                  to={`/${item.hotel_id}`}
                  onClick={()=>handleClick(item.hotel_id)}
                  state={{data: item.hotel_name}}
                >
                  <div className="single-destination" key={item.hotel_id}  >
                    <div>
                      <img src={item.max_photo_url}></img>
                    </div>
                    <div className="detail">
                      <div className="location">
                        <div className="location-info">
                          <h2> {item.hotel_name.length > 20 ? item.hotel_name.substring(0, 30) + '...' : item.hotel_name}</h2>
                          <div className="location-flex">
                            <CiLocationOn></CiLocationOn>
                            <span>{item.default_wishlist_name
                            }</span>
                          </div>
                        </div>
                      </div>
                      <div className="description">
                        <div className="rating">
                          <span className="review_score">{item.review_score}</span>
                        </div>
                        <div className="price">
                          <span>{`From ${item.composite_price_breakdown.net_amount.amount_rounded
                          } per night`}</span>
                        </div>
                      </div>
                      <div className="detailbtn">
                        <button>DETAIL</button>
                        <TbChecklist></TbChecklist>
                      </div>
                    </div>
                  </div>
                </Link>  
                )}
      </div>
    </div>
    
  )
}