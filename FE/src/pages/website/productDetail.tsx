import BarDetail from "@/components/barDetail"
import { useProductQuery } from "@/hooks/useProductQuery";
import { useParams } from "react-router-dom"
import Stars from "@/assets/icons/stars.svg";
import { useCategoryQuery } from "@/hooks/useCategoryQuery";
const ProductDetail = () => {
    const { id } = useParams();

    const { data, isLoading } = useProductQuery(id);
    // const { data: category } = useCategoryQuery(id);

    if (isLoading) return <p>Loading....</p>
    return (
        <>
            <BarDetail />


            <section className="product-detail">
                <div className="container ">
                    <div className="product-detail-inner">
                        <div className="product-detail-image">
                            <div className="proudct-deatil-image__list">
                                <div className="product-detail-image__item">
                                    <img src={data.gallery[0]} className="product-detail-image__custom" alt="#" />
                                </div>
                                <div className="product-detail-image__item">
                                    <img src={data.gallery[1]} className="product-detail-image__custom" alt="#" />
                                </div>
                                <div className="product-detail-image__item">
                                    <img src={data.gallery[2]} className="product-detail-image__custom" alt="#" />
                                </div>
                                <div className="product-detail-image__item">
                                    <img src={data.gallery[0]} className="product-detail-image__custom" alt="#" />
                                </div>
                            </div>
                            <div className="product-detail-image__main">
                                <img src={data.image} alt="#" className="product-detail-image__size" />
                            </div>
                        </div>

                        <div className="product-detail-info">
                            <h3 className="product-detail__name">{data.name}</h3>
                            <p className="product-detail__price">{data.price - data.price * (data.discount / 100)}</p>
                            <div className="product-detail-rating">
                                <img src={Stars} alt="#" className="product-detail__stars" />
                                <div className="product-detail__ctReview">5 Customer Review</div>
                            </div>
                            <p className="product-detail__text">{data.description}</p>
                            <h4 className="product-detail__title">Size</h4>
                            <div className="product-detail-size">
                                <button className="product-detail__btnsize">L</button>
                                <button className="product-detail__btnsize">XL</button>
                                <button className="product-detail__btnsize">XS</button>
                            </div>
                            <h4 className="product-detail__title">Color</h4>
                            <div className="product-detail-color">
                                <button className="product-detail__btncolor">1</button>
                                <button className="product-detail__btncolor">1</button>
                                <button className="product-detail__btncolor">1</button>
                            </div>
                            <div className="product-detail-action">
                                <div className="btn-action">
                                    <button className=" btn-action__decrement">-</button>
                                    <span className="btn-action__value">1</span>
                                    <button className="btn-action__increment">+</button>
                                </div>
                                <div className="orther-action">
                                    <button className="btn-action btn-action--orther"><a href="./cart.html" className="btn-action__link">Add To
                                        Cart</a></button>
                                    <button className="btn-action btn-action--orther">+ Compare</button>
                                </div>
                            </div>
                            <div className="product-detail-more-info">
                                <div className="product-detail-more-info__list">
                                    <p className="product-detail-more-info__item"><a className="product-detail-more-info__link" href="#">SKU</a></p>
                                    <p className="product-detail-more-info__item"><a className="product-detail-more-info__link" href="#">Category</a></p>
                                    <p className="product-detail-more-info__item"><a className="product-detail-more-info__link" href="#">Tags</a></p>
                                    <p className="product-detail-more-info__item"><a className="product-detail-more-info__link" href="#">Share</a></p>
                                </div>
                                <div className="product-detail-more-info__list">
                                    <p className="product-detail-more-info__item"><a className="product-detail-more-info__link" href="#">: SS001</a></p>
                                    <p className="product-detail-more-info__item"><a className="product-detail-more-info__link" href="#">: </a></p>
                                    <p className="product-detail-more-info__item"><a className="product-detail-more-info__link" href="#">: Sofa, Chair, Home, Shop</a></p>
                                    <p className="product-detail-more-info__item">
                                        : <img src="./assets/icons/fb.svg" alt="#" />
                                        <img src="./assets/icons/ig.svg" alt="#" />
                                        <img src="./assets/icons/tw.svg" alt="#" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        </>
    )
}

export default ProductDetail