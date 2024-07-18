import { Cart } from '@/components/icons';
import instance from '@/config/axios';
import useCart from '@/hooks/useCart';
import { useLocalStorage } from '@/hooks/useStorage';
import { IProduct } from '@/interfaces/products';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';

type DataProps = {
    name: string,
    phone: number,
    email: string,
    address: string,
}
type OrderProps = {
    userId: string,
    items: [],
    totalPrice: number,
    customerInfo: object
}
const OrderPage = () => {
    const [user] = useLocalStorage("user", {});
    const userId = user?.user?._id;
    const { data, mutateRemove, calculateTotal } = useCart();
    // console.log(data)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { mutate } = useMutation({
        mutationFn: async (order: OrderProps) => {
            const { data } = await axios.post("http://localhost:8080/api/orders", order);
            return data
        },
        onSuccess: () => {
            alert("Order to successfully");
            // mutateRemove.mutate({ userId: userId })
            // mutateRemove.mutate({ _id })\

        }
    })

    const onSubmit = (formData: object) => {
        mutate({
            userId,
            items: data?.products,
            totalPrice: calculateTotal(),
            customerInfo: formData,
        });

    }
    return (
        <>
            <section className="billing">
                <div className="container">
                    <div className="billing-inner">
                        <div className="billing-detail">
                            <h3 className="billing__title">Billing details</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="billing-field">
                                    <p className="form-lable">Full name</p>
                                    <input type="text" className="form-control form-control--info " {...register("name")} />
                                </div>
                                <div className="billing-field">
                                    <p className="form-lable">Phone </p>
                                    <input type="text" className="form-control form-control--info " {...register("phone")} />
                                </div>
                                <div className="billing-field">
                                    <p className="form-lable">Street address</p>
                                    <input type="text" className="form-control form-control--info " {...register("address")} />
                                </div>
                                <div className="billing-field">
                                    <p className="form-lable">Email address </p>
                                    <input type="text" className="form-control form-control--info " {...register("email")} />
                                </div>
                                {/* <div className="billing-field">
                                    <p className="form-lable"> </p>
                                    <input type="text" className="form-control form-control--info" placeholder="Additional information" />
                                </div> */}
                                <div className=' ml-[120px] mt-8'>
                                    <button className='border-2 border-[#9F9F9F] px-6 py-4 rounded-2xl font-medium hover:bg-[#B88E2F] hover:border-[#B88E2F] hover:text-white transition-all '>Place order</button>
                                </div>
                            </form>
                        </div>
                        <div className="billing-info">
                            <div className="border-b-[1px] border-b-zinc-200 pb-10">
                                <h3 className=""></h3>
                                {data?.products?.map((item: IProduct, index: number) => (
                                    <div className="flex gap-4 mb-5" key={index}>
                                        <div className=""><img src={item.image} alt="" className='h-[130px] object-cover' /></div>
                                        <div className=''>
                                            <h3 className='billing-info__title'>{item.name}</h3>
                                            <div className="billing-info-row">
                                                <span className="billing-info__namepr">Price: </span>
                                                <span className="billing-info__price">${item.price}</span>
                                            </div>
                                            <div className="billing-info-row">
                                                <span className="billing-info__namepr">Quantity: </span>
                                                <span className="billing-info__price">${item.quantity}</span>
                                            </div>


                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="billing-info-product">
                                <div className="billing-info-row">
                                    <span className="billing-info__title">Products</span>
                                    <span className="billing-info__pricesum">{data?.products ? data?.products.length : 0}</span>
                                </div>
                                {/* <div className="billing-info-row">
                                    <span className="billing-info__namepr">Asgaard sofa </span>
                                    <span className="billing-info__price">25.000.000đ</span>
                                </div>
                                <div className="billing-info-row">
                                    <span className="billing-info__sum">Subtotal</span>
                                    <span className="billing-info__price">25.000.000đ</span>
                                </div> */}
                                <div className="billing-info-row">
                                    <span className="billing-info__title">Total</span>
                                    <span className="billing-info__pricesum">${calculateTotal()}</span>
                                </div>
                            </div>
                            <div className="payment">
                                <div className="payment-checkbox">
                                    <input type="radio" id="radio" /><label htmlFor="radio" className="checkmark checkmark--focus">Direct
                                        Bank
                                        Transfer</label>
                                </div>
                                <p className="payment-desc">Make your payment directly into our bank account. Please use your Order
                                    ID as the
                                    payment reference. Your order will not be shipped until the funds have cleared in our
                                    account.</p>
                                <div className="payment-checkbox"> <input type="radio" id="radio" /><label id="radio" className="checkmark">Direct Bank
                                    Transfer</label>
                                </div>
                                <div className="payment-checkbox"> <input type="radio" id="radio" /><label id="radio" className="checkmark">Cash On
                                    Delivery</label>
                                </div>
                                <div>
                                    <p className="payment-message">Your personal data will be used to support your experience
                                        throughout this website, to
                                        manage access to your account, and for other purposes described in our <span className="payment-hightlight"> privacy
                                            policy</span>.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OrderPage