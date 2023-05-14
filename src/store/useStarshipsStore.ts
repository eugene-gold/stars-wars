import {create} from "zustand";
import {fetchDataWithPagination} from "../pages/types";
import {StarshipsDataType} from "../pages/StarshipsPage/types";

export const useStarshipsStore = create<fetchDataWithPagination<StarshipsDataType>>((set, get)=>({
    isLoading: false,
    data: [],
    nextPage: null,
    fetchData: async () => {

        set({isLoading: true })
        try {
            const response = await fetch ('https://swapi.dev/api/starships')
            const data = await response.json()
            console.log(data)
            set({data: data.results, nextPage: data.next})
        } catch (e : any) {
            console.log(e)
        }
        finally {
            set({isLoading: false })

        }

        const next = get().nextPage;

        if(next) {
            try {
                await get().fetchNextPageData()
            } catch (e : any) {
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
    }
}))