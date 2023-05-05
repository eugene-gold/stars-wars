import React from 'react';
import '../App.css';
import { PeoplePage} from "./PeoplePage";
import {ErrorPage} from "./ErrorPage";
import {Films} from "./FilmsPage";
import {FilmComponent} from "../components/FilmComponent";
import {Planets} from "./PlanetsPage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Layout} from "../components/Layout/Layout";
import {PlanetComponent} from "../components/PlanetComponent";


let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "planets",
                element: <Planets/>,
            },
            {
                path: "planet/:id",
                element: <PlanetComponent />,
            },
            {
                path: "films",
                element: <Films/>,
            },
            {
                path: '/films/:id',
                element: <FilmComponent/>
            },
            {
                path: 'people',
                element: <PeoplePage/>
            }
        ]
    },
]);


function App() {
  return (
     <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  );
}

export default App;
