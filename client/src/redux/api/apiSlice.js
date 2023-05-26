import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8080/api/v1/auth',
	}),
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: (userData) => ({
				url: '/register',
				method: 'POST',
				body: userData,
			}),
		}),
		loginUser: builder.mutation({
			query: (userData) => ({
				url: '/authenticate',
				method: 'POST',
				body: userData,
			}),
		}),
	}),
});

export const { useRegisterUserMutation, useLoginUserMutation } = apiSlice;
