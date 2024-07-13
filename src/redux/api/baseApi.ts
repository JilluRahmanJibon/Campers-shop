import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://campers-shop-alpha.vercel.app/api/v1",
	}),
	tagTypes: ["shop"],
	endpoints: () => ({}),
});
