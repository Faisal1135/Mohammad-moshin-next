import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import styles from "./Appbar.module.css";
import { motion } from "framer-motion";

const AppBar = () => {
  return (
    <motion.div
      animate={{
        y: "0",
        opacity: 1,
        transition: { duration: 1 },
      }}
      initial={{ y: "100vh", opacity: 0 }}
    >
      <Navbar
        bg="dark"
        expand="md"
        variant="dark"
        className={`${styles.navBack} `}
      >
        <Container fluid>
          <Navbar.Brand className="text-white ms-4 ">
            <motion.div> Mohammad Moshin PPM</motion.div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <Nav.Item>
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
