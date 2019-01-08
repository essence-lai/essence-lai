import React from 'react';
import { Grid,Image,Button,NavItem, Nav, Row, Col } from 'react-bootstrap';
import './styles.css'
import Navbar from '../navBar/index';
import Transition from 'react-transition-group/Transition';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faCocktail, faCode} from '@fortawesome/free-solid-svg-icons'

library.add(faGlobeAmericas, faCocktail,faCode);

const duration = 1000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};




export default class Home extends React.Component{
    constructor(){
        super();
        this.renderName = this.renderName.bind(this);
        this.renderAboutMe = this.renderAboutMe.bind(this);
        this.renderProjects = this.renderProjects.bind(this);
        this.renderContactMe = this.renderContactMe.bind(this);
        this.state = {
            name: false,
            aboutMe: false,
            projects: false,
            contactMe: false
        };
    }



    renderName(){
        if(!this.state.name) {
            if(window.pageYOffset < 350){
                this.setState({name: true});
            }else{
                setTimeout(this.renderName,10);
            }
        }else{
            if(window.pageYOffset >= 350){
                this.setState({name: false});
            }else{
                setTimeout(this.renderName, 10);
            }
        }

    }


    renderAboutMe(){
        if(!this.state.aboutMe){
            if((window.pageYOffset >= 350) && (window.pageYOffset <= 2000)){
                this.setState({aboutMe: true});
            }else{
                setTimeout(this.renderAboutMe, 10);
            }
        }else{
            if((window.pageYOffset < 350) || (window.pageYOffset > 2000) ){
                this.setState({aboutMe: false});
            }else{
                setTimeout(this.renderAboutMe, 10);
            }
        }
    }

    renderProjects(){
        if(!this.state.projects){
            if(window.pageYOffset >= 1600){
                this.setState({projects: true});
            }else{
                setTimeout(this.renderProjects, 10);
            }
        }else{
            if(window.pageYOffset < 1600 ){
                this.setState({projects: false});
            }else{
                setTimeout(this.renderProjects, 10);
            }
        }
    }

    renderContactMe(){
        if(!this.state.contactMe){
            if(window.pageYOffset >= 1900){
                this.setState({contactMe: true});
            }else{
                setTimeout(this.renderContactMe, 10);
            }
        }else{
            if(window.pageYOffset < 1900){
                this.setState({contactMe: false});
            }else{
                setTimeout(this.renderContactMe, 10);
            }
        }
    }

