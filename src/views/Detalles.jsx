import React, { useContext } from 'react'
import { PizzasContext } from '../components/PizzaContext'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { moneyFormat } from '../utils/MoneyFormat';

const Detalles = () => {
    const { addToCart, pizzas } = useContext(PizzasContext);
    const params = useParams();
    const navigate = useNavigate();
    const pizza = pizzas.find(pizza => pizza.id === params.id);

    return (
        <div className="container p-4 detail">
            <div className="row">
                <div className="col">
                    <img src={pizza.img} alt="" className='img-descripcion' />
                </div>
                <div className="col-8">
                    <h1>{pizza.name[0].toUpperCase() + pizza.name.slice(1)}</h1>
                    <hr></hr>
                    <h4>{pizza.desc}</h4>
                    <hr></hr>
                    <ul>
                        {pizza.ingredients.map((ingredient) => (<li key={ingredient} className='list-unstyled fs-4 fst-italic'>&#127829; {ingredient} </li>))}
                    </ul>
                    <hr></hr>
                    <h3 className='text-end p-4'>Precio: {moneyFormat(pizza.price)}</h3>
                    <div className="buttons">
                        <Button variant="primary" onClick={() => navigate('/')}>Volver &#127968;</Button>
                        <Button variant="success" onClick={() => navigate('/carrito')}>Ir al carrito &#128722;</Button>
                        <Button variant="danger" onClick={() => addToCart(pizza)}>Agregar &#128722;</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalles