import { makeAutoObservable } from "mobx";

class CartStore {
	items = [];
	length = 0;
	bookedItems = [];
	bookedItemsLength = 0;

	constructor() {
		makeAutoObservable(this);
	}

	// Method to add a product to the cart.
	addToCart(product) {
		this.items.push(product);
		this.length = this.items.length;
	}

	// Method to remove a product from the cart by ID.
	removeFromCart(productId) {
		const index = this.items.findIndex((item) => item.id === productId);
		if (index !== -1) {
			this.items.splice(index, 1);
			this.length = this.items.length;
		}
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

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartStore();
