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