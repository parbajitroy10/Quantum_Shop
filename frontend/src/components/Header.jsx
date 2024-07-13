
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
import{ FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'><FaShoppingCart/> Cart</Nav.Link>
                        <NavLink href='/login'><FaUser/> Sing In</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
};

export default Header;
