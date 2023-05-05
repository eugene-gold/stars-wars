import {fetchDataWithPagination} from "../types";

export type PeopleDataType = {
    name?: string;
    birth_year?: string;
    eye_color?: string;
    gender?: string;
    hair_color?: string;
    height?: string;
    mass?: string;
    skin_color?: string;
    homeworld?: string;
    films?: string[];
    species?: string[];
    starships?: string[];
    vehicles?: string[];
    url?: string;
    created?: string;
    edited?: string;
};

export type PeopleStoreType<T> = fetchDataWithPagination<T> & {
    error: null | unknown,
    prevPage: string | null,
    fetchPrevPage: () => Promise<void>
};