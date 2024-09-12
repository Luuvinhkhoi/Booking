import { useLocation } from "react-router-dom"
export const Detail=()=>{
  const location=useLocation()
  const {data}= location.state
  console.log(data)
  return (
    <div className="Detail">
      <div className="name">
        <h1>{data}</h1>
      </div>
    </div>
  )
}