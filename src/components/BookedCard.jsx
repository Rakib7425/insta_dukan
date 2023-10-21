import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const BookedCard = ({ i, item, products, loading, passengerNames }) => {
	return (
		<Card
			style={{
				width: 300,
				// marginTop: 16,
			}}
			loading={loading}
			key={products.id}
		>
			<Meta
				avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=1' />}
				title={passengerNames[0] || null}
				description={""}
			/>

			<div className='item mt-3' key={item + i}>
				<div>
					<span className='font-bold'>Ferry Name : </span>
					<span>{products.name}</span>
				</div>
				<div>No Of Passenger : {item.noOfPassenger}</div>
				<div>Date: {item.date}</div>
				<div>Email: {item.email}</div>
				{/* {item.passengerNames.split(" ")} */}
				<div>
					<span className='font-bold'>Passenger Names:-</span>
					{passengerNames &&
						passengerNames.map((nam, j) => (
							<p className='name' key={nam + j}>
								Passenger {j + 1}: {nam}
							</p>
						))}
				</div>
			</div>
		</Card>
	);
};

export default BookedCard;
