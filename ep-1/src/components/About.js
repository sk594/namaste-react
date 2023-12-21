import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props)     {
    super(props)

    console.log("Parent constructor")
  }

  componentDidMount(){
    console.log("Parent component did mount")
  }

  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>ABout</h1>
        <h2>This is Namaste React web series</h2>
        <User name={"sanjay"} location={"Jaipur"} />
        <UserClass name={"sanjay"} location={"Jaipur"} />
      </div>
    );
  }
}

// const About = () => {
//     return (
//         <div>
//             <h1>ABout</h1>
//             <h2>This is Namaste React web series</h2>
//             <User name={"sanjay"} location={"Jaipur"} />
//             <UserClass name={"sanjay"} location={"Jaipur"}/>
//         </div>
//     )
// }

export default About;
