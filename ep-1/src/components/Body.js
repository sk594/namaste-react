import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { withPromtedLable } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromtedLable(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    // console.log(
    //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional Rendering
  // if(listOfRestaurants.length == 0){
  //     return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Look like you're offline!! Please check your internet connection</h1>
    );

    const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // console.log(searchText, listOfRestaurants);

              const filterdRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterdRestaurant(filterdRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 m-4 bg-gray-100 flex items-center rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterdRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label htmlFor="name">User Name: </label>
          <input
            id="name"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterdRestaurant.map((restaurant, index) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
