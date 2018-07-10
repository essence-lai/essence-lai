import React from 'react';
import { Grid,Image,Button,NavItem, Nav } from 'react-bootstrap';
import './styles.css'
import Navbar from '../navBar/index';

export default class Contact extends React.Component{
    render() {
        return (
            <Grid className="default">
                <Grid className="home">
                    <Navbar route="contact"/>
                    <a>
                        CONTACT ME
                    </a>

                </Grid>

            </Grid>

        )
    }
}