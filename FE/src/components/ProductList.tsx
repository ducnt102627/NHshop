

import instance from '@/config/axios';
import { useProductQuery } from '@/hooks/useProductQuery';
import { useLocalStorage } from '@/hooks/useStorage';
import { IProduct } from '@/interfaces/products';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { Compare } from './icons';

type ProductListProps = {
    featured?: boolean,
    data?: IProduct[]
}
const ProductList = ({ featured, data }: ProductListProps) => {
    const { data: products, isLoading, isError } = useProductQuery();
    const [user] = useLocalStorage("user", {});
    const userId = user?.user?._id;
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const { mutate } = useMutation({
        mutationFn: async ({ productId, quantity }: { productId: string | number | undefined, quantity: number }) => {
            const { data } = await instance.post("/cart/addToCart", { userId, productId, quantity });
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId],
            }),
                navigate("/cart")
        }
    })

    const filteredProducts = featured ? products?.filter((product: IProduct) => product?.featured == featured) : data ? data : products;
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error.....</p>
    return (
        <>
            <div className="product-list">
                {filteredProducts.map((item: IProduct, index: number) => (
                    <div className="product-item" key={index}>
                        <div className="product-image">
                            <img src={item.image} alt="#" className="product__thumbnail" />
                            <span className="product-sale">-30%</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product__name">
                                <a href="#" className="product__link">{item.name}</a>
                            </h3>
                            <a href="#" className="product__category">Stylish cafe chair</a>
                            <div className="product-price">
                                <span className="product-price__new">${item.price - item.price * (item?.discount / 100)}</span>
                                <span className="product-price__old">${item.price}</span>
                            </div>
                        </div>
                        <div className="product-actions">
                            <Link className="btn product-action product-action__quickview" to={`/products/${item._id}`}>Quick View</Link>
                            <button className="btn product-action product-action__quickview" onClick={() => mutate({ productId: item._id, quantity: 1 })} >Add To Cart</button>

                            <div className="product-actions-more">
                                <span className="product-action__share"><i className="fa-solid fa-share-nodes action__icon" />Share</span>
                                <span className="product-action__compare"><img src={Compare} className="action__icon" alt="#" />Compare</span>
                                <span className="product-action__like"><i className="fa-regular fa-heart action__icon" />Like</span>
                            </div>
                        </div>
                    </div>

                ))}


            </div>
        </>
    )
}

export default ProductList