"use client";

import { Card, Button } from "antd";
import Link from "next/link";
import { useObserver } from "mobx-react-lite";
import CartStore from "../stores/cartStore";
import { useEffect, useState } from "react";

export default function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const res = await fetch("https://ferry-api.onrender.com/products");
			const data = await res.json();
			setProducts(data);
		}
		fetchProducts();
	}, []);

	return useObserver(() => (
		<div>
			<h1>Ferry Products</h1>
			<div className='product-list'>
				{products.map((product) => (
					<Card key={product.id} title={product.name}>
						<img src={`${product.image}`} alt={product.name} />
						<p>{product.description}</p>
						<p>Price: ${product.price}</p>
						<Button onClick={() => CartStore.addToCart(product)}>Add to Cart</Button>
					</Card>
				))}
			</div>
			<Link href='/cart'>
				<span>View Cart</span>
			</Link>
		</div>
	));
}
