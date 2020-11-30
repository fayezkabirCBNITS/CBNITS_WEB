import React, { useState, useEffect } from "react";
import { Nav, NavItem, Button, NavLink, Row, Col, Container } from 'reactstrap';


import "./establishment.css";


const Establishment = props => {
    return (
        <div className="establishment">
            <Container className="themed-container" fluid={false}>
                <div className="text-center establish">
                    <h4>Established 2014 in Cbnits has been </h4>
                    <h4>offering <span  className="skycolor">world-class information technology.</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>
                
            </Container>
        </div>

    )
}

export default Establishment;
