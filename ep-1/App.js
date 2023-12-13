import React from "react";
import ReactDOM  from "react-dom/client";

//react element
const title = (
    <h1 className="head">
        namaste React using JSX
    </h1>
)

const HeadingComponent = () => {
    return (<div id="container">
        {title}
        <h1>Namaste React functional component</h1>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)