import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col} from "reactstrap";
import "./slide41.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
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
                        <FontAwesomeIcon icon={faMapPin} className="icon-location"/>
                            {pro.category}
                        </CardSubtitle>
                        <CardTitle tag="h5" className="title-location">{pro.title}</CardTitle>
                        <CardText>
                           From <span className="price-location">${pro.price}</span> <span className="text-muted text-decoration-line-through">$250</span>
                        </CardText>
                        <CardText>
                        <FontAwesomeIcon icon={farStar} className="rate-location" />
                        <FontAwesomeIcon icon={farStar} className="rate-location" />
                        <FontAwesomeIcon icon={farStar} className="rate-location" />
                        <FontAwesomeIcon icon={farStar} className="rate-location" />
                        <FontAwesomeIcon icon={farStar} className="rate-location" />
                        </CardText>
                    </CardBody>
                </Card>
            </Col>

        </>
    );
}
