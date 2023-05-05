import {create} from "zustand";
import {fetchDataWithPagination} from "../pages/types";
import {PlanetDataType} from "../pages/PlanetsPage/types";

export const usePlanetsStore = create<fetchDataWithPagination<PlanetDataType>>((set, get)=>({
    isLoading: false,
    data: [],
    nextPage: null,
    fetchData: async () => {
        set({isLoading: true })
        try {
            const response = await fetch ('https://swapi.dev/api/planets')
            const data = await response.json()
            console.log(data)
            set({data: data.results, nextPage: data.next})
        } catch (e : any) {
            console.log(e)
        }
        finally {
            set({isLoading: false })

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
            set({data: [...get().data, ...data.results], nextPage: data.next })
            await get().fetchNextPageData()
        } catch (e){
            console.log(e)
        }
    }
}))