import instance from "@/config/axios";

export const getCategories = async () => {
    try {
        const response = await instance.get('/cate');
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
export const getCategory = async (_id: String) => {
    try {
        const resposne = await instance.get(`/cate/${_id}`);
        return resposne.data
    } catch (error) {
        console.log(error)
    }
}