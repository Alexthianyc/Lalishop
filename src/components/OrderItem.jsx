import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
const close = require('icons/icon_close.png');

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);

	return (
		<div className="OrderItem">
			<figure className="OrderItem-back">
				<img src={product.images[0]} alt={product.title}/>
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img className="OrderItem-close" src={close} alt="close" onClick={() => removeFromCart(product)}/>
		</div>
	);
}

export default OrderItem;