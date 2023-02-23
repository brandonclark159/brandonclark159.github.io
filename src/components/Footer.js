import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-1.svg';


export const Footer = () => { 
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/brandon-clark-82b166154/'><img src={navIcon1} alt=''/></a>
                            <a href='https://github.com/brandonclark159'><img src={navIcon2} alt=''/></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved Brandon Clark</p>
                        <p>vaporwave by Muhammad Atiq from <a href="https://thenounproject.com/browse/icons/term/vaporwave/" target="_blank" title="vaporwave Icons">Noun Project</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};
