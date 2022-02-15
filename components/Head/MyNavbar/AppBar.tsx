import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Image,
} from "react-bootstrap";
import styles from "./Appbar.module.css";
import { motion, Variants } from "framer-motion";

export const fromUpFade: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const AppBar = () => {
  return (
    <motion.div variants={fromUpFade}>
      <Navbar bg="transparent" expand="md" variant="light">
        <Container fluid>
          <Navbar.Brand className="ms-4">
            <motion.div>
              {" "}
              <span>
                <Image
                  src="/images/logo.jpg"
                  width="90px"
                  height="50px"
                  alt="logo"
                  className="rounded-circle"
                />
              </span>
            </motion.div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <Nav.Item className="align-self-lg-start">
                <Nav.Link>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.8 }}
                    style={{ x: -1 }}
                  >
                    Home
                  </motion.div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="d-none d-sm-block">
                  <motion.div>Police Activity</motion.div>
                </Nav.Link>
              </Nav.Item>

              <NavDropdown title="Sopnopuron" id="basic-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className="ml-auto d-none d-md-block">
                {" "}
                <Button variant="warning">More</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default AppBar;
