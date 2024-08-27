import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Booking from '../util/booking.js'
const hotelSlice = createSlice({
    name: 'hotel',
    initialState: {
        hotels:[],
        destination:'',
        checkout:'',
        checkin:''
    },
    reducers:{
        updateHotelsList: (state, action)=>{
            state.hotels=action.payload
        },
        updateDestination:(state, action)=>{
            state.destination=action.payload
        },
        updateIn:(state, action)=>{
            state.checkin=action.payload
        },
        updateOut:(state, action)=>{
            state.checkout=action.payload
        }
    }
})
export const searchDestination = createAsyncThunk (
    'destination/searchDes',
    async ({arg1, arg2, arg3, arg4}, thunkAPI) =>{
        console.log(arg1)
        const response = await Booking.search(arg1, arg2, arg3, arg4)
        thunkAPI.dispatch(updateHotelsList(response))
    }
)   
export const {updateIn, updateOut, updateDestination, updateHotelsList}=hotelSlice.actions
export const checkin=(state)=>state.hotel.checkin
export const checkout=(state)=>state.hotel.checkout
export const destination=(state)=>state.hotel.destination
export const hotel=(state)=>state.hotel.hotels
export default hotelSlice.reducer