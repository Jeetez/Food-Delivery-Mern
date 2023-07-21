import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>UrbanEats</h1>
            <p>
            Thank you for your interest in UrbanEats! We value every connection with our customers, and we're here to ensure your experience with us is exceptional. Whether you have a question, feedback, or simply want to chat about our delectable offerings, our dedicated team is eagerly awaiting your message.

To reach us, you can use any of the following methods:
<p>
1. Contact Form: Fill out the user-friendly contact form on our website, and we'll get back to you promptly. Let us know your name, email address, and the nature of your inquiry, and we'll make sure to address it with the utmost care.
</p>
2. Email: Shoot us an email at info@urbaneats.com, and our customer support team will be delighted to assist you. Whether it's regarding our menu, catering options, or any other query, we're always at your service.
<p></p>
3. Phone: For immediate assistance or to talk to a real person, you can call our customer support hotline at (XXX) XXX-XXXX during our business hours. Our friendly representatives will be thrilled to help you with whatever you need.
<p></p>
4. Social Media: Stay connected with us through our vibrant social media channels. Feel free to send us a message on Facebook, tweet us on Twitter, or tag us on Instagram. We love engaging with our food-loving community.
<p></p>
At UrbanEats, we take pride in not just serving delicious food but also building lasting relationships with our cherished customers. Your thoughts and feedback are invaluable to us as we continuously strive to elevate your dining experience. So, don't hesitate to get in touch with us, and we promise to make your encounter with UrbanEats as delightful as our mouthwatering dishes. We look forward to hearing from you soon!
<p></p>
Bon Appétit,

            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@urdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/logo.png"
              style={{ width: "100%", height: "auto" }}
            />
            <Image className="guy"
              src="images/guy.jpg"
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
