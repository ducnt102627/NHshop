import { Button } from '@/components/ui/button';
import { useProductQuery } from '@/hooks/useProductQuery'
import { IProduct } from '@/interfaces/products';
import { Checkbox } from '@radix-ui/react-checkbox'
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Plus } from 'lucide-react';
import useProductMutation from '@/hooks/useProductMutation';
import { toast } from '@/components/ui/use-toast';
type Props = {
    data: IProduct[],
    featured: boolean,
}

type useProductMutationProps = {
    action: "CREATE" | "DELETE" | "UPDATE"
    onSuccess?: () => void
}

const ProductMg = () => {
    const { data } = useProductQuery();
    const { mutate } = useProductMutation(
        {
            action: "DELETE",
            onSuccess: () => {
                toast({
                    title: "Delete to success",
                    variant: "success",
                })
            }
        }
    );
    // const productId = data.

    return (
        <>
            <div className="overflow-x-auto">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <div className="w-full h-[50px] relative ">
                        <Link to="/admin/products/add" className="flex item-center absolute right-0">
                            <Button>
                                <Plus />Create Product
                            </Button>
                        </Link>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <Checkbox id='terms' />
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Featured
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data?.map((item: IProduct, index: number) => (
                                <tr key={index + 1}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {index + 1}

                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={item.image} alt={item.name} className="h-10 w-10 sm:h-20 sm:w-20" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.category?.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.featured ? 'Checked' : 'Unchecked'}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className=" flex gap-5">
                                            <Link to={`/admin/products/${item._id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                                                Update
                                            </Link>
                                            <button onClick={() => mutate(item)} className="text-indigo-600 hover:text-indigo-900">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductMg