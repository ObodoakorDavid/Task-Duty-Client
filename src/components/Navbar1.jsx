import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import taskDutyLogo from "../assets/images/TaskDuty-Logo.png";

const Navbar1 = () => {
  return (
    <Navbar expand="lg" className="border-bottom py-3 mb-3 ">
      <Container>
        <Link
          to="/"
          className="text-black text-decoration-none fw-bold fs-3 d-flex gap-2 align-items-center"
        >
          <img src={taskDutyLogo} alt="" />
          <p className="m-0">TaskDuty</p>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-auto me-lg-0 d-flex gap-3">
            <Link
              className="text-black text-decoration-none fw-semibold"
              to="/new"
            >
              New Task
            </Link>

            <Link
              className="text-black text-decoration-none fw-semibold"
              to="/tasks"
            >
              All Tasks
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
