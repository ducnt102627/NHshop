import { Banner, Blog, ProductList, Services, Shop } from '@/components'
import News from '@/components/News'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <Banner />
            <News />
            <Shop />
            <Blog />
            <Services />
        </>
    )
}

export default HomePage