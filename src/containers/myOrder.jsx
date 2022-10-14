import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
const flechita = require('icons/flechita.svg');
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const {state} = useContext(AppContext);

	const totalPrice = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<div className='return-container'>
					<img src={flechita} alt="arrow" />
				</div>
				<p id="title-My-Order">Mi orden</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product) => {
					 return <OrderItem product={product} key={`orderItem-${product.id}`}/>;
				})}
                
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalPrice()}</p>
				</div>
				<button className="primary-button">
					Pagar
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;