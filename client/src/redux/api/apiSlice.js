import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://myservices-production.up.railway.app/',
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
		// necesita el id del user, se tiene que sacar del token
		getUser: builder.query({
			query: (id) => `/user/${id}`,
		}),
		// Crea un trabajo desde un usuario		NO
		userService: builder.mutation({
			query: (datos) => ({
				url: '/servicios/user/service',
				method: 'POST',
				body: datos,
			}),
		}),
		// Trae todas las categorias
		getCategories: builder.query({
			query: () => '/categories',
		}),
		// trae todos los profesionales de una categoria	NO
		getCategoryById: builder.query({
			query: (id) => `/categories/${id}`,
		}),
		// trae todos los profesionales de una categoria	NO
		getExpertsById: builder.query({
			query: (id) => `/servicios/experts/${id}`,
		}),
		// trae todos los trabajos disponibles	NO
		getServices: builder.query({
			query: () => '/servicios/services',
		}),
		// trae todos los trabajos de profesionales	NO
		getServicesExperts: builder.query({
			query: () => '/servicios/services/experts',
		}),
		// trae todos los trabajos de clientes	NO
		getServicesUsers: builder.query({
			query: () => '/servicios/services/users',
		}),
	}),
});

export const {
	useRegisterUserMutation,
	useLoginUserMutation,
	useGetCategoriesQuery,
	useGetUserQuery,
	useGetServicesQuery,
	useGetServicesUsersQuery,
	useGetServicesExpertsQuery,
	useGetExpertsByIdQuery,
	useUserServiceMutation,
	useGetCategoryByIdQuery,
} = apiSlice;
