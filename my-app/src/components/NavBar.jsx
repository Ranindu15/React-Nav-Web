import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color : #222;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavBar = () => (

      <Styles>
        <Navbar expand = 'lg'>
          <Navbar.Brand href="/"> Coding Drugs </Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>

                <Nav className="ml-auto">
                  <Nav.Item><Nav.Link href="./">Home </Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="./About">About </Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="./Contact">Contact </Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="./Gallery">Gallery </Nav.Link></Nav.Item>
                </Nav>

        </Navbar>
      </Styles>
    )

export default NavBar;