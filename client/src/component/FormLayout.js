import React, { useState } from "react";
import MicrobladingWaver from "./MicrobladingWaver";
import Navbar from "./NavBar";
import ContactForm from "./ContactForm";

const FormLayout = () => {
    return (
        <div>
            <Navbar />
            <ContactForm/>
            
        </div>
    )
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')

    // const handleClick = (e) => {
    //     e.preventDefault();

    //     if (e.target.value) {
    //         setName(e.target.value)
    //     } else {
    //         setEmail(e.target.value)
    //     }
    // }

    // const handleSubmit = ()

    //     < div >
    //     <form onSubmit="">
    //         <input id="name" placeholder="name" value={name} onChange={handleClick} />
    //         <input id="email" placeholder="email" value={email} onChange={handleClick} />
    //         <button onClick={handleSubmit}>Send Form</button>

    //     </form>
    // </div >
}

export default FormLayout;