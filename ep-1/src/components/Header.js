import { Logo_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-32" src={Logo_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="flex p-4">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="flex p-4">
            <Link to="/">Homes </Link>
          </li>
          <li className="flex p-4">
            <Link to="/about">About Us </Link>
          </li>
          <li className="flex p-4">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="flex p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="flex p-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
