import { useLocation} from "react-router-dom"
import { useSelector } from "react-redux"
import { destination, detail, photos} from "../../store/hotelSlice"
import Slider from "react-slick";
export const Detail=()=>{
  const location=useLocation()
  const hotel = Object.values(useSelector(detail))
  const image=useSelector(photos)
  const des=useSelector(destination)
  const {data}= location.state
  console.log(image)
  if (hotel.length===0){
    return (
      <span>loading</span>
    )
  }
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="Detail">
        <div>
          <div className="hotel-image">
            <Slider {...settings}>
              {image.slice(0,10).map(item=>
                <img src={item.url_max}></img>
              )}
            </Slider>
          </div>
          <div className="name">
            <h1>{data}</h1>
          </div>
        </div>
    </div>
  )
}