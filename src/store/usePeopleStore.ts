import {create} from "zustand";
import {PeopleDataType, PeopleStoreType} from "../pages/PeoplePage/types";

export const usePeopleStore = create<PeopleStoreType<PeopleDataType>>((set, get) => ({
    data: [],
    isLoading: false,
    error: null,
    nextPage: null,
    prevPage: null,
    fetchData: async () => {
        set({ isLoading: true })
        try {
            const response = await fetch('https://swapi.dev/api/people')
            const data = await response.json()
            set({ data: data.results, error: null, nextPage: data.next, prevPage: data.previous })
        } catch (error: unknown) {
            if (error instanceof Error) {
                set({ error: error.message })
            }
        } finally {
            set({ isLoading: false })
        }

        const next = get().nextPage;

        if(next) {
            try {
                await get().fetchNextPageData()

            } catch (e) {
                console.log(e)
            }
        }
    },
    fetchNextPageData: async () => {
        const next = get().nextPage;
        if(!next) {
            return
        }
        try {
            const response = await fetch(`${next}`)
            const data = await response.json()
            console.log(data)

            set({data: [...get().data, ...data.results], nextPage: data.next })
            await get().fetchNextPageData()
        } catch (e){
            console.log(e)
        }
    },
    fetchPrevPage: async () => {
        set({ isLoading: true })
        try {
            const prev = get().prevPage
            if(prev) {
                const response = await fetch(`${prev}`)
                const data = await response.json()
                set({ data: data.results, error: null, nextPage: data.next, prevPage: data.previous })
            }
        } catch (error: unknown) {
            if(error instanceof Error)
                set({ error: error.message })
        } finally {
            set({ isLoading: false })
        }
    }
}))