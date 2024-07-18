import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useLocalStorage } from "./useStorage";
import instance from "@/config/axios";
import { reduce } from "lodash";

const useCart = () => {
    const queryClient = useQueryClient();
    const [user] = useLocalStorage('user', {});
    const userId = user?.user?._id;

    const { data, ...restQuery } = useQuery({
        queryKey: ["cart", userId],
        queryFn: async () => {
            const { data } = await instance.get(`/cart/${userId}`);
            return data
        }
    })

    const { mutate } = useMutation({
        mutationFn: async ({ action, productId }: { action: string, productId: string }) => {
            switch (action) {
                case 'INCREMENT': await instance.post("/cart/increase", { userId, productId });
                    break;
                case 'DECREMENT': await instance.post("/cart/decrease", { userId, productId });
                    break;
                case 'REMOVE': await instance.post("/cart/remove", { userId, productId });
                    break;
                // case 'REMOVEALLDATA': await instance.delete(`/cart/remove/${_id}`, { userId, productId });
                //     break;

            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId]
            })
        }
    })
    const mutateRemove = useMutation({
        mutationFn: async (_id: string) => {
            const { data } = await instance.delete(`/cart/remove/${_id}`);
            return data
        }, onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId]
            })
        }
    })
    const calculateTotal = () => {
        if (!data || !data.products) return 0
        return reduce(data.products, (total, product) => total + product.price * product.quantity, 0)
    }

    return { data, mutate, mutateRemove, calculateTotal, ...restQuery }
}
export default useCart