import React from "react"

function About({image, about}){
    return <div>
        <img 
            src={image ? image : "https://via.placeholder.com/215"} alt="blog logo"
        />
        <p>{about}</p>
    </div>
}
export default About