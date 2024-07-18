import useCart from '@/hooks/useCart';
import { useLocalStorage } from '@/hooks/useStorage';
import { useQueryClient } from '@tanstack/react-query';
import { reduce } from 'lodash';
import { Link } from 'react-router-dom';
import { Delete } from '../../components/icons/index';

const Cartpage = () => {
    const [user] = useLocalStorage("user", {});
    const userId = user?.user?._id;
    const queryClient = useQueryClient();
    const { data, mutate, isLoading, isError } = useCart();
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error...</p>
    const calculateTotal = () => {
        if (!data || !data.products) return 0
        return reduce(data.products, (total, product) => total + product.price * product.quantity, 0)
    }

    return (
        <>
            <section className="cart">
                <div className="container">
                    <div className="cart-inner">
                        <div className="cart-product">
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th>
                                        </th>
                                        <th>
                                            <h3 className="cart-table__title"> Image</h3>
                                        </th>
                                        <th>
                                            <h3 className="cart-table__title"> Product</h3>
                                        </th>
                                        <th>
                                            <h3 className="cart-table__title">Price</h3>
                                        </th>
                                        <th>
                                            <h3 className="cart-table__title">Quantity</h3>
                                        </th>
                                        <th>
                                            <h3 className="cart-table__title">Subtotal</h3>
                                        </th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.products.map((product: any, index: number) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td><img src={product.image} width={50} alt="#" /></td>
                                            <td><span className="cart-table__value">{product.name}</span></td>
                                            <td><span className="cart-table__value">{product.price}</span></td>
                                            <td>
                                                <div className="btn-action btn-action--cart">
                                                    <button className=" btn-action__decrement" onClick={() => mutate({ action: 'DECREMENT', productId: product.productId })} >-</button>
                                                    <span className="btn-action__value">{product.quantity}</span>
                                                    <button className="btn-action__increment" onClick={() => mutate({ action: 'INCREMENT', productId: product.productId })} >+</button>
                                                </div>
                                            </td>
                                            <td><span className="cart-table__sub">{product.price * product.quantity}</span></td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        if (window.confirm("Do you want to remove?")) { mutate({ action: 'REMOVE', productId: product.productId }) }
                                                    }} >
                                                    <img src={Delete} alt="#" /></button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        <div className="cart-totals">
                            <div className="cart-totals-inner">
                                <h3 className="cart-totals__title">Cart Totals</h3>
                                {/* <div className="cart-totals-price">
                                    <span className="cart-totals__name">Subtotal</span>
                                    <span className="cart-totals__subprice">25.000.000đ</span>
                                </div> */}
                                <div className="cart-totals-price">
                                    <span className="cart-totals__name">Total</span>
                                    <span className="cart-totals__mainprice">${calculateTotal()}</span>
                                </div>
                                <Link to="/order" className="cart-totals-btn"><a href="./checkout.html" className="cart-totals__checkout">Order</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        </>
    )
}

export default Cartpage