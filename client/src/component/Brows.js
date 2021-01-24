import React from "react";
import Button from "react-bootstrap/Button"

const Brows = () => {
    return (
        <div>
            <div className="container-fluid" >
                <div>
                    <img src="./img/preview-2.jpeg" style={{width:"100%", height:"400px", opacity:".5"}}></img>
                </div>
                <div className="container">
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col" style={{padding:"20px"}}>
                            <div className="container" style={{ fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Microblading
                                </p>

                                <p>
                                    Microblading is done by implanting pigment into the skin in fine hair-like strokes which gives the appearance of natural brow hairs. This is done by using a handheld tool with fine needles in the form of a blade.
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    2 Hours
                                </p>
                                <b>
                                    Price:
                                </b>
                                <p>
                                    $600
                                </p>
                                <Button variant="outline-dark">Book</Button>
                            </div>
                        </div>
                        <div class="col">
                            <div className="container" style={{ fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline", paddingTop:"20px" }}>
                                    Ombré Powder
                                </p>

                                <p>
                                    The ombré brow is a form of PMU that consists of different needle configurations to achieve a powdered brow look. The brow is fully shaded with a natural gradient effect towards the front. Ombré powder is a great option for people with oily skin or people who don’t retain pigment well.
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    3 Hours
                                </p>
                                <b>
                                    Price:
                                </b>
                                <p>
                                    $600
                                </p>
                                <Button variant="outline-dark">Book</Button>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Blade and Shade Combo
                            </p>

                                <p>
                                    A combination PMU technique of hair strokes (Microblading) and shading to add density to the hair strokes creating a fuller looking brow.
                                    Will need touch up an additional $100.
                            </p>
                                <b>
                                    Time:
                            </b>
                                <p>
                                    3 Hours
                            </p>
                                <b>
                                    Price:
                            </b>
                                <p>
                                    $800
                            </p>
                            <Button variant="outline-dark">Book</Button>
                            </div>
                        </div>
                        <div class="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Brow Wax
                                </p>

                                <p>
                                    Custom mapping, shaping, trimming and tweezing included.
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    20 Minutes
                                </p>
                                <b>
                                    Price:
                                </b>
                                <p>
                                    $30
                                </p>
                                <Button variant="outline-dark">Book</Button>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Brow Tint
                                </p>

                                <p>
                                    A process that uses semi-permanent dye to enhance, shape, and define the brow. Lasts 2-4 weeks.
                                </p>
                                <b>
                                    Time:
                                </b>
                                <p>
                                    20 Minutes
                                </p>
                                <b>
                                    Price:
                                </b>
                                <p>
                                    $20
                                </p>
                                <Button variant="outline-dark">Book</Button>
                            </div>
                        </div>
                        <div class="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration: "underline" }}>
                                    Brow Lamination

                                </p>

                                <p>
                                    A brow perming technique that involves correcting and customizing the brow shape by setting the hairs in a place for an extended period of time. Lasts 4-6 weeks.
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
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Brows;