    render() {
        return (
            <Grid className="default">
                <Grid className="home">
                    <Navbar route="home"/>
                </Grid>
                <Grid className="main">
                    {this.renderName()}
                    <Transition in={this.state.name} timeout={200}>
                        {(state) => (
                            <h1 style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                className="main-name">Essence Lai</h1>
                        )}
                    </Transition>
                    <Transition in={this.state.name} timeout={700}>
                        {(state) => (
                            <h4 style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                className="main-description">Aspiring Software Engineer, Mixologist,  Adventurous Traveller</h4>
                        )}
                    </Transition>
                    <Transition in={this.state.name} timeout={1200}>
                        {(state) => (
                            <h4 style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                className="main-description-sub">Learning Frameworks one cocktail at a time!</h4>
                        )}
                    </Transition>

                </Grid>
                <Grid className="about-me">
                    {this.renderAboutMe()}
                    <Transition in={this.state.aboutMe} timeout={100}>
                        {(state) => (
                            <h1 style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                className="about-me-description">
                                Hi! I'm Essence (prounounced "Ee-sense),
                                a junior developer with 2 years internship experience.
                                Currently attending my last year undergraduate studies
                                at UBC in Computer Science and Mathematics </h1>
                        )}
                    </Transition>
                    <Transition in={this.state.aboutMe} timeout={800}>
                        {(state) => (
                            <Grid  style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                   className="fa-grid">
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <FontAwesomeIcon icon="globe-americas" className="fa-icon fa-6x"/>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <FontAwesomeIcon icon="code" className="fa-icon fa-6x"/>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <FontAwesomeIcon icon="cocktail" className="fa-icon fa-6x"/>
                                    </Col>
                                </Row>
                            </Grid>
                            )}
                    </Transition>
                    <Transition in={this.state.aboutMe} timeout={1200}>
                        {(state) => (
                            <Grid  style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}className="skill-grid">
                                <Transition in={this.state.aboutMe} timeout={1400}>
                                    {(state) => (
                                        <Row style={{
                                            ...defaultStyle,
                                            ...transitionStyles[state]
                                        }}
                                             className="show-grid">
                                            <Col xs={4} md={4}>
                                                <h1 className="skills-title">
                                                    Traveller
                                                </h1>
                                                <h1 className="skills-description">
                                                    I plan to travel the world, experience different cultures and lifestyles. I value the problems people face, which encourages me to code solutions!.
                                                </h1>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h1 className="skills-title">
                                                    Software Developer
                                                </h1>
                                                <h1 className="skills-description">
                                                    I enjoy solving problems that people face everyday, cracking down new frameworks and design patterns that improve optimization is what I value.
                                                </h1>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h1 className="skills-title">
                                                    Mixologist
                                                </h1>
                                                <h1 className="skills-description">
                                                    I value the complexity of spirits and enjoy concocting a good drink that will spark any conversation.
                                                </h1>
                                            </Col>
                                        </Row>
                                    )}
                                </Transition>
                                <Transition in={this.state.aboutMe} timeout={1600}>
                                    {(state) => (
                                        <Row
                                            style={{
                                                ...defaultStyle,
                                                ...transitionStyles[state]
                                            }}
                                            className="show-grid">
                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    Next Stop:
                                                </h4>
                                                <h5 className="header-description">
                                                    Japan
                                                </h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    Languages I speak:
                                                </h4>
                                                <h5 className="header-description">
                                                    Java, JavaScript, TypeScript, C++, Html ,Css
                                                </h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    My go to Cocktail:
                                                </h4>
                                                <h5 className="header-description">
                                                    Old Fashioned
                                                </h5>
                                            </Col>
                                        </Row>
                                    )}
                                </Transition>
                                <Transition in={this.state.aboutMe} timeout={1800}>
                                    {(state) => (
                                        <Row  style={{
                                            ...defaultStyle,
                                            ...transitionStyles[state]
                                        }}
                                              className="show-grid">

                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    Places I have been to:
                                                </h4>
                                                <h5 className="header-description">
                                                    Thailand<br/>
                                                    Vietnamn<br/>
                                                    Cambodia<br/>
                                                    Guang Zhou<br/>
                                                    Hong Kong<br/>
                                                    Bei Jing<br/>
                                                    Banff<br/>
                                                    Vancouver<br/>
                                                    San Francisco<br/>
                                                    Los Angeles<br/>
                                                    Seattle<br/>
                                                    Fiji<br/>
                                                </h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    Dev Tools:
                                                </h4>
                                                <h5 className="header-description">
                                                    React<br/>
                                                    React-Native<br/>
                                                    SQL<br/>
                                                    Firebase<br/>
                                                    Github<br/>
                                                    Bitbucket<br/>
                                                    Trello<br/>
                                                    Asana<br/>
                                                    Meteor<br/>
                                                    Eslint<br/>
                                                    MatLab<br/>
                                                    Source tree<br/>
                                                </h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    My Favourites:
                                                </h4>
                                                <h5 className="header-description">
                                                    Amaretto Sour<br/>
                                                    Bitter Summer<br/>
                                                    Penicillin<br/>
                                                    Orange Whip<br/>
                                                    Manhattan<br/>
                                                    Hemingway daiquiri<br/>
                                                    Negroni<br/>
                                                    Mint Julip<br/>
                                                    Cosmopolitan<br/>
                                                    Clover Club<br/>
                                                </h5>
                                            </Col>
                                        </Row>
                                    )}
                                </Transition>
                            </Grid>            )}
                    </Transition>
                </Grid>

                <Grid className="projects">
                    {this.renderProjects()}
                    <Row>
                        <Transition in={this.state.projects} timeout={100}>
                            {(state) => (
                                <h1 style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                                    className="projects-header">Check out some of my most recent projects</h1>
                            )}
                        </Transition>
                    </Row>
                    <Row className="projects-row show-grid">
                        <Transition in={this.state.projects} timeout={800}>
                            {(state) => (
                                <Col style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                                     xs={12} md={4}>
                                    <a className="button-icon-projects" href="https://github.com/essence-lai/panpacificgem">Pan Pacific Gem</a>
                                </Col>
                            )}
                        </Transition>
                        <Transition in={this.state.projects} timeout={1000}>
                            {(state) => (
                                <Col style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                                     xs={12} md={4}>
                                    <a className="button-icon-projects" href="https://github.com/essence-lai/GFlip">GFlip</a>
                                </Col>
                            )}
                        </Transition>
                        <Transition in={this.state.projects} timeout={1200}>
                            {(state) => (
                                <Col style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                                     xs={12} md={4}>
                                    <a className="button-icon-projects" href="https://github.com/essence-lai/CPSC-304-Dempster-Cartel-Dataase">Dempster Cartel</a>
                                </Col>
                            )}
                        </Transition>
                    </Row>
                </Grid>

                <Grid className="contact-me">
                    {this.renderContactMe()}
                    <Transition in={this.state.contactMe} timeout={200}>
                        {(state) => (
                            <Image style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                   className="contact-logo" src="../assets/logo-flip.png"/>
                        )}
                    </Transition>
                    <Transition in={this.state.contactMe} timeout={400}>
                        {(state) => (
                            <h1
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                                className="contact-header">You can also find me on:</h1>
                        )}
                    </Transition>
                    <Row className="find-me show-grid">
                        <Transition in={this.state.contactMe} timeout={1400}>
                            {(state) => (
                                <Col  style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                                      className="column-small" xs={6} md={3}>
                                    <a className="button-icon" href="https://github.com/essence-lai"><i className="fab fa-github fa-2x fa-icon-button"></i></a>
                                </Col>
                            )}
                        </Transition>
                        <Transition in={this.state.contactMe} timeout={1200}>
                            {(state) => (
                                <Col
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                    className="column-small" xs={6} md={3}>
                                    <a className="button-icon" href="https://www.linkedin.com/in/essence-lai-978b50a8/"><i className="fab fa-linkedin fa-2x fa-icon-button"></i></a>
                                </Col>
                            )}
                        </Transition>
                        <Transition in={this.state.contactMe} timeout={1000}>
                            {(state) => (
                                <Col
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                    className="column-small" xs={6} md={3}>
                                    <a className="button-icon" href="https://www.facebook.com/herbal1"><i className="fab fa-facebook-square fa-2x fa-icon-button"></i></a>
                                </Col>
                            )}
                        </Transition>
                        <Transition in={this.state.contactMe} timeout={800}>
                            {(state) => (
                                <Col
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                    className="column-small"  xs={6} md={3}>
                                    <a className="button-icon" href="https://www.instagram.com/elaimanning/"> <i className="fab fa-instagram fa-2x fa-icon-button"></i></a>
                                </Col>
                            )}
                        </Transition>
                    </Row>
                </Grid>
            </Grid>

        )
    }
}