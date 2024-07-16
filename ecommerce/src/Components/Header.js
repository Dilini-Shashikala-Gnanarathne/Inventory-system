import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import Searchbar from './Searchbar';

export default function Navigationbar() {
  return (
    <div className='navigationbar'>
        <Navbar bg="white" data-bs-theme="white">
        <Container>
          <Navbar.Brand href="/">Sworld</Navbar.Brand>
          <Searchbar/>
          <Nav className="me-auto">
            <Nav.Link href="New">Home</Nav.Link>
            <Nav.Link href="Men">Product</Nav.Link>
            <Nav.Link href="Women">Details</Nav.Link>
            <Nav.Link href="Accessories">Account</Nav.Link>
            <Nav.Link href="Outlet">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}
