import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

        // console.log(props)
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "",
                location: "",
                avatar_url: "",
                url: ""
            }
        }

        console.log("Child Constructor")
    }

    async componentDidMount(){
        console.log("Child component did mount")

        const data = await fetch("https://api.github.com/users/sk594");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentWillUnmount() {
        console.log("component will unmount")
    }
    
    render() {
        console.log("Child render")
        // const { name, location } = this.props
        let {count, count2} = this.state;
        let { name, location, avatar_url, url } = this.state.userInfo

        return (
            <div className="user-card">
                <button onClick={() => {
                    this.setState({
                        count : this.state.count+ 1
                    })
                }}>Increment Counter</button>
                <h1>COunt: {count}</h1>
                {/* <h1>COunt2: {count2}</h1> */}
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: { url }</h4>
            </div>
        )
    }
}

export default UserClass;