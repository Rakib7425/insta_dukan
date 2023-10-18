"use client";

import React, { useEffect, useState } from "react";
// import { useObserver } from "mobx-react-lite";
import Header from "@/components/Header";

import CartStore from "../../stores/cartStore";

const BookedData = () => {
	const [items, setItems] = useState(CartStore.bookedItems);

	useEffect(() => {
		setItems(CartStore.bookedItems);
		// console.log(items.passengerNames);
		//
	}, []);

	return (
		<>
			<Header />
			<div className='min-h-screen w-full'>
				<h1>Booked Products</h1>
				{items &&
					items.map((item, i) => {
						return (
							<div className='item' key={item + i}>
								<div>{item.noOfPassenger}</div>
								<div>{item.date}</div>
								<div>{item.email}</div>
								<div>{item.passengerNames}</div>
							</div>
							// noOfPassenger,
							// date,
							// email,
							// passengerNames,
						);
					})}
			</div>
		</>
	);
};

export default BookedData;
