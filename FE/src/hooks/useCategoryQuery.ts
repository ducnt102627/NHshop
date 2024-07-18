import { getCategories, getCategory } from "@/services/category"
import { useQuery } from "@tanstack/react-query"

export const useCategoryQuery = (id?: string) => {
    const { data, ...rest } = useQuery({
        queryKey: ["CATEGORY_KEY", id],
        queryFn: async () => {
            return id ? await getCategory(id) : await getCategories()
        }
    });
    return { data, ...rest }
}