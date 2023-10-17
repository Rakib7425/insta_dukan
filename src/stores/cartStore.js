import { makeAutoObservable } from "mobx";
import React from "react";
import { useObserver } from "mobx-react-lite";

class CartStore {
	items = []; // An array to store the products added to the cart.

	constructor() {
		makeAutoObservable(this);
	}

	// A method to add a product to the cart.
	addToCart(product) {
		this.items.push(product);
	}
}

// Export an instance of the CartStore as a default export.

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartStore();
