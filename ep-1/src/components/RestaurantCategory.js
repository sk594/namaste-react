import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showCard, setShowCard] = useState(false)
  // console.log(data)
  const clickHandler = () => {
    // setShowCard(!showCard)
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 justify-between">
        <div
          className="flex justify-between cursor-pointer"
          onClick={clickHandler}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordion body */}
    </div>
  );
};

export default RestaurantCategory;
