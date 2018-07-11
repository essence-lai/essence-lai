import React from 'react';
import { Grid, Form, FormGroup, FormControl, HelpBlock, Image, Button, NavItem, Nav, Row, Col } from 'react-bootstrap';
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

function  FieldGroup({ id, label, help, ...props }) {
    return(
        <FormGroup controlId={id}>
            <FormControl {...props}/>
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class Contact extends React.Component{
    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            message: '',
            header: false,
        };

        this.handleHeader = this.handleHeader.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
    }

    handleHeader(){
        this.setState({header: true});
    }


    renderHeader(){
        setTimeout(this.handleHeader, 1);

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Grid className="default">
                <Grid className="home">
                    <Navbar route="contact"/>
                    {this.renderHeader()}
                    <Transition in={this.state.header} timeout={200}>
                        {(state) => (
                            <h1 style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                className="header">
                                Want to reach out? Send me a message and I will get back to you within a day!
                            </h1>
                        )}
                    </Transition>
                    <Transition in={this.state.header} timeout={800}>
                        {(state) => (
                            <Form style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                  className='form' method="POST" action="https://formspree.io/essencelai@gmail.com">
                                <FieldGroup
                                    id="formControlsText"
                                    type="text"
                                    label="Name"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    required
                                />
                                <FieldGroup
                                    id="formControlsEmail"
                                    type="email"
                                    label="Email Address"
                                    placeholder="Email Address"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    required
                                />
                                <FormGroup controlId="formControlsTextarea">
                                    <FormControl
                                        style={{minHeight: 300}}
                                        componentClass="textarea"
                                        placeholder="Send Us a Message!"
                                        name="message"
                                        value={this.state.message}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <Button className="submit" type="submit">Send Message</Button>
                            </Form>
                        )}
                    </Transition>
                </Grid>

            </Grid>

        )
    }
}