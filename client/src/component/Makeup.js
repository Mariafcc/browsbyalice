import React from "react";

const Makeup = () => {
    return (
        <div id="makeup">
            <div className="container-fluid">
                <div className="container">
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration:"underline"  }}>
                                    Consultation

                                </p>

                                <p>
                                    Fill out
                                </p>
                                <p>
                                    time: x hour
                                </p>
                                <p>
                                    price: $50
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration:"underline"  }}>
                                    Makeup Application
                                </p>

                                <p>
                                    Fill out
                                </p>
                                <p>
                                    time: x hours
                            </p>
                                <p>
                                    price: $100
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration:"underline"  }}>
                                    Makeup Trial
                                </p>

                                <p>
                                    Fill out
                                </p>
                                <p>
                                    time: x hours
                                </p>
                                <p>
                                    price: $70
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration:"underline"  }}>
                                    Bridal Makeup
                                </p>

                                <p>
                                    ~Includes Trial and Travel~
                                    Bride only, includes body glow and faux mink lash application

                                </p>
                                <p>
                                    time: x minutes
                                </p>
                                <p>
                                    price: $300
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col">
                            <div className="container" style={{ padding: "10px", fontFamily: 'Montserrat' }}>
                                <p style={{ fontSize: "20px", textDecoration:"underline"  }}>
                                    Children Makeup(Under 13)
                                </p>

                                <p>
                                    Fill out
                                </p>
                                <p>
                                    time: x hours
                                </p>
                                <p>
                                    price: $50
                                </p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Makeup;