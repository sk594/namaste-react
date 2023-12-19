import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { resList } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurant, setFilterdRestaurant] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    console.log(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurant(listOfRestaurants)
  };

  //conditional Rendering
  // if(listOfRestaurants.length == 0){
  //     return <Shimmer />
  // }

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"
           className="search-box" 
            value={searchText}
            onChange={ (e) => {
                setSearchText(e.target.value)

            }}
           />
            
          <button
            onClick={() => {
                console.log(searchText);

                const filterdRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                setFilterdRestaurant(filterdRestaurant)
            }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log("from filter");
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {filterdRestaurant.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
