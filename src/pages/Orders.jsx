import React from 'react';
import OrderItem from '../components/Order';
import '../styles/Orders.scss';

const Orders = () => {
	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">Mis ordenes</h1>
				<div className="Orders-content">
					<OrderItem />
				</div>
			</div>
		</div>
	);
}

export default Orders;