import React from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

import { routeConfigs } from "../constants/routeConfigs";
import { getToken, removeAll } from "../constants/token";

import logo from "../assets/icons/shiba.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    removeAll();
    window.location.href = routeConfigs.home.path;
  };

  render() {
    return (
      <Navbar className="header" bg="light" expand="lg">
        <Navbar.Brand
          href={
            getToken() ? routeConfigs.manageBucket.path : routeConfigs.home.path
          }
        >
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {!getToken() ? (
              <React.Fragment>
                <Nav.Link href={routeConfigs.login.path}>
                  <Button>Login</Button>
                </Nav.Link>
                <Nav.Link href={routeConfigs.register.path}>
                  <Button>Register</Button>
                </Nav.Link>
              </React.Fragment>
            ) : (
              <NavDropdown
                title={
                  <div>
                    <i className="fa fa-user-circle mr-2"></i>
                    My Account
                  </div>
                }
                id="dropdown-header"
              >
                <NavDropdown.Item onClick={() => this.logout()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
