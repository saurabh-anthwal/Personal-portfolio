import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner  text-light" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1 className="mt-4 bold">
              {`Hi I'm Saurabh Anthwal`}
              <span className="wrap">Web Designer</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              optio aspernatur totam esse eos nulla officia vel cum rerum
              maiores provident cumque corrupti beatae facere, alias fugiat
              aliquam velit autem.
            </p>
            <Button className="mt-3"  size="lg" onClick={() => console.log("connect")}>
              Let's connect
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2" 
                style={{height:"30px"}}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Button>
          </Col>
          <Col>
            <img
              className="img-fluid w-60"
              src="https://i.pinimg.com/originals/a0/26/1b/a0261b885cfba5a65c675c33327acf5a.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
