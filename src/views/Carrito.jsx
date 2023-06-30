import { useContext } from "react";
import { PizzasContext } from "../components/PizzaContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { moneyFormat } from '../utils/MoneyFormat';


function Carrito() {
    const navigate = useNavigate();

    const { cart, total, increment, decrement } = useContext(PizzasContext);

    return (
        <div className="carrito m-5 p-5">
            <h1 className="p-3">Detalles de la compra:</h1>
            <ul className="list-group">
            {cart.map((product, index) => (
                <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center lista-carrito">
                    <div className="d-flex flex-row">
                        <img src={product.img} alt="" className="imagen-pizza" />
                        <h4 className="p-3">{product.name[0].toUpperCase() + product.name.slice(1)}</h4>
                    </div>
                    <span className="d-flex flex-row gap-3">
                        <h4 className="text-success pt-2">{moneyFormat(product.price * product.count)}</h4>
                        <Button variant="danger" onClick={() => decrement(index)}>-</Button>
                        <h4 className="pt-2">{product.count}</h4>
                        <Button variant="primary" onClick={() => increment(index)}>+</Button>
                    </span>
                </li>
            ))}
            </ul>
            <ul>
                <li className="d-flex justify-content-end gap-3 p-4">
                    <h4>Total:</h4>
                    <h2>{moneyFormat(total)}</h2>
                </li>
            </ul>
            <center>
                <Button variant="primary" onClick={()=> navigate('/')}>Se me olvidó algo &#127968;</Button>
                <Button variant="success" className="mx-5">Pagar &#129297;</Button>
            </center>

        </div>
    );
}

export default Carrito;
