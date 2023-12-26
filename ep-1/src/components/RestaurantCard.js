import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // console.log("resData===>", resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 bg-gray-300 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-400"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg p-4 font-bold">{name}</h3>
      <h4>{cuisines[0]}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      {/* <h4>{cuisines.join(" ")}</h4> */}
    </div>
  );
};

export const withPromtedLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
