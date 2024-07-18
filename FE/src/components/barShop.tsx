import React from 'react'
import { Ft1, Ft2, Ft3 } from './icons'
const BarShop = () => {
    return (
        <>
            <section className="filter-bars">
                <div className="container">
                    <div className="filter-bars-inner">
                        <div className="column-filter column-filter__action">
                            <div className="column-filter__item">
                                <img src={Ft1} alt="#" className="action-filter__icon" />
                                <span className="column-filter__title">Filter</span>
                            </div>
                            <div className="column-filter__item column-filter__item--icon">
                                <img src={Ft2} alt="#" className="column-filter__icon" />
                                <img src={Ft3} alt="#" className="column-filter__icon" />
                            </div>
                            <div className="column-filter__item--showing"><span className="column-filter__item--text">Showing 1–16 of 32
                                results</span></div>
                        </div>
                        <div className="column-filter ">
                            <div className="column-filter__item">
                                <span className="column-filter__title">Show</span>
                                <span className="column-filter__data">16</span>
                            </div>
                            <div className="column-filter__item">
                                <span className="column-filter__title">Short by</span>
                                <span className="column-filter__data--default ">Default</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BarShop