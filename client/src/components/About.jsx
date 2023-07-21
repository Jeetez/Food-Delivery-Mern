import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who We Are</h1>
        <p>
        At UrbanEats, we are passionate food enthusiasts driven by the belief that great food brings people together. We are a dynamic and innovative company dedicated to providing exceptional culinary experiences and delighting taste buds all around. Our mission is to redefine the way you experience food, making it more convenient, exciting, and enjoyable.
        </p>
        <h1>Our Mission:</h1>
        <Row>
          <Col md={6}>
            <p>
            1.Exceptional Dining Experience: We are committed to crafting mouthwatering dishes that tantalize your taste buds and leave you craving more. From carefully sourced ingredients to skilled chefs, every detail of our culinary journey is aimed at creating an exceptional dining experience.
<p></p>
            2.Convenience and Accessibility: We understand the demands of modern life, and that's why we make it easy for you to savor our food at your convenience. With seamless online ordering, efficient delivery services, and multiple pick-up options, we aim to fit into your busy schedule.
            </p>
          </Col>
          <Col md={6}>
            <p>
           3. Community and Connection: Food has the power to bring people together, and we cherish the sense of community it fosters. Whether it's a family gathering, a friendly get-together, or a corporate event, our food serves as a centerpiece for building connections and creating cherished memories.
<p></p>
            4. Innovation and Sustainability: We embrace innovation to continuously improve and expand our offerings. At the same time, we are committed to sustainable practices, minimizing our environmental footprint, and supporting local producers whenever possible.
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Meet Our Chef</h1>
          <Col md={10}>
          At UrbanEats, we take immense pride in our culinary creations, and behind every delectable dish is our talented and passionate Chef extraordinaire. Allow us to introduce you to the culinary genius who brings innovation, artistry, and a love for flavors to your plate.
<p></p>
Name: Chef Olivia Ramirez
<p></p>
Background and Expertise:
<p></p>
Chef Olivia Ramirez's culinary journey began at a young age when she would experiment with ingredients in her family's kitchen. Her love for cooking soon evolved into a lifelong passion, inspiring her to pursue a formal education in culinary arts. After graduating from a prestigious culinary institute, Chef Olivia embarked on a quest to master the art of gastronomy.
<p></p>
Her culinary adventures have taken her to various corners of the world, where she has had the privilege of working with renowned chefs and learning from diverse culinary traditions. Chef Olivia's insatiable curiosity has fueled her creativity, resulting in a unique fusion of flavors that reflects her multicultural experiences.
          </Col>
         
          
        </Row>
      </Container>
    </>
  );
};

export default About;
