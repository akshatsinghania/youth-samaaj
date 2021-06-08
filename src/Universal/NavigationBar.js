import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavigationBar() {
  const User = useContext(UserContext)

  return (
    /*
    <Navbar collapseOnSelect bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>
        <img
          alt=''
          src='/logo.ico'
          width='50'
          height='50'
          className='d-inline-block align-top'
        />
        youthसमाज
      </Navbar.Brand>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto' />
        <Nav>
          <Nav.Link href='/'>Posts</Nav.Link>
          <Nav.Link href='/discussion'>Discussion</Nav.Link>
          <Nav.Link href='/news'>News</Nav.Link>
          <Nav.Link href='/podcast'>Podcast</Nav.Link>
          {User.User.logged ? null : <Nav.Link href='/auth/'>Login</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   */
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>
        <img
          alt=''
          src='/logo.ico'
          width='50'
          height='50'
          className='d-inline-block align-top'
        />
        youthसमाज
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'></Nav>
        <Nav>
          <Nav.Link href='/'>Posts</Nav.Link>
          <Nav.Link href='/discussion'>Discussion</Nav.Link>
          <Nav.Link href='/news'>News</Nav.Link>
          <Nav.Link href='/podcast'>Podcast</Nav.Link>
          {User.User.logged ? null : <Nav.Link href='/auth/'>Login</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
