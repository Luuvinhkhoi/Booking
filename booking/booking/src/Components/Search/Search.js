import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { destination, checkin, checkout, updateDestination, updateIn, updateOut, searchDestination } from "../.././store/hotelSlice";
import './Search.css'
import { FaFilter } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {DateRange} from 'react-date-range'
import { addDays } from 'date-fns';
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
function Search(){
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  const checkinstate=useSelector(checkin)
  const checkoutstate=useSelector(checkout)
  const destinationstate=useSelector(destination)
  const [isActiveDate, setIsActiveDate]=useState('close')
  const [isActiveGuest, setIsActiveGuest]= useState('close')
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [adult, setAdult]=useState(1)
  const [room, setRoom]=useState(1)
  const [children, setChildren]=useState(0)
  const dispatch = useDispatch()
  console.log(format(state[0].startDate, 'yyyy-MM-dd'))
  let total=adult+children
  function handleGuestClick (){
    console.log(isActiveGuest)
    if (isActiveGuest==='close' && isActiveDate==='close'){
      setIsActiveGuest('active')
    } else if (isActiveGuest==='active' && isActiveDate==='close'){
      setIsActiveGuest('close')
    } else if (isActiveGuest==='close' && isActiveDate==='active'){
      setIsActiveGuest('active')
      setIsActiveDate('close')
    } 
  }
  function handleDateClick (){
    console.log(isActiveDate)
    if (isActiveGuest==='close' && isActiveDate==='close'){
      setIsActiveDate('active')
    } else if (isActiveGuest==='close' && isActiveDate==='active'){
      setIsActiveDate('close')
    } else if (isActiveGuest==='active' && isActiveDate==='close'){
      setIsActiveGuest('close')
      setIsActiveDate('active')
    } 
  }
  function handleInOutClick(){
    dispatch(updateIn(format(state[0].startDate, 'yyyy-MM-dd')))
    console.log('hi')
    dispatch(updateOut(format(state[0].endDate, 'yyyy-MM-dd')))
  }
  function getdestination(e){
    dispatch(updateDestination(e.target.value))
  }
  function search(){
    console.log(destinationstate)
    dispatch(searchDestination({arg1: destinationstate,arg2: adult, arg3: room ,arg4: checkinstate,arg5: checkoutstate}))
  }
  function onAdd(setState){
    setState(prevState=>prevState+1)
  }
  function onRemove(setState){
    setState(prevState=>prevState-1)
  }
  return(
    <div className="search">
        <div className="video"></div>
        <img src='https://webdesignmastery.github.io/WDM-Co_07-07-23/assets/header.jpg' className="image"></img>
        <div className="content">
            <div className="text">
              <span data-aos='fade-up'>Our packages</span>
              <h2 data-aos='fade-up'>Search your Holiday</h2>
            </div>
            <div className="search-bar" data-aos='fade-up'>
                <div className="select">
                  <p>Search destination</p>
                  <div className="input-flex">
                    <input placeholder="Enter destination here" onChange={getdestination}></input>
                  </div>
                </div>
                <div className="select">
                  <p>Select date</p>
                  <div className="date" onClick={handleDateClick} >
                    <span>{`${format(state[0].startDate, 'dd/MM')} to ${format(state[0].endDate, 'dd/MM')}`}</span>
                  </div>
                  <div className={`${isActiveDate}Daterange`}>
                  <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    onClick={handleInOutClick()}
                  />;
                  </div>
                </div>
                <div className="select">
                  <div className="select-flex">
                    <p>Number of guest</p>
                  </div>
                  <div className="input-flex" onClick={handleGuestClick}>
                    <input placeholder={`${adult} adult - ${children} children - ${room} room`}></input>
                  </div>
                  <div className={`${isActiveGuest}select-guest`}>
                      <div className="select-guest-flex">
                        <span className="child">Adults</span>
                        <button onClick={()=>onRemove(setAdult)} disabled={adult<=1}>-</button>
                        <span className="guest-number">{adult}</span>
                        <button onClick={()=>onAdd(setAdult)}>+</button>
                      </div>
                      <div className="select-guest-flex">
                        <span className="child">Rooms</span>
                        <button onClick={()=>onRemove(setRoom)} disabled={room<=1}>-</button>
                        <span className="guest-number">{room}</span>
                        <button onClick={()=>onAdd(setRoom)}>+</button>
                      </div>
                      <div className="select-guest-flex">
                        <span className="child">Childrens</span>
                        <button onClick={()=>onRemove(setChildren)} disabled={children<=1}>-</button>
                        <span className="guest-number">{children}</span>
                        <button onClick={()=>onAdd(setChildren)}>+</button>
                      </div>
                  </div>
                </div>
                <div className='filter' onClick={search}>
                  <FaFilter ></FaFilter>
                  <span>Filter</span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Search