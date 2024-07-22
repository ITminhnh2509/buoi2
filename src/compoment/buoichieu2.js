import React from "react";
import { useState } from "react";
import "aos/dist/aos.css";
import "./hook5.css";
import img1 from "../img/logo192.png";
import { useRef } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
export default function App() {
  const [flag, setFlag] = useState(true);
  const sidebarRef = useRef();
  const [count, setCount] = useState(10);
  function handle_count() {
    setCount(count - 1);
    setCount((abc) => abc - 1);
  }
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <Container>
        <div className={flag ? "hook5 active" : "hook5"}>
          <img src={img1} alt="logo" />
          <h3>Count: {count}</h3>
          <h1>Hook 5</h1>
          <p>Flag: {flag ? "True" : "False"}</p>
          <div className="meo" ref={sidebarRef}></div>
          <Button
            onClick={() => {
              setFlag(!flag);
              sidebarRef.current.classList.toggle("active");
              handle_count();
            }}
          >
            Change flag
          </Button>
        </div>
        <Row xs="4" className="grid4column">
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Row>
      </Container>
      <Container className="pt-5">
        <Row>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
          <Col lg={3} md={4} sm={6} className="border p-5">
            Row
          </Col>
        </Row>
      </Container>
      <Container className="pt-5">
        <Button onClick={toggle}>Open Modal</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
      <Container className="pt-5">
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink className="active" onClick={function noRefCheck() {}}>
                Tab1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="" onClick={function noRefCheck() {}}>
                More Tabs
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab="1">
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </>
  );
}
