import React from "react";
import { Container } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Skills.css";
import Projects from "../projects/Projects";
import About from "../about/About";

export default function Skills() {
  return (
    <div className="dark">
      <div className="bg-black text-light p-5 skills">
        <Container>
          <div className="skill-box">
            <h2>Skills</h2>
            <p className="skills-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              tempore molestiae repudiandae exercitationem soluta saepe minus
              quisquam? Quibusdam, dolor assumenda labore similique eum
              dignissimos obcaecati, tempora libero illum eaque delectus.
            </p>

            <Carousel>
              <div className="slider">
                <div className="modals">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="65"
                    style={{ value: "65" }}
                    class="inside-circle"
                  >
                    {" "}
                  </div>
                  <h3>Web Development</h3>
                </div>
              </div>
              <div className="slider">
                <div className="modals">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="65"
                    style={{ value: "65" }}
                    class="inside-circle"
                  >
                    {" "}
                  </div>
                  <h3>Brand Identity</h3>
                </div>
              </div>
              <div className="slider">
                <div className="modals">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="65"
                    style={{ value: "65" }}
                    class="inside-circle"
                  >
                    {" "}
                  </div>
                  <h3>Logo Design</h3>
                </div>
              </div>
            </Carousel>
          </div>

            <About/>
        <div>
           
            <Projects/>
        </div>
        </Container>
      </div>
    </div>
  );
}
