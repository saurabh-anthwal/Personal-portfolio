import React from "react";
import Nav from "react-bootstrap/Nav";
import Contact from "../contact/Contact";
import "./Project.css";

const Projects = () => {
  return (
    <div>
      <div className="project-main">
        <h2>PROJECTS</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
          eveniet animi? Nesciunt quaerat assumenda deserunt soluta unde nihil,
          voluptatum consequatur aut? Repellendus quam aliquid at, assumenda
          optio maxime velit. Perspiciatis?
        </p>
      </div>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="link-0">ALL</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">WEBSITE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">WORKING</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        {/* image gallery */}
        <div class="row p-5">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
        {/* image gallery */}
        <Contact />
      </div>
    </div>
  );
};

export default Projects;
