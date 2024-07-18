import React from 'react'
import { Sv1, Sv2, Sv3, Sv4 } from './icons'
const Services = () => {
    return (
        <div>
            <section className="services">
                <div className="container-fluid">
                    <div className="service-list">
                        <div className="service-item">
                            <img src={Sv1} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">High Quality</h4>
                                <p className="service__description">crafted from top materials</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img src={Sv2} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">Warranty Protection</h4>
                                <p className="service__description">Over 2 years</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img src={Sv3} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">Free Shipping</h4>
                                <p className="service__description">Order over 150 $</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img src={Sv4} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">24 / 7 Support</h4>
                                <p className="service__description">Dedicated support</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                    </div>
                </div>
            </section>
            {/*End .services*/}
        </div>
    )
}

export default Services