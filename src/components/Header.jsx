import { Badge } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CartStore from "../stores/cartStore";
import { useObserver } from "mobx-react-lite";

const Header = () => {
    const [itemsLength, setItemsLength] = useState(CartStore.length);

    useEffect(() => {
        setItemsLength(CartStore.length)
        console.log(itemsLength);
    }, [itemsLength])

    return useObserver(() => (
        <div className="header w-full flex gap-4 justify-between items-center text-xl shadow-xl bg-cyan-900 h-12 rounded-md ">
            <div className="logo mx-6 flex mt-1">
                <Link href='/' className='hover:text-yellow-200 duration-100 '>
                    <img src='/iFerry.png' alt="logo" className='h-10' />
                </Link>
            </div>
            <div className='mx-6 flex gap-5'>
                <Link href='/' className='hover:text-yellow-200 duration-100'>
                    <span>Home</span>
                </Link>
                {CartStore.bookedItemsLength > 0 &&
                    <Link href='/booked' className='hover:text-yellow-200 duration-100'>
                        <span>My Bookings</span>
                    </Link>
                }

                <Link href='/cart' className='hover:text-yellow-200 duration-100'>
                    <span className='mr-1'>Cart</span>
                    {
                        itemsLength > 0 &&
                        <Badge count={itemsLength} style={{ backgroundColor: '#52c41a' }} />
                    }
                </Link>
            </div>
        </div>

    ))
}

export default Header