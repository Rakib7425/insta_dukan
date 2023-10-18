import cartStore from '@/stores/cartStore'
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useState } from 'react'

const MainContent = ({ products }) => {



    return (
        <div className='flex-col flex-wrap justify-between items-center gap-4 text-center'>
            <h1 className='text-2xl m-10'>Ferry Services</h1>
            <div className='flex flex-col flex-wrap justify-between items-center gap-4 md:flex-row text-center'>
                {
                    products &&
                    products.map((product) => (
                        <div className='max-w-[90vw] flex' key={product.id} title={product.name}>
                            <Card
                                hoverable
                                style={{
                                    width: 300,
                                }}
                                cover={
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={`${product.image}`}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                    />
                                }
                            >
                                {/* <h5 className='text-lg'>{product.name}</h5> */}
                                <Meta title={product.name} />
                                <p>Price: ₹{product.price}</p>
                                <Button onClick={() => cartStore.addToCart(product)} className='border border-blue-500 my-2 hover:bg-blue-100'>
                                    Add to Cart
                                </Button>
                                <p>{product.description}</p>
                            </Card>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default MainContent