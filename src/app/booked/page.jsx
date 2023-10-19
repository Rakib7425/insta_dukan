"use client";

import React, { useEffect, useState } from "react";
// import { useObserver } from "mobx-react-lite";
import Header from "@/components/Header";

import CartStore from "../../stores/cartStore";
import { Avatar, Button, Card, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";

const BookedData = () => {
	const [items, setItems] = useState(CartStore.bookedItems);
	const loading = false;
	const [passengerName, setPassengerName] = useState(
		CartStore.bookedItems[0]?.passengerNames || ["Rakib", "Hello"]
	);

	useEffect(() => {
		setItems(CartStore.bookedItems);
		// console.log(items.passengerNames);

		const makePassengerNames = () => {
			let tempNames = passengerName.map((item) => {
				return item;
			});
			console.log(tempNames);
			setPassengerName(tempNames);
			// let names = tempNames
		};

		makePassengerNames();
	}, []);

	return (
		<section className='min-h-screen w-full '>
			<Header />
			<div className='header-text flex flex-col items-center justify-center'>
				<h1 className='my-8 text-2xl text-center'>
					{items.length < 1 ? `No Booking Found` : `Your Booked Products`}
				</h1>
				{items.length < 1 && (
					<>
						<div className='btn '>
							<Link href={"/"}>
								<Button className=''>Book Now</Button>
							</Link>
						</div>
					</>
				)}
			</div>
			<div className='flex mx-auto gap-4 w-[90%] flex-wrap h-screen items-start justify-center'>
				{items &&
					items.map((item, i) => {
						return (
							<div className='card' key={item + i}>
								<>
									<Card
										style={{
											width: 300,
											// marginTop: 16,
										}}
										loading={loading}
									>
										<Meta
											avatar={
												<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=1' />
											}
											title={passengerName[0] || null}
											description={""}
										/>

										<div className='item mt-3' key={item + i}>
											<div>No Of Passenger : {item.noOfPassenger}</div>
											<div>Date: {item.date}</div>
											<div>Email: {item.email}</div>
											{/* {item.passengerNames.split(" ")} */}
											<div>
												Passenger Names:
												{passengerName &&
													passengerName.map((nam, j) => (
														<>
															<p className='name' key={nam}>
																Passenger {j + 1}: {nam}
															</p>
														</>
													))}
											</div>
										</div>
									</Card>
								</>
							</div>
						);
					})}

				{/* <div className='card'>
					<Card
						style={{
							width: 300,
						}}
						loading={loading}
					>
						<Meta
							avatar={
								<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=1' />
							}
							title='Card title'
							description='This is the description'
						/>
						<div className='item' key={"item + i"}>
							<div>{"item.noOfPassenger"}</div>
							<div>{"item.date"}</div>
							<div>{"item.email"}</div>
							<div>{"item.passengerNames"}</div>
						</div>
					</Card>
				</div> */}
			</div>
		</section>
	);
};

export default BookedData;
