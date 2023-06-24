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
import {PeopleComponent} from "../components/PeopleComponent";
import {StarshipsPage} from "./StarshipsPage";
import {VehiclesPage} from "./VehiclesPage";


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
                path: "planets/:id",
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
            },
            {
                path: '/people/:id',
                element: <PeopleComponent/>
            },
            {
                path: '/starships',
                element: <StarshipsPage/>
            },
            {
                path: '/vehicles',
                element: <VehiclesPage/>
            }
        ]
    },
]);


function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
