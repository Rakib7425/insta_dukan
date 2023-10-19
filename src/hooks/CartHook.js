"use client";

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [itemsLength, setItemsLength] = useState(0); // Initialize with 0

	return (
		<CartContext.Provider value={{ itemsLength, setItemsLength }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
