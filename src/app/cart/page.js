"use client";

import React, { useState } from "react";
import { Modal, Form, Input, Button, Card } from "antd";
import CartStore from "../../stores/cartStore";
import Header from "@/components/Header";
import Link from "next/link";
import Meta from "antd/es/card/Meta";

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
			{CartStore.items.length > 0 &&
				<div className="cart block">
					<h1 className="text-2xl m-8 w-full">Your Cart</h1>
				</div>
			}
			<div className="cart w-auto flex flex-wrap items-center justify-center gap-10">

				{CartStore.items.length < 1 ?
					<div className="flex m-12 flex-col gap-20 justify-center items-center">
						<h1 className="text-2xl">No data - Your cart is Empty !</h1>
						<Link href={'/'} ><Button className="text-white mb-[61.5vh]">Add now</Button></Link>
					</div>
					:
					<>
						{
							CartStore.items.map((item, i) => (
								<div key={i} className="flex flex-col gap-20 justify-center items-center">
									<div className="card">
										<Card
											hoverable
											style={{
												width: 300,
											}}
											title={item.name}
											cover={
												// eslint-disable-next-line @next/next/no-img-element
												<img
													src={`${item.image}`}
													alt={item.name}
													width={300}
													height={300}
												/>
											}
										>
											<p>Price: ₹{item.price}</p>
											<p>{item.description}</p>
										</Card>
									</div>
								</div>
							))}
					</>
				}
				<div className="btn w-full ">
					{CartStore.items.length > 0 &&
						<Button onClick={showModal} className="w-[50%] block mx-auto text-white mb-[30vh]">Checkout</Button>
					}
				</div>

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
			</div >
		</>
	);
}
