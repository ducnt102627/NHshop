import { IProduct } from '@/interfaces/products';
import { getProductById } from '@/services/product';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';


const ProductEdit = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IProduct>(
        // { resolver: joiResolver(productSchema) }
    );
    const { id } = useParams();
    const queryClient = useQueryClient();
    useQuery({
        queryKey: ["PRODUCT_KEY", id],
        queryFn: async () => {
            const { data } = await axios.get(`http:localhost:8080/api/products/${id}`);
            reset(data);
            return data;
        }
    })
    const onSubmit = () => {

    }
    return (
        <div>
            <div className="billing-detail">
                <h3 className="billing__title twtext-slate-700">Product Edit</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="billing-field">
                        <p className="form-lable">Name</p>
                        <input type="text" className="form-control form-control--info " {...register("name")} />
                        {errors?.name && (<div className='twtext-red-600 twmt-2'>*{errors.name.message}</div>)}

                    </div>

                    <div className="billing-field">
                        <p className="form-lable">Image</p>
                        <input type="text" className="form-control form-control--info " />
                        {errors?.image && (<div className='twtext-red-600 twmt-2'>*{errors?.image.message}</div>)}
                    </div>
                    <div className="billing-field">
                        <p className="form-lable">Price</p>
                        <input type="text" className="form-control form-control--info " />
                        {errors?.price && (<div className='twtext-red-600 twmt-2'>*{errors?.price.message}</div>)}
                    </div>
                    <div className="billing-field">
                        <p className="form-lable">Description</p>
                        <input type="text" className="form-control form-control--info " />
                        {errors?.description && (<div className='twtext-red-600 twmt-2'>*{errors?.description.message}</div>)}
                    </div>
                    <div className="twml-20 twmt-8 twmb-16">
                        <button className="twpx-16 twpy-4 twrounded-xl twtext-white twfont-medium twtext-xl  twbg-[#2C374D]">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductEdit