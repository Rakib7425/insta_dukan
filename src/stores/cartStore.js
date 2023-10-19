import { makeAutoObservable } from "mobx";

class CartStore {
	initialItems = [];
	items = [];
	length = 0;
	bookedItems = [];
	bookedItemsLength = 0;

	constructor() {
		makeAutoObservable(this);
	}

	addToInitialState(products) {
		this.initialItems.push(products);
	}

	// Method to add a product to the cart.
	addToCart(product) {
		this.items.push(product);
		this.length = this.items.length;
	}

	// Method to add a product to the booked section.
	addToBooked(product) {
		this.bookedItems.push(product);
		this.bookedItemsLength++;
	}

	clearCart() {
		this.items = [];
		this.length = this.items.length;
	}
}

export default new CartStore();
