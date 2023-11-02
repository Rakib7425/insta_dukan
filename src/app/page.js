"use client";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Loader from "@/components/Loader";
import MainContent from "./MainContent";

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([]);

	// Call the Items from API
	useEffect(() => {
		async function fetchProducts() {
			setIsLoading(true);
			try {
				// const res = await fetch("https://ferry-api.onrender.com/products"); // API hosted in Render
				// const res = await fetch("https://rakib7425.github.io/ferry_api_insta_dukan/"); // API hosted in gitHub

				const res = await fetch(
					`https://rakib7425.github.io/ferry_api_insta_dukan/ferry-data.json`
				); // API hosted in gitHub
				const data = await res.json();
				setProducts(data);

				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.error(error);
			}
		}

		fetchProducts();
		// ? TODO Check if items already available

		//
	}, []);

	if (isLoading) {
		return (
			<>
				<Header />
				<Loader />
			</>
		);
	}

	return (
		<>
			<Header />
			<MainContent products={products} />
		</>
	);
}
