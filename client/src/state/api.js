//Redux manages state while Redux Toolking allows us to embed request in actions easily
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//SLICE, section of the store
//To create an API slice, you can use the createApi() function. The createApi() function takes a configuration object as an argument. The configuration object specifies the base URL for the API, the query parameters, and the response handler.
export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: 'main',
	tagTypes: [],
	endpoints: (build) => ({
		postAiText: build.mutation({
			query: (payload) => ({
				url: 'openai/text',
				method: 'POST',
				body: payload,
			}),
		}),
	}),
});
//We must follow conventions of starting with use and ending with mutation for post requests
export const { usePostAiTextMutation } = api;
