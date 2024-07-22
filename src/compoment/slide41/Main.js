import React from 'react'
import { Button, button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import "./slide41.css";
import Listtour from './Listtour';
export default function Main() {
    return (
        <>


            <Container className="box-main pt-5">
                <div className="header-title">
                    <h3 className="h3title pb-2">Perfect destination</h3>
                    <h2 className="h2title">Trending destinations</h2>
                </div>
                <ul className="list-nav">
                    <li>
                        <button className="btn btn-name-location">New York</button>
                    </li>
                    <li>
                        <button className="btn btn-name-location">London</button>
                    </li>
                    <li>
                        <button className="btn btn-name-location">Tokyo</button>
                    </li>
                    <li>
                        <button className="btn btn-name-location btn-losangeles">
                            Los Angeles
                        </button>
                    </li>
                </ul>
                <Listtour />
            </Container>


        </>
    )
}
