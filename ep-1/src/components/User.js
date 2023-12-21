import { useState } from "react";

const User = (props) => {
    // console.log("props==>", props)

    let [count] = useState(0)
    let [count2] = useState(1)

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Contact: @sanjay</h4>
    </div>
  );
};

export default User;
