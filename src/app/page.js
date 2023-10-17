"use client";

import { Card, Button } from "antd";
import Link from "next/link";
import { useObserver } from "mobx-react-lite";
import CartStore from "../stores/cartStore";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const res = await fetch("https://ferry-api.onrender.com/products");
			const data = await res.json();
			setProducts(data);
			// console.log(data);
		}
		fetchProducts();
	}, []);

	return (
		<>
			<h1>Ferry Products</h1>
			<div className='product-list flex'>
				<div className='max-w-[20vh]'>
					{products.map((product) => (
						<Card key={product.id} title={product.name} className='max-w-[20vh]'>
							<img
								src={`${product.image}`}
								alt={product.name}
								width={300}
								height={300}
							/>

							<p>{product.description}</p>
							<p>Price: ${product.price}</p>
							<Button onClick={() => CartStore.addToCart(product)}>
								Add to Cart
							</Button>
						</Card>
					))}
				</div>
			</div>

			<Link href='/cart'>
				<span>View Cart</span>
			</Link>
		</>
	);
}
