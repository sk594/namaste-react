const Contact = () => {
    return (
        <div className="font-bold text-3xl p-4 m-4">
            <h1>Contact Us Page</h1>
            <input  placeholder="name" type="text" className="p-2 m-2 border border-black"/>
            <input  placeholder="message" type="text" className="p-2 m-2 border border-black"/>
            <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
        </div>
    )
}

export default Contact;