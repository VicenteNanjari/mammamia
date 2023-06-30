import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {useContext} from 'react';
import {PizzasContext} from '../components/PizzaContext';
import { moneyFormat } from '../utils/MoneyFormat';


function MenuNav() {
    const {total} = useContext(PizzasContext);

  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand as={NavLink} to='/' className='title fs-3'>&#127829; Pizzería MammaMía</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink to='/carrito'>
            
            <i className="bi bi-cart4 ">&#128722;</i>
            <span className="badge bg-danger ms-3 fs-5">{moneyFormat(total)}</span>

          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNav;