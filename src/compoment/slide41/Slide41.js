import React from "react";
import { Button, button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import "./slide41.css";
export default function Slide41(props) {
    const { pro } = props
    return (
        <>

            <Col className="box-card" lg={3} md={4} sm={6}>
                <Card
                >
                    <img className="img-card" alt="Sample" src={pro.img} />
                    <CardBody>
                        <CardSubtitle className="mb-2 text-muted text-location" tag="h6">
                            {pro.category}
                        </CardSubtitle>
                        <CardTitle tag="h5">{pro.title}</CardTitle>
                        <CardText>
                            {pro.price}
                        </CardText>

                    </CardBody>
                </Card>
            </Col>

        </>
    );
}
