//Redux manages state while Redux Toolking allows us to embed request in actions easily
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//SLICE, section of the store
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
