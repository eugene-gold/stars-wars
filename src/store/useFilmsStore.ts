import {create} from "zustand";
import {fetchDataType} from "../pages/types";
import {FilmDataType} from "../pages/FilmsPage/types";

export const useFilmsStore = create<fetchDataType<FilmDataType>>((set)=>({
    isLoading: false,
    data: [],
    fetchData: async () => {
        set({isLoading: true })
        try {
            const response = await fetch ('https://swapi.dev/api/films')
            const data = await response.json()
            set({data: data.results})
        } catch (e : any) {
            console.log(e)
        }
        finally {
            set({isLoading: false })
        }
    }
}))