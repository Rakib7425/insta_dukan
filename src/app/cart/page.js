"use client";

import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import CartStore from "../../stores/cartStore";
import Header from "@/components/Header";

export default function Cart() {
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(!open);
	};

	const onFinish = (values) => {
		// Handle passenger information and checkout here
	};

	return (
		<>
			<div className='header w-full'>
				<Header />
			</div>
			<div className="cart h-screen">
				<h1>Shopping Cart</h1>
				{CartStore.items.map((item, i) => (
					<div key={item.id + i}>
						<h3>{item.name}</h3>
						<p>Price: ₹{item.price}</p>
					</div>
				))}
				<Button onClick={showModal}>Checkout</Button>
				<Modal title='Passenger Information' open={open} onOk={onFinish} onCancel={showModal}>
					<Form name='passenger_info' onFinish={onFinish}>
						<Form.Item name='name' label='Name'>
							<Input />
						</Form.Item>
						<Form.Item name='email' label='Email'>
							<Input />
						</Form.Item>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form>
				</Modal>
			</div>
		</>
	);
}
