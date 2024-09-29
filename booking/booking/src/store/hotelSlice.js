import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Booking from '../util/booking.js'
const hotelSlice = createSlice({
    name: 'hotel',
    initialState: {
        hotels:[],
        detail:[],
        photos:[],
        description:'',
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
        },
        updateDetail:(state, action)=>{
            state.detail=action.payload
        },
        updatePhoto:(state, action)=>{
            state.photos=action.payload
        },
        updateDescription:(state, action)=>{
            state.description=action.payload
        }
    }
})
export const searchDestination = createAsyncThunk (
    'destination/searchDes',
    async ({arg1, arg2, arg3, arg4, arg5}, thunkAPI) =>{
        console.log(arg1)
        const response = await Booking.search(arg1, arg2, arg3, arg4, arg5)
        thunkAPI.dispatch(updateHotelsList(response))
    }
)
export const getDetail=createAsyncThunk(
    'detail/getDetail',
    async({arg1,arg2,arg3}, thunkAPI)=>{
        const response1=await Booking.getDetails(arg1, arg2, arg3)
        thunkAPI.dispatch(updateDetail(response1))
    }
)   
export const getPhotos=createAsyncThunk(
    'photos/getPhotos',
    async({arg1}, thunkAPI)=>{
        const response2=await Booking.getPhotos(arg1)
        console.log(response2)
        thunkAPI.dispatch(updatePhoto(response2))
    }
)   
export const getDescriptions=createAsyncThunk(
    'descriptions/getDescriptions',
    async({arg1}, thunkAPI)=>{
        const response3=await Booking.getDescriptions(arg1)
        thunkAPI.dispatch(updateDescription(response3))
    }
)   
export const {updateIn, updateOut, updateDestination, updateHotelsList, updateDetail, updatePhoto, updateDescription}=hotelSlice.actions
export const checkin=(state)=>state.hotel.checkin
export const checkout=(state)=>state.hotel.checkout
export const destination=(state)=>state.hotel.destination
export const hotel=(state)=>state.hotel.hotels
export const detail=(state)=>state.hotel.detail
export const photos=(state)=>state.hotel.photos
export const description=(state)=>state.hotel.description
export default hotelSlice.reducer