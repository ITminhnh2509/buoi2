import React, { useRef, useState } from "react";
import { Container } from "reactstrap";
import "./slide41.css";
import Listtour from "./Listtour";
export default function Main() {
    const [flag, setFlag] = useState(true);
    const sidebarRef = useRef();
  
  return (
    <>
      <Container className="box-main pt-5">
        <div className="header-title">
          <h3 className="h3title pb-2">Perfect destination</h3>
          <h2 className="h2title">Trending destinations</h2>
        </div>
        <ul className="list-nav">
          <li>
            <button className="btn btn-name-location" >New York</button>
          </li>
          <li>
            <button className="btn btn-name-location" >London</button>
          </li>
          <li>
            <button className="btn btn-name-location" >Tokyo</button>
            
          </li>
          <li>
            <button className="btn btn-losangeles btn-name-location " >
              Los Angeles
            </button>
          </li>
        </ul>
        <Listtour />
      </Container>
    </>
  );
}
