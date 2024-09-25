import { useLocation} from "react-router-dom"
import { useSelector } from "react-redux"
import { detail } from "../../store/hotelSlice"
export const Detail=()=>{
  const location=useLocation()
  const hotel= useSelector(detail)
  const {data}= location.state
  console.log(hotel)
  return (
    <div className="Detail">
      <div></div>
      <div className="name">
        
      </div>
    </div>
  )
}