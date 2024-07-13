import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		setProduct: builder.query({
			query: (data) => ({
				url: "/create-product",
				method: "POST",
				body:data
			}),
			providesTags: ["shop"],
		}),
		getAllProducts: builder.query({
			query: () => ({
				url: "/products",
				method: "GET",
			}),
			providesTags: ["shop"],
		}),
		getProductById: builder.query({
			query: id => ({
				url: `products/${id}`,
				method: "GET",
			}),
		}),
		updateProduct: builder.mutation({
			query: data => ({
				url: `products/${data?.id}`,
				method: "PUT",
				body: data.data,
			}),
			invalidatesTags: ["shop"],
		}),
		deleteProduct: builder.mutation({
			query: id => ({
				url: `products/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["shop"],
		}),
	}),
});

export const {
	useGetAllProductsQuery,
	useGetProductByIdQuery,
	useUpdateProductMutation,
	useDeleteProductMutation,
} = productsApi;
