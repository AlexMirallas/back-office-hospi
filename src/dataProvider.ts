import crudProvider from "ra-data-nestjsx-crud";
import { DataProvider } from "ra-core";

export const dataProvider: DataProvider = crudProvider(import.meta.env.VITE_API_URL);