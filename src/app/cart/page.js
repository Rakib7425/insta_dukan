"use client";

import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { useObserver } from "mobx-react-lite";
import CartStore from "../../stores/cartStore";

export default function Cart() {
	const showModal = () => {
		// Implement your modal logic here
	};

	const onFinish = (values) => {
		// Handle passenger information and checkout here
	};

	return useObserver(() => (
		<div>
			<h1>Shopping Cart</h1>
			{CartStore.items.map((item) => (
				<div key={item.id}>
					<h3>{item.name}</h3>
					<p>Price: ${item.price}</p>
				</div>
			))}
			<Button onClick={showModal}>Checkout</Button>
			<Modal
				title='Passenger Information'
				visible={false}
				onOk={onFinish}
				onCancel={showModal}
			>
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
	));
}
