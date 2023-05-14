import React from 'react';
import {PlanetDataType} from './types';
import { Loader } from '../../components/Loader';
import {PlanetsWrapper, PageName, PlanetElement} from "./styles";
import {Link} from "react-router-dom";
import {fetchDataWithPagination} from "../types";
import {usePlanetsStore} from "../../store/usePlanetsStore";

export const Planets = () => {
    const { isLoading,
        data,
        fetchData,
        fetchNextPageData } = usePlanetsStore<fetchDataWithPagination<PlanetDataType>>
    ((state) =>
        ({ isLoading: state.isLoading,
            data: state.data,
            fetchData: state.fetchData,
            nextPage: state.nextPage,
            fetchNextPageData: state.fetchNextPageData}))

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                    <div>
                        <PageName>STARS-WARS Planets:</PageName>
                        <button onClick={fetchData}>Get 10 Planets</button>
                        <button onClick={fetchNextPageData}>Get All Planets</button>
                        <PlanetsWrapper>
                            {data.map((planet: PlanetDataType) => (
                                <PlanetElement key={planet.name}>
                                    <Link to={`/planets/${planet.name}`}
                                          state={{planet: planet}}
                                    >
                                    <h2>{planet.name}</h2>
                                    <div>
                                        <p>Climate : {planet.climate}</p>
                                        <p>Population: {planet.population}</p>
                                        <p>Diameter: {planet.diameter}</p>
                                        <p>Terrain: {planet.terrain}</p>
                                    </div>
                                    </Link>
                                </PlanetElement>
                            ))}
                        </PlanetsWrapper>
                    </div>
            )}
        </div>
    );
};
