import { ProductList } from '@/components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Categories = () => {
    const { id } = useParams();
    const { data: categories, isLoading } = useQuery({
        queryKey: ["CATEGORY_DETAIL", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/cate`);
            return data;
        },
        staleTime: 60000
    })
    if (isLoading) return <p>Loading</p>
    return (
        <div>
            <section className='news'>
                <div className='container'>

                    <div>
                        {categories?.map((category: { _id?: number; name: string }) => (
                            <div key={category._id}>
                                <h3>
                                    <Link to={`/categories/${category._id}`}>{category.name}</Link>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories