import React from 'react'
import { ProductList } from '.'

const News = () => {
    return (
        <>
            <section className="news">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-heading__title">New</h2>
                    </div>
                    <div className="section-body">
                        <ProductList featured={true} />
                    </div>
                </div>
            </section>
            <div className="container">
                <hr />
            </div>
        </>
    )
}

export default News