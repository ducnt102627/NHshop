import { ProductList } from '@/components';
import { Ft1, Ft2, Ft3 } from '@/components/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["PRODUCT_DETAIL", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/cate/${id}`);
            return data;
        }
    })
    if (isLoading) return <p>Loading...</p>
    return (
        <div>
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
                            <div className="column-filter__item--showing"><span className="column-filter__item--text">Danh mục : {data.category.name}</span></div>
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
            {/* <section className='news'>
                <div className='container'>
                    <div className='section-heading'>
                        <h2 className='section-heading__title'>Danh mục : {data.category.name}</h2>
                    </div>
                    <ProductList data={data.products} />
                </div>
            </section> */}
            <div className="container">
                <ProductList data={data.products} />
            </div>
        </div>

    )
}

export default CategoryDetail