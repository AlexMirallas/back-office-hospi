import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils, DataProvider } from 'ra-core';

const httpClient = (url: string, options: any = {}) => {
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider: DataProvider = {
    ...simpleRestProvider(import.meta.env.VITE_API_URL, httpClient),
    getList: async (resource, params) => {
        const { page = 1, perPage = 10 } = params.pagination || {};
        const url = `${import.meta.env.VITE_API_URL}/${resource}?page=${page}&limit=${perPage}`;
        const { json } = await httpClient(url);
        
        return {
            data: json.data || [],
            total: json.total || 0,
        };
    },

};