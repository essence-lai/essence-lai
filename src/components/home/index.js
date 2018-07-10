import React from 'react';
import { Grid,Image,Button,NavItem, Nav } from 'react-bootstrap';
import './styles.css'
import Navbar from '../navBar/index';

export default class Home extends React.Component{
    render() {
        return (
            <Grid className="default">
                <Grid className="home">
                    <Navbar route="home"/>
                </Grid>
                <Grid className="main">
                    <h1 className="main-name">Essence Lai</h1>
                </Grid>
                <Grid className="about-me">

                </Grid>
            </Grid>

        )
    }
}