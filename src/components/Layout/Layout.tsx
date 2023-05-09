import React from 'react';
import { Outlet} from "react-router-dom";
import {Navigation} from "../../pages/Navigation";
import {MainWrapper} from "./styles";
import {usePeopleStore} from "../../store/usePeopleStore";
import {usePlanetsStore} from "../../store/usePlanetsStore";
import {useFilmsStore} from "../../store/useFilmsStore";

usePeopleStore.getState().fetchData().then(r => r)
usePlanetsStore.getState().fetchData().then(r => r)
useFilmsStore.getState().fetchData().then(r => r)

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

