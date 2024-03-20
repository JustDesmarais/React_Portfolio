import profilePic from "../assets/images/profilePic.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function About() {
    

    return (
      <Container>
        <Row>
          <h1>About Me</h1>
        </Row>
        <Row>
          <Col>
            <Image style={{height: "200px"}} src={profilePic} alt="author image" roundedCircle />
          </Col>
          <Col>
            <p>
              An ambitious and collaborative Full-Stack Developer with a passion for creating unique and intuitive applications that engage and delight users.
            </p>
          </Col>
        </Row>
      </Container>
    );
  };

  export default About;

