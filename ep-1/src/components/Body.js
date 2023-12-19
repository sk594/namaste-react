import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    return (
      <div className="body">
        <div className="filter">
            <button
                className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    console.log("from filter")
                    setListOfRestaurants(filteredList)
                }}
            >filter</button>
        </div>
        <div className="search">Search</div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant, index) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;