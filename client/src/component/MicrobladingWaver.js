import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import SignaturePad from 'react-signature-pad-wrapper'


const MicrobladingWaver = () => {
    
    const clear = () => SignaturePad.clear()

    return (
        <div>
            <h1>
                Microblading Release Waiver
            </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Label>Client Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter phone" />
                    <Form.Label>DOB</Form.Label>
                    <Form.Control type="dob" placeholder="Enter date of birth" />
                    <br></br>
                    <Form.Text className="text">
                        Please read and INITIAL that you have read and understand the following:
                    <br></br>
                        <b>
                            I hereby declare that I have been informed, in detail about the Microblading method and
                            procedure which will be performed.
                    </b>
                        <br></br>
                        <b>
                            I was informed that needles are used to deposit pigment into the upper layers of the skin.
                    </b>
                        <br></br>
                        <b>
                            I am aware that it is not possible to predict how durable and intense the brow colour will be, and that age, skin type and environmental conditions are all factors in pigment retention.
                    </b>
                        <br></br>
                        <b>
                            I am aware that the treatment may cause skin irritation and minor inflammation of the skin, which usually disappears within 24 hours.
                    </b>
                        <br></br>
                        <b>
                            No warranty has been made to me as a result of this semi permanent makeup, micro- pigmentation, or correction procedure, and that the final result cannot be guaranteed.
                    </b>
                        <br></br>
                        <b>
                            There may be risk of infection if aftercare instructions are not followed.
                    </b>
                        <br></br>
                        <b>
                            I realize that there is potential for discomfort during the procedure and during the healing process.
                    </b>
                        <br></br>
                        <b>
                            I am aware that if I have alopecia it may take an extra treatment to get the eyebrows I desire, and I understand that after the first touch up there will be an additional cost per session.
                    </b>
                        <br></br>
                        <b>
                            There is a possibility of bleeding, swelling, and allergic reactions to the pigments used.
                    </b>
                        <br></br>
                        <b>
                            Cosmetic tattooing is considered semi-permanent and will fade with time
                    </b>
                        <br></br>
                        <b>
                            My technician will not, under any circumstance, perform any procedures on me if I am known to have any allergies related to the products used. (Our pigments contain: Sterile Water, Glycerin, Isopropyl Alcohol,IronOxides,TitaniumDioxide,ChromiumOxide)
                    </b>
                        <br></br>
                        <b>
                            I understand that I must inform my technician of any and all medication/s I am currently taking. (Pain control medications such as aspirin or ibuprofen may cause the blood to thin, and excessive bleeding may occur during or after the procedure.)
                    </b>
                        <br></br>
                        <b>
                            I do not currently take Accutane and/or have not taken Accutane for at least 12 months.
                    </b>
                        <br>
                        </br>
                        <b>
                            I have not used Retinol for 2 weeks prior to my appointment and plan to avoid using it for the 2 weeks following my appointment.
                    </b>
                        <br></br>
                        <b>
                            I authorize the use of my photographs taken by the technician to be used on social media and shown to potential clients
                    </b>
                        <br></br>
                        <b>
                            I understand that it is my responsibility to advise the technician of any concerns I may have before they begin the procedure.
                    </b>
                        <br></br>
                        <b>
                            I am not under the influence of any drugs or alcohol.
                    </b>
                        <br></br>
                        <b>
                            I am not pregnant.
                    </b>
                        <br></br>
                        <b>
                            I have not had Botox in the last 3 weeks.
                    </b>
                        <br></br>
                        <b>
                            I release the studio and its representatives and subsidiaries of all claims for injury, seen or unseen, that may occur as a result of this procedure.XXXXXXChange
                    </b>
                        <br></br>
                        <b>
                            I fully understand the questions, terms, and conditions of this Release Agreement. I accept to waive my rights for any claim against the technician for any reason whatsoever.
                    </b>
                        <br></br>
                        <b>
                            I believe that I have sufficient information to give this informed consent.
                    </b>
                        <br></br>
                        <b>
                            I certify that this Release Agreement Was Completed By Me and that all entries and information is true and complete to the best of my knowledge.
                    </b>
                        <br></br>
                        <b>
                            A preliminary drawing has been performed.
                    </b>
                        <br></br>
                        <b>
                            Result of drawing and colour chosen has been presented to me before the pigmentation process has been started.
                    </b>
                        <br></br>
                        <b>
                            This form was signed before the treatment
                    </b>
                        <br></br>
                    </Form.Text>
                    <Form.Control type="in" placeholder="Initial here" />
                    <Form.Label>List any allergies</Form.Label>
                    <Form.Control type="al" placeholder="allergies here" />
                    <Form.Text className="text-muted">
                        *Internal use only
                    </Form.Text>
                    
                    <div style={{backgroundColor:"white"}}>
                    <SignaturePad options={{ minWidth: 2, maxWidth: 5, penColor: 'rgb(66, 133, 244)' }} />
                    </div>
                    <Button variant="primary" type="clear" onClick={clear}>
                        Clear
                    </Button>

                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default MicrobladingWaver;