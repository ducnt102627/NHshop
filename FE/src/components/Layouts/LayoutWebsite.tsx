import React from 'react'
import { Footer, Header } from '..'
import { Outlet } from 'react-router-dom'

const LayoutWebsite = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutWebsite