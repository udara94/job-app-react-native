import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RAPID_API_KEY } from "@env";
const apiKey = RAPID_API_KEY;

const baseUrl = 'https://jsearch.p.rapidapi.com/';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder)=> ({
        getPopularJobs: builder.query({
            query: (params) => {
                return {
                    url: "search",
                    headers: {
                        "X-RapidAPI-Key": apiKey,
                        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                    },
                    params: params
                }
            }
        }),
        getNearByJobs: builder.query({
            query: (params) => {
                return {
                    url: "search",
                    headers: {
                        "X-RapidAPI-Key": apiKey,
                        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                    },
                    params: params
                }
            }
        }),
        getJobDetails: builder.query({
            query: (params) => {
                return {
                    url: "job-details",
                    headers: {
                        "X-RapidAPI-Key": apiKey,
                        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",  
                    },
                    params: params
                }
            }
        })
    }) 
});

export const { useGetPopularJobsQuery, useGetJobDetailsQuery, useGetNearByJobsQuery } = apiSlice
