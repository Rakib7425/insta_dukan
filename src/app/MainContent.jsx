import cartStore from "@/stores/cartStore";
import { Button, Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import { toast } from "react-toastify";

const MainContent = ({ products }) => {
	/* The function addToCart adds a product to the cart and displays a success toast message.*/
	const addToCart = (product) => {
		cartStore.addToCart(product);
		toast.success(`Product added to cart!`);
	};

	return (
		<div className='flex-col mt-8 flex-wrap justify-between items-center gap-4 text-center min-h-screen h-full mb-6 px-10'>
			<h1 className='text-2xl m-8'>Ferry Services</h1>
			<div className='flex flex-col flex-wrap justify-between items-center gap-4 md:flex-row text-center'>
				{products &&
					products.map((product) => (
						<div className='max-w-[90vw] flex' key={product.id} title={product.name}>
							<Card
								hoverable
								style={{
									width: 310,
								}}
								cover={
									<Image
										src={`${product.image}`}
										alt={product.name}
										width={310}
										height={160}
										fallback='https://projectorsewing.com/wp-content/plugins/affiliatex/app/src/images/fallback.jpg'
									/>
								}
							>
								{/* <h5 className='text-lg'>{product.name}</h5> */}
								<Meta title={product.name} />
								<p className='font-semibold mt-1'>Price: ₹{product.price}</p>
								<Button
									onClick={() => addToCart(product)}
									className='border border-blue-500 my-2 hover:bg-blue-100'
								>
									Add to Cart
								</Button>
								<p>{product.description}</p>
							</Card>
						</div>
					))}
			</div>
		</div>
	);
};

export default MainContent;
