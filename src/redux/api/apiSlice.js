import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'url',
	}),
	endpoints: (builder) => ({
		getServicios: builder.query({
			query: () => 'endpoint',
		}),
	}),
});

export const { useGetServiciosQuery } = apiSlice;
