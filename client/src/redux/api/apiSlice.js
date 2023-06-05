import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8080',
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: (userData) => ({
				url: '/api/v1/auth/register',
				method: 'POST',
				body: userData,
			}),
		}),
		loginUser: builder.mutation({
			query: (credentials) => ({
				url: '/api/v1/auth/authenticate',
				method: 'POST',
				body: credentials,
			}),
		}),
		getCategories: builder.query({
			query: () => '/categories',
		}),
		getCategoriesById: builder.query({
			query: (id) => `/categories/${id}`,
		}),
		getProfesionalById: builder.query({
			query: (id) => `/servicios/experts/${id}`,
		}),
	}),
});

export const {
	useRegisterUserMutation,
	useLoginUserMutation,
	useGetCategoriesQuery,
	useGetCategoriesByIdQuery,
	useGetProfesionalByIdQuery,
} = apiSlice;
