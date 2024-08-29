import React from "react" 
export const SearchResult = () =>{
  return (
    <div className="destinations">
          {results.result.map(item=>
            <div className="single-destination" key={item.hotel_id} data-aos='fade-up' >
              <div className="image">
                <img src={item.max_photo_url}></img>
              </div>
              <div className="detail">
                <div className="location">
                  <div className="location-info">
                    <h2>{item.hotel_name}</h2>
                    <div className="location-flex">
                      <CiLocationOn></CiLocationOn>
                      <span>{item.default_wishlist_name
                      }</span>
                    </div>
                  </div>
                </div>
                <div className="description">
                  <span>{item.descrition}</span>
                  <div>
                    <span>{item.composite_price_breakdown.net_amount.amount_rounded
                    }</span>
                  </div>
                  <div>
                    <span>{item.review_score}</span>
                  </div>
                </div>
                <div className="detailbtn">
                  <button>DETAIL</button>
                  <TbChecklist></TbChecklist>
                </div>
              </div>
            </div>
          )}
    </div>
  )
}