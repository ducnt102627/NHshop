import { getAllProducts, getProductById } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export const useProductQuery = (id: string | number) => {
    const { data, ...rest } = useQuery({
        queryKey: ["PRODUCT_KEY", id],
        queryFn: async () => {
            return id ? await getProductById(id as string | number) : await getAllProducts();
        },
    });
    return { data, ...rest };
}