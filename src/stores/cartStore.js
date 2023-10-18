import { action, makeAutoObservable, makeObservable, observable } from "mobx";

import { useObserver } from "mobx-react-lite";

class CartStore {
	items = [];
	length = 0;
	bookedItems = [];
	bookedItemsLength = [];

	constructor() {
		makeAutoObservable(this);
	}

	// Method to add a product to the cart.
	addToCart(product) {
		this.items.push(product);
		this.length = this.items.length;
	}

	// Method to add a product to the booked section.
	addToBooked(product) {
		this.bookedItems.push(product);
		this.bookedItemsLength = this.bookedItemsLength + 1;
	}

	clearCart() {
		this.items = [];
		this.length = this.items.length;
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartStore();
