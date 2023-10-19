"use client";

import React, { useEffect, useState } from "react";
// import { useObserver } from "mobx-react-lite";
import Header from "@/components/Header";

import CartStore from "../../stores/cartStore";
import { Button, Result } from "antd";
import Link from "next/link";
import BookedCard from "@/components/BookedCard";

const BookedData = () => {
	const [items, setItems] = useState(CartStore.bookedItems);
	const loading = false;
	const [passengerName, setPassengerName] = useState(
		CartStore.bookedItems[0]?.passengerNames || ["Rakib", "Hello"]
	);

	useEffect(() => {
		setItems(CartStore.bookedItems);

		const makePassengerNames = () => {
			let tempNames = passengerName.map((item) => {
				return item;
			});
			setPassengerName(tempNames);
		};

		makePassengerNames();
	}, []);

	return (
		<section className='min-h-screen w-full '>
			<Header />
			{/* Booked data section */}
			<div className='header-text flex gap-20 flex-col items-center justify-center'>
				<h1 className={`${items.length < 1 ? "mt-12" : "my-12"} text-2xl text-center`}>
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

			<div className='flex mx-auto gap-4 w-[90%] flex-wrap h-screen items-start justify-center'>
				{!!items &&
					items.map((item, i) => {
						return (
							<div className='cards flex gap-4 flex-wrap' key={item + i}>
								{!!item.items &&
									item.items.map((products, index) => (
										<section key={index}>
											<BookedCard
												i={i}
												item={item}
												products={products}
												loading={loading}
												passengerName={passengerName}
											/>
										</section>
									))}
							</div>
						);
					})}
			</div>
		</section>
	);
};

export default BookedData;
