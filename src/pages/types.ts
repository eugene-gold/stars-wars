export type fetchDataType<T> = {
    isLoading: boolean;
    data: T[];
    nextPage?: string | null;
    fetchData: () => Promise<void>;

}

export type fetchDataWithPagination<T> = fetchDataType<T> & {
    fetchNextPageData: () => Promise<void>;
}