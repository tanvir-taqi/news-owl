import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import LeftSide from '../LeftSide/LeftSide';
import './Header.css'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
 

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err))
  }


  return (
    <div className='mb-5 header'>
      <Navbar collapseOnSelect expand="lg"   >
        <Container>
          <Navbar.Brand ><Link to='/' className='brand-logo'>News Owl</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav>

              <>
                {
                  user?.uid ? <Link to='/profile' className='text-white pt-2'>{user?.displayName ? user?.displayName : user?.email} <Image roundedCircle src={user?.photoURL} style={{ height: '30px' }}></Image> </Link>
                    : <span> <Link to='/login' className='user-icon'> <FaUser></FaUser> </Link> </span>
                }


              </>
              <Nav.Link eventKey={2} >
                {
                  user?.uid ?
                    <Button onClick={handleLogOut} className='mx-lg-1' size='sm' variant="outline-light">Sign Out</Button>

                    : ''
                }
              </Nav.Link>
            </Nav>
            <Nav className='d-lg-none'>
              <LeftSide></LeftSide>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;