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
        } catch (error: any) {
            set({ error: error.message })
        } finally {
            set({ isLoading: false })
        }
    },
    fetchNextPageData: async () => {
        set({ isLoading: true })
        try {
            const next = get().nextPage
            if(next) {
                const response = await fetch(`${next}`)
                const data = await response.json()
                console.log(data)
                set({ data: [...get().data, ...data.results] , error: null, nextPage: data.next,  prevPage: data.previous })
            }
        } catch (error: any) {
            set({ error: error.message })
        } finally {
            set({ isLoading: false })
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
        } catch (error: any) {
            set({ error: error.message })
        } finally {
            set({ isLoading: false })
        }
    }
}))