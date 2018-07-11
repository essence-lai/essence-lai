import React from 'react';
import { Grid,Image,Button,NavItem, Nav } from 'react-bootstrap';
import './styles.css'
import Navbar from '../navBar/index';
import Transition from 'react-transition-group/Transition';

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
        this.handleName = this.handleName.bind(this);
        this.renderName = this.renderName.bind(this);
        this.state = {
            name: false,
        };
    }

    handleName(){
        this.setState({name: true});
    }

    renderName(){
        setTimeout(this.handleName, 1);

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
                    <h1 className="main-name">Bunch of BULL SHIT</h1>
                </Grid>

                <Grid className="skills">
                    <h1 className="main-name">Bunch of  other BULL SHIT</h1>
                </Grid>

                <Grid className="projects">
                    <h1 className="main-name">BULL SHIT</h1>
                </Grid>
            </Grid>

        )
    }
}