import React, {useEffect} from "react";
import {useSelector} from 'react-redux'
import { hotel} from "../../store/hotelSlice";
import './Main.css'
import data from "./Data";
import { CiLocationOn } from "react-icons/ci";
import { TbChecklist } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Carousel from "../Carousel/Carousel";
import Introduction from "../Introduction/Introduction";
import { SearchResult } from "../searchResult/searchResult";
function Main (){
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
    const results=useSelector(hotel)
    console.log (results)
    if (!results.result){
      return (
        <div>
          <div className="popular">
            <h2>Most visited destination</h2>
            <div className="Slider">
              <Carousel></Carousel>
            </div>
          </div>
          <Introduction></Introduction>
        </div>
      )
    }
    return (
      <div className="Main">
          <SearchResult results={results}></SearchResult>
      </div>
    )
}
export default Main