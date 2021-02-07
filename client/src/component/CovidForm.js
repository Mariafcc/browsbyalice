import React, { Component } from "react";
import axios from "axios";
import SignaturePad from 'react-signature-pad-wrapper'

class CovidForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
            status: "Submit"
        };
    }

    handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
            this.setState({ name: event.target.value });
        } else if (field === "email") {
            this.setState({ email: event.target.value });
        } else if (field === "phone") {
            this.setState({ phone: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ status: "Sending" });
        axios({
            method: "POST",
            url: "http://localhost:5000/covid",
            data: this.state,
        }).then((response) => {
            if (response.data.status === "sent") {
                alert("Message Sent");
                this.setState({ name: "", email: "", message: "", status: "Submit" });
            } else if (response.data.status === "failed") {
                alert("Message Failed");
            }
        });
    }




    render() {
        let buttonText = this.state.status;
        return (
            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <h1>
                    Covid-19 Pandemic Liability Release Waiver
            </h1>
                <p>
                    Due to the 2019-2020 Pandemic of the Novel Coronavirus (Covid-19), we are taking Extra Precautions with the Intake of each client, heath history review, as well as sanitation and disinfecting practices. Please Complete the following and sign bellow. *Signature will be required prior to every appointment.*
            </p>
                <p>
                    Common Symptoms of COVID-19 May Include (But not limited to)
            </p>
                <ul>
                    <li>Fever</li>
                    <li>Shortness of Breath</li>
                    <li>Loss of Taste or smell </li>
                    <li>Dry Cough</li>
                    <li>Runny Nose</li>
                    <li>Soar Throat</li>
                    <li>Body Aches/Pain/Headaches</li>
                </ul>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <textarea
                        type="phone"
                        id="phone"
                        value={this.state.phone}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                </div>
                <p>
                    I agree to the following
            </p>
                <ul>
                    <li>I affirm that I, as well as all household members have not been diagnosed with COVID-19 within the last 30 days.</li>
                    <li>I Understand that the above symptoms and affirm that I, as well as all household members, do not currently have, nor have experienced the symptoms listed above within the last 14 days.</li>
                    <li>I affirm that I have not traveled outside the United States in the past 30 days to countries that have been affected by COVID-19.  </li>
                    <li>I Understand that this business and my lash/brow artist cannot be held liable for any exposure to the virus or any other contagious cause by misinformation on this form or the health history provided by each client. </li>
                    <li>I understand that I will have to follow the salon’s strict guidelines to prevent the spread of contagious viruses and to help protect each other. </li>
                    <li>Furthermore I Agree to not hold BROWS BY Alice or its associates if I do contract COVID-19 or any other contagious as I have decided to come here on my own free will. </li>

                </ul>
                <p>
                    Your Technician and ALL Employees of this facility agree that they abide by these same standards and affirm the same. We also affirm that we have improved and expanded our sanitation protocols to more thoroughly fight the spread of COVID-19 and other communicable conditions.
                </p>
                <div class="form-check">
                    <label class="form-check-label"> 
                        <input class="form-check-input" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></input> 
                        By selecting this checkbox you are agreeing to the above.
                    </label>
                </div>
                <br></br>
                <p>
                By signing Below I agree to each above statement and release BROWS BY Alice and its associates from any and all liability for the unintentional exposure or harm due to COVID-19.
                </p>
                <SignaturePad redrawOnResize={true}/>

                <button type="submit">{buttonText}</button>
            </form>
        );
    }
}



export default CovidForm;