"use client";

import React, { useEffect, useState } from "react";
// import { useObserver } from "mobx-react-lite";
import Header from "@/components/Header";

import CartStore from "../../stores/cartStore";
import { Avatar, Button, Card, Result, Skeleton } from "antd";
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
			// console.log(tempNames);
			setPassengerName(tempNames);
			// let names = tempNames
		};

		makePassengerNames();
	}, []);

	return (
		<section className='min-h-screen w-full '>
			<Header />
			<div className='header-text flex gap-20 flex-col items-center justify-center'>
				<h1 className='mt-12 text-2xl text-center'>
					{items.length < 1 ? `Oh Ho! No Booking Found.` : `Your Booked Products`}
				</h1>
				{items.length < 1 && (
					<>
						<Result status='404' className='-my-[5rem]' />
						<div className='btn '>
							<Link href={"/"} className='w-[60%]'>
								<Button className='text-white w-[20vw]'>Book Now</Button>
							</Link>
						</div>
					</>
				)}
			</div>

			{items &&
				items.map((item, i) => {
					return (
						<div className='flex mx-auto gap-4 w-[90%] flex-wrap h-screen items-start justify-center'>
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
												<span className='font-bold'>Passenger Names:-</span>
												{passengerName &&
													passengerName.map((nam, j) => (
														<p className='name' key={nam + j}>
															Passenger {j + 1}: {nam}
														</p>
													))}
											</div>
										</div>
									</Card>
								</>
							</div>
						</div>
					);
				})}
		</section>
	);
};

export default BookedData;
