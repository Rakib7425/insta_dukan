import { Card } from 'antd'
import React from 'react'

const CartItem = ({ item }) => {
    return (
        <div className="card">
            <Card
                hoverable
                style={{
                    width: 300,
                }}
                title={item.name}
                cover={
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={`${item.image}`}
                        alt={item.name}
                        width={300}
                        height={300}
                    />
                }
            >
                <p>Price: ₹{item.price}</p>
                <p>{item.description}</p>
            </Card>
        </div>
    )
}

export default CartItem