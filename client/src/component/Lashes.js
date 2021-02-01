import React from "react";
import Button from "react-bootstrap/Button"

const Lashes = () => {
    return (
        <div id="lashes">
            <div className="container-fluid">
                <div>
                    <img src="../img/openeyes.jpg" style={{ width: "100%", height: "450px", opacity: ".5" }}></img>
                </div>
                <div className="container">
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Lash Lift

                                </p>

                                <p>
                                    A lash lift is a semi-permanent treatment that gives your natural lashes an illusion of perfectly curled lashes. It is a great alternative to eyelash extensions as it requires very little maintenance and has long lasting results.
                                    Created to lift and curl even the most stubborn and straight eyelashes,making the eye itself look bigger and wider. Lasts 6-8 weeks.
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    1 Hour
                                </p>
                                <b>
                                    Price:
                                </b>
                                <p>
                                    $70
                                </p>
                                <Button variant="outline-dark">Book</Button>
                            </div>
                        </div>
                        <div class="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Lash Tint
                                </p>

                                <p>
                                    Lash tinting  is a process that uses semi-permanent dye on the eyelashes to create darker, fuller looking eyelashes without the assistance of mascara. Includes top and bottom lashes. Lasts 6 weeks
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    x hours
                                </p>
                                <b>
                                    Price:
                                </b>
                                <p>
                                    $50
                                </p>
                                <Button variant="outline-dark">Book</Button>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Lash Lift and Tint
                                </p>

                                <p>
                                    Fill out
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    x hours
                                </p>
                                <b>
                                    Price:
                                </b>
                                <p>
                                    $100
                                </p>
                                <Button variant="outline-dark">Book</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Lashes;