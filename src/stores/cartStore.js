import { makeAutoObservable } from "mobx";

import { useObserver } from "mobx-react-lite";

class CartStore {
	items = [];
	length = 0;

	constructor() {
		makeAutoObservable(this);
	}

	// Method to add a product to the cart.
	addToCart(product) {
		this.items.push(product);
		this.length = this.items.length;
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartStore();
