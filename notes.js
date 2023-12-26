// 1. what is cdn and why we use it ?
// 2. what is devdependency and dependency in npm ?
//3. npm parcel use
//4. ^ and ~ sign in package.json
//5. transitive dependency in npm ? 
//6. npm vs npx (executing package )
//7. npm run start === npm start 
//8. react vs reactDOM ?
//9. JSX ?
    //JSX is not html in javascript JSX is HTML like syntax
    //JSX (transpiled before it render the JSX) => parcel => Babel
    //So parcel transpiled the code using Babel 
    //Babel => is a javascript compiler

import { useEffect } from "react";

//10. what is a component 
    //class based vs functional component
//12. react element vs react component 
    // react element is just a attribute and component is just a javascript function that return
        // jsx
        // const element = <h1>namaste react element<h1/>
        // const component = () => {
            // return <h1>namaste react component<h1/>
        // }
    //how to render  =>
        //react element => root.render(element)
        //react component => root.render(<component/>)
//13. what is component composition ?
    // combining multiple component
    //Component composition is the practice of combining smaller, self-contained components to create
        // more complex and feature-rich user interfaces.

//14. props =>
//15. config driven UI ? (frontend system design)
//16. key in list =>
    //react doc says it is bad practice to use index as a key in loop use unique id
    //not using keys (not acceptable) <<< index as key <<<<<< unique id (best practice)
//17. there are two type of export =>
    //export default component vs export <variable>
//18. useState hook =>
    //react rerender component when useState variable update
//19. react fiber architecture 
    //virtual dom
    //reconciliation algo
    //diff algo
//20. conditional Rendering => 
    //rendering on a condition 
//21. useEffect =>
    // useEffect(cb function, dependency)
    //if no dependency array => useEffect is called on every render
    //if dependency array is empty = [] => useEffect is called on initial render(just once)
    //if dependency array is [variable] => called everytime variable is updated

//22. routing =>
    // npm => react-router-dom
    // createBrowserRouter, RouterProvider
    // useRouteError => use for error in routing error page
    // children route 
    // Outlet
    // link => behind the seen link using the anchor tag => <a href=""> </a>

//23. 2 types routing in web apps
    // client side routing
    // server side routing

//23. class component =>
    // constructor => render => componentDidMount

    //if we have two class component Parent and Child
    //Parent constructor => Parent Render => Child Constructor => Child render => Child component did mount
            //=> Parent component did mount
    //so first parent's constructor => parent's render => child's constructor => child's render =>
            // child's componentDidMount => parent's componentDidMount
    
    //if we have two child =>
        // Parent constructor  =>
        // Parent Render => 
            // first Child Constructor => 
            // first Child render => 
            // Second Child Constructor => 
            // Second Child render => 
            // First Child component did mount =>
            // second Child component did mount =>
        // Parent component did mount



/**
24. Chunking
    Code Splitting
    Dynamic Bundling
    Lazy loading
    on demand loading
    Dynamic import

    lazy 
    Suspense
    fallback


25. Scss vs css
    tailwind css
    postcss

26. Higher order component  => take a component and return a component


27. accordion , position, justify-content, flex

28. controlled vs uncontrolled component

29. lifting state up

30. props drilling

31. context api

    how to use context data in class base component => UserContext.Consumer
    UserContext.provider
    Nested UserContext


32. Redux Toolkit =>
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - Slice (cardSlice)
    - dispatch(action)
    - Selector

    => Redux internal use Immer npm

    => Redux dev tool extension


33. Setting up testing in our app =>
    - Install React Testing Library
    - Installed jest
    - Installed Babel dependencies
    - Configure Babel
    - Configure Parcel Config file to disable default babel transpilation
    - Jest configuration => npx jest --init
    - Install jsdom library
    - Install @babel/preset-react - to make JSX work in test cases
    - Include @babel/preset-react inside my babel config
    - Install @testing-library/jest-dom


    - render, screen => @testing-library/react
    - act => react-dom/test-utils
   */    
