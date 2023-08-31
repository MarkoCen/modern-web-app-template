import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (_) => ({}),
});
