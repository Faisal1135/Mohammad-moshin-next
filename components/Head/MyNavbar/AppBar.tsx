import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Image,
} from "react-bootstrap";
import { motion, Variants } from "framer-motion";
import { staggerContainer } from "../../Header/Header";
import s from "./Appbar.module.css";

export const fromUpFade: (direction?: "up" | "down") => Variants = (
  direction: "up" | "down" = "up"
) => {
  return {
    initial: {
      y: direction === "up" ? -40 : 40,
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
};

const AppBar = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
    >
      <Navbar bg="transparent" expand="md" variant="dark">
        <Container fluid>
          <Navbar.Brand className="ms-4">
            <motion.div variants={fromUpFade()}>
              {" "}
              <span>
                <Image
                  src="/images/logo.jpg"
                  alt="logo"
                  className={`rounded-circle img-fluid w-25 ${s.logo}`}
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
                    variants={fromUpFade()}
                  >
                    Police Activity
                  </motion.div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="d-none d-sm-block">
                  <motion.div variants={fromUpFade()}>
                    Social Activity
                  </motion.div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="d-none d-sm-block">
                  <motion.div variants={fromUpFade()}>
                    Media Coverage
                  </motion.div>
                </Nav.Link>
              </Nav.Item>
              <motion.div variants={fromUpFade()}>
                <NavDropdown title="More" id="More-nav-dropdown">
                  <NavDropdown.Item>Gallarey</NavDropdown.Item>
                  <NavDropdown.Item>Achivment </NavDropdown.Item>
                  <NavDropdown.Item>Award</NavDropdown.Item>
                  <NavDropdown.Item>Reward</NavDropdown.Item>
                  <NavDropdown.Item>Special Story</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown>
              </motion.div>

              <motion.div>
                <NavDropdown
                  className="mx-2"
                  title="Sopnopuron"
                  id="Sopnopuron-nav-dropdown"
                >
                  <NavDropdown.Item>আমি অনেক বড় হবো</NavDropdown.Item>
                  <NavDropdown.Item>একটু হাসি</NavDropdown.Item>
                  <NavDropdown.Item>জীবনের সাথে জীবনের পাশে</NavDropdown.Item>
                  <NavDropdown.Item>জিতুক ভালোবাসা</NavDropdown.Item>
                  <NavDropdown.Item>দাড়াই নিজের পায়ে</NavDropdown.Item>
                  <NavDropdown.Item>এবং স্বপ্নপূরণ</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown>
              </motion.div>

              <motion.div variants={fromUpFade()}>
                <Nav.Item className="ml-auto d-none d-md-block">
                  <Button variant="warning">Sidebar</Button>
                </Nav.Item>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default AppBar;
