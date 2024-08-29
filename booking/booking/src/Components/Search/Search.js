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
  const [isActive, setIsActive]=useState('closeDaterange')
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [guest, setGuest]=useState(1)
  const dispatch = useDispatch()
  console.log(format(state[0].startDate, 'yyyy-MM-dd'))
  function handleClick (){
    if (isActive==='closeDaterange'){
      setIsActive('activeDaterange')
    } else{
      setIsActive('closeDaterange')
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
    dispatch(searchDestination({arg1: destinationstate,arg2: guest ,arg3: checkinstate,arg4: checkoutstate}))
  }
  function handleGuest(e){
    setGuest(e.target.value)
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
                  <div onClick={handleClick} className="date">
                    <span>{`${format(state[0].startDate, 'dd/MM')} to ${format(state[0].endDate, 'dd/MM')}`}</span>
                  </div>
                  <div className={isActive}>
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
                  <div className="input-flex" onChange={handleGuest}>
                    <input placeholder="Number of guest"></input>
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