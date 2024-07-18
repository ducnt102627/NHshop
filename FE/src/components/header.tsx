import { NavLink } from "react-router-dom"
import { Cart, Heart, Logo, Search, User } from "./icons"

const Header = () => {

    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <NavLink to="/" className="header__logo">
                            <img src={Logo} alt="#" />
                        </NavLink>
                        <div className="navbar__icons">
                            <div className="navbar__icon" />
                        </div>
                        <nav className="main-menu">
                            <form className="form-search">
                                <button className="form-search__btn"><span className="form-search__icon"><i className="fa-solid fa-magnifying-glass" /></span></button>
                                <input type="text" className="form-search__input" placeholder="Search" />
                            </form>
                            <ul className="main-menu__list">
                                <li className="main-menu__item">
                                    <NavLink to="/" className="main-menu__link">Home</NavLink>
                                </li>
                                <li className="main-menu__item">
                                    <NavLink to="/shop" className="main-menu__link">Shop</NavLink>
                                </li>
                                <li className="main-menu__item">
                                    <NavLink to="/about" className="main-menu__link">About</NavLink>
                                </li>
                                <li className="main-menu__item">
                                    <NavLink to="/contact" className="main-menu__link">Contact</NavLink>
                                </li>
                                <li className="main-menu__item ">
                                    <NavLink to="/login" className=" main-menu__lognin">Login</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-items">
                            <div className="header-item">
                                <NavLink to="/signin"><img src={User} /></NavLink>
                            </div>
                            <div className="header-itemr">
                                <span><img src={Search} /></span>
                            </div>
                            <div className="header-item">
                                <span><img src={Heart} /></span>
                            </div>
                            <div className="header-item">
                                <NavLink to="/cart"><img src={Cart} /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header