import React from 'react'

const BarDetail = () => {
    return (
        <>
            <section className="filter-bars">
                <div className="container">
                    <div className="filter-bars-inner">
                        <div className="column-filter">
                            <div className="column-filter__item">
                                <span className="column-filter__title--detail">Home</span>
                                <span className="filter__icon"><i className="fa-solid fa-angle-right" /></span>
                            </div>
                            <div className="column-filter__item">
                                <span className="column-filter__title--detail">Shop</span>
                                <span className="filter__icon"><i className="fa-solid fa-angle-right" /></span>
                            </div>
                            <div className="column-filter__item--showing">
                                <span className="column-filter__item--text">Asgaard sofa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BarDetail