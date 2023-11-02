import CartStore from "@/stores/cartStore";
import { Button, Card, Image } from "antd";
import React from "react";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
	//  *Remove an item from the cart .
	const removeFromCart = (id) => {
		CartStore.removeFromCart(id);
		toast.success(`Removed item with id  ${id} !`);
	};

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
				<div className='flex justify-end items-end mt-4'>
					<Button danger onClick={() => removeFromCart(item.id)}>
						Remove 🥀
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default CartItem;
