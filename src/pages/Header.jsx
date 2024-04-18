import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Registration from '../components/Registration';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  href="#home"><Link style={{textDecoration:'none',color:'black'}} to={'/'}> <img style={{width:'70px',height:'70px'}} className='img-fluid' src="https://www.creativefabrica.com/wp-content/uploads/2021/07/19/Education-School-Logo-Design-Vector-Graphics-14913737-1.jpg" alt="" /> </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link  eventKey={2} href="#memes">
              <Link  style={{textDecoration:'none',color:'black'}} to={'/details'}>Student Deatils</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
