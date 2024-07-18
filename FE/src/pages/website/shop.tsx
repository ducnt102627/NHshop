import { ProductList } from '@/components'
import BarShop from '@/components/barShop'
import React from 'react'
import Categories from './_components/category'

const ShopPage = () => {
    return (
        <>
            <BarShop />
            <Categories />
            <div className="container">
                <ProductList />
            </div>
        </>
    )
}

export default ShopPage