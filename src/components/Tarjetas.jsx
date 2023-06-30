import { useContext } from 'react';
import { PizzasContext } from '../components/PizzaContext';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { moneyFormat } from '../utils/MoneyFormat';

function Tarjeta() {
  const { addToCart, pizzas } = useContext(PizzasContext);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/pizza/${id}`);
  }
  
  return (
    <div className='card-container'>
      {
        pizzas.map((pizza) => (<Card style={{ width: '18rem' }} key={pizza.id}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>{pizza.name[0].toUpperCase() + pizza.name.slice(1)}</Card.Title>
            <hr></hr>
            <ul>
              {pizza.ingredients.map((ingredient) => (<li key={ingredient} className='list-unstyled'>&#127829; {ingredient} </li>))}
            </ul>
            <hr></hr>
            <center>

              <h2>
                {moneyFormat(pizza.price)}
              </h2>
            </center>
            <hr></hr>
            <div className="d-flex justify-content-between">
              <Button variant="success" onClick={() => handleNavigate(pizza.id)}>Detalles &#127829;</Button>
              <Button variant="danger" onClick={() => addToCart(pizza)}>Agregar &#128722;</Button>
            </div>
          </Card.Body>
        </Card>))
      }
    </div>
  );
}

export default Tarjeta;