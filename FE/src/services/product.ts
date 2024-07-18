import instance from "@/config/axios";
import { IProduct } from "@/interfaces/products";
const userDataString = localStorage.getItem('user');
let token = '';
if (userDataString) {
    try {
        const userData = JSON.parse(userDataString);
        token = userData.token || '';
    } catch (error) {
        console.error('Không thể phân tích dữ liệu từ localStorage:', error);
    }
}

export const getAllProducts = async () => {
    try {
        const response = await instance.get('/products');
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
export const getProductById = async (_id: number | string) => {
    try {
        const response = await instance.get(`/products/${_id}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
// export const createProduct = async (product: IProduct) => {
//     try {
//         const response = await instance.post(`/products`, product);
//         return response.data;
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const updateProduct = async (product: IProduct) => {
//     try {
//         const response = await instance.put(`/products/${product._id}`, product);
//         return response.data;
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const deleteProduct = async (_id: number | string) => {
//     try {
//         const response = await instance.delete(`/products/${_id}`);
//         return response.data;
//     } catch (error) {
//         console.log(error)
//     }
// }

export const addProduct = async (product: IProduct) => {
    try {
        const response = await instance.post(`/products`, product, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token ? token : ''
            },
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const removeProduct = async (_id: string | number) => {
    try {
        const response = await instance.delete(`/products/${_id}`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token ? token : ''
            },
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const editProduct = async (product: IProduct) => {
    try {
        const response = await instance.put(`/products/${product._id}`, product,)
        return response.data
    } catch (error) {
        console.log(error)
    }
}