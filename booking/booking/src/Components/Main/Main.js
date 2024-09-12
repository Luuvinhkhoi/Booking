import React, {useEffect} from "react";
import './Main.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Carousel from "../Carousel/Carousel";
import Introduction from "../Introduction/Introduction";
function Main (){
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
    return (
      <div className="Main">
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
export default Main