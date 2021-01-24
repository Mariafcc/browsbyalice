import React from "react";
import Button from "react-bootstrap/Button"

const Makeup = () => {
    return (
        <div id="makeup">
            <div className="container-fluid">
                <div className="container">
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Consultation

                                </p>

                                <p>
                                    Fill out
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    x Hour
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
                        <div class="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Makeup Application
                                </p>

                                <p>
                                    Fill out
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    x Hours
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
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Makeup Trial
                                </p>

                                <p>
                                    Fill out
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    x Hours
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
                                    Bridal Makeup
                                </p>

                                <p>
                                    ~Includes Trial and Travel~
                                    Bride only, includes body glow and faux mink lash application

                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    x Minutes
                                </p>
                                <b>
                                    Price:
                                </b>
                                <p>
                                    $300
                                </p>
                                <Button variant="outline-dark">Book</Button>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Children Makeup(Under 13)
                                </p>

                                <p>
                                    Fill out
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    x Hours
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
                </div>
            </div>
        </div>

    )
}

export default Makeup;