import { Form, Input } from "antd";
import React from "react";
import { useObserver } from "mobx-react-lite";

const CustomFormItem = ({ item, setPassengerNames, passengerNames }) => {
	return (
		<Form.Item name={`${item}`} label={`P${item + 1} Name`} key={item} required>
			<Input
				status='warning'
				type='text'
				value={passengerNames[item] || ""}
				onChange={(e) => {
					const updatedPassengerNames = [...passengerNames];
					updatedPassengerNames[item] = e.target.value + " ";
					setPassengerNames(updatedPassengerNames);
				}}
			/>
		</Form.Item>
	);
};

export default CustomFormItem;
