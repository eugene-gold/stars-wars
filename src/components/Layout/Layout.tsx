import { Outlet } from "react-router-dom";
import {Navigation} from "../../pages/Navigation";
import {MainWrapper} from "./styles";
import {usePeopleStore} from "../../store/usePeopleStore";
import {usePlanetsStore} from "../../store/usePlanetsStore";
import {useFilmsStore} from "../../store/useFilmsStore";
import {useStarshipsStore} from "../../store/useStarshipsStore";
import {useVehiclesStore} from "../../store/useVehiclesStore";

usePeopleStore.getState().fetchData().then(r => r)
usePlanetsStore.getState().fetchData().then(r => r)
useFilmsStore.getState().fetchData().then(r => r)
useStarshipsStore.getState().fetchData().then(r => r)
useVehiclesStore.getState().fetchData().then(r => r)

export const Layout = () => {
    return (
        <>
            <Navigation/>
            <MainWrapper>
                <Outlet/>
            </MainWrapper>
            <footer>2023</footer>
        </>
    );
};

