import gitIcon from '../assets/images/github-mark.svg'
import whiteGitIcon from '../assets/images/github-mark-white.svg'
import Wags from '../assets/images/wags.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Portfolio () {
    return (
        <Container>
            <Row>
                <h1>Portfolio</h1>
            </Row>
            <Row>
                <Col>
                  <Card className="text-white shadow-sm" style={{ position: 'relative' }} hover>
                    <Card.Img src={Wags} alt="wags & whiskers"/>
                    <span className='git-icon'>
                        <a href='https://github.com/micahives/Wags-and-Whiskers' target="_blank">
                            <img src={whiteGitIcon} alt="GitHub Icon" style={{ width: '100%', height: '100%' }}/>
                        </a>
                    </span>
                    <Card.ImgOverlay className='custom-card'>
                        <Card.Title>Wags and Whiskers</Card.Title>
                        <Card.Text>A wellness tracker for your pet built using React and GraphQL</Card.Text>
                        <Link to='https://wags-and-whiskers.onrender.com/' className='stretched-link' target='_blank'></Link>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>Create-Lab</Card.Title>
                      <Card.Text>Project Description</Card.Text>
                      <Link to='https://create-lab-45bca09eaf7b.herokuapp.com/' className='stretched-link' target='_blank'></Link>
                    </Card.Body>
                    <span style={{ zIndex: 100 }}>
                        <a href='https://github.com/JustDesmarais/CreateLab' target="_blank">
                            <img src={gitIcon} alt="GitHub Icon" />
                        </a>
                    </span>
                  </Card>
                </Col>
            </Row>
            <Row>
                <Col>Project 3</Col>
                <Col>Project 4</Col>
            </Row>
            <Row>
                <Col>Project 5</Col>
                <Col>Project 6</Col>
            </Row>
        </Container>
        
    )
}