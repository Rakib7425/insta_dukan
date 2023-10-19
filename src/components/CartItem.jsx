import { Card, Image } from "antd";
import React from "react";

const CartItem = ({ item }) => {
	return (
		<div className='card'>
			<Card
				hoverable
				style={{
					width: 300,
					textAlign: "center",
				}}
				title={item.name}
				cover={
					<Image
						src={`${item.image}`}
						alt={item.name}
						width={300}
						height={150}
						fallback='https://projectorsewing.com/wp-content/plugins/affiliatex/app/src/images/fallback.jpg'
					/>
				}
			>
				<p className='font-semibold'>Price: ₹{item.price}</p>
				<p>{item.description}</p>
			</Card>
		</div>
	);
};

export default CartItem;
