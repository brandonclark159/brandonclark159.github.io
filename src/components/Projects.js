import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pacman from "../assets/img/pacman.png";
import todoList from "../assets/img/todolist.png";
import virtualKeyboard from "../assets/img/virtualkeyboard.png";
import dallClone from "../assets/img/dalle-clone.png";
import recipeGenerator from "../assets/img/recipe-generator.png";
import weatherApp from "../assets/img/weather-app.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
        title: "Pac-Man Clone",
        description: "A basic clone of Pac-Man using HTML, CSS, and JavaScript.",
        imgUrl: pacman,
        },
        {
        title: "To-Do List",
        description: "To-Do List using HTML, CSS, and JavaScript with full CRUD capabilities.",
        imgUrl: todoList,
        },
        {
        title: "Virtual Keyboard",
        description: "A fully-functioning virtual keyboard! Simple but I quite like the color scheme here!",
        imgUrl: virtualKeyboard,
        },
        {
        title: "Dall-E 2.0 Clone",
        description: "Fully functional clone of Dall-E 2.0 built with MERN stack.",
        imgUrl: dallClone,
        },
        {
        title: "Random Recipe Generator",
        description: "Using tried and true recipes that my wife and I love, this makes meal planning SO much easier by giving us the name of the recipe as well as the ingredients and measurements!",
        imgUrl: recipeGenerator,
        },
        {
        title: "Simple Weather app",
        description: "This is a simple weather app built with HTML, CSS, and JavaScript that utilizes the OpenWeatherMap API.",
        imgUrl: weatherApp,
        },
    ];

    return (
        <section className="project" id="projects">
        <Container>
            <Row>
            <Col size={12}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Projects</h2>
                        <p>These are various projects I've worked on of varying degrees of difficulty! This website is TECHNICALLY one of them, but these are other things I've done such as a Pac-Man clone, a virtual keyboard, a to-do list, and more! If you want to see the code for all of these, please feel free to visit by GitHub which is linked at the top and bottom of this page!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    projects.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>More projects to come!</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>More projects to come!</p>
                            </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
    }