const APIkey='8f2f4f1f94mshb0c924029573f0ap1b16d3jsn654b7b7eac5a'
const host='booking-com.p.rapidapi.com'
const baseUrl='https://booking-com.p.rapidapi.com/v1/hotels/'
let Booking = {
  async search(location, adults_number, checkin_date, checkout_date){
    let dest_id=''
    console.log(location)
    return await fetch(`${baseUrl}locations?locale=en-gb&name=${location}`,{
      method:'GET', 
      headers:{
        'x-rapidapi-key': `${APIkey}`,
        'x-rapidapi-host': `${host}`
      }
    }).then(response=>{
      if (response.ok){
        return response.json()
      }
    }).then(jsonResponse=>{
      if (!jsonResponse){
        console.error('Response error')
      }
      dest_id= jsonResponse[0].dest_id;
      console.log(jsonResponse)
      console.log(jsonResponse[0].dest_id)
      return fetch(`${baseUrl}search?page_number=0&adults_number=${adults_number}&room_number=1&include_adjacency=true&units=metric&checkout_date=${checkout_date}&dest_id=${dest_id}&filter_by_currency=USD&dest_type=city&checkin_date=${checkin_date}&order_by=popularity&locale=en-gb`,{
        method:'GET', 
        headers:{
          'x-rapidapi-key': `${APIkey}`,
          'x-rapidapi-host': `${host}`
        }
      }).then(response=>{
        if (response.ok){
          return response.json()
        }
      }).then(jsonResponse=>{
        if(!jsonResponse){
          console.error('Reponse error')
        }
        console.log(jsonResponse)
        return jsonResponse
      })
    })
  }
}
export default Booking