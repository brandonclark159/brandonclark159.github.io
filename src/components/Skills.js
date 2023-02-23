import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Pie from './Pie.js';

const skills = [
    {
        title: "HTML, CSS, JavaScript",
        prc: 90
    },
    {
        title: "React",
        prc: 75
    },
    {
        title: "Bootstrap",
        prc: 80
    },
    {
        title: "React Bootstrap",
        prc: 65
    },
    {
        title: "Tailwind CSS",
        prc: 70
    }
]

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx wow zoomIn">
                            <h2>
                                Skills
                            </h2>
                            <p>....but what I do have is a very particular set of skills. Skills I've acquired over a fairly short professional career.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            {
                                skills.map((item,idx) => (
                                    <div key={idx} className="item">
                                    <Pie prc={item.prc} title={item.title}/>

                                    </div>
                                ))
                            }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="color-sharp" />
        </section>
    )
    
}