import React from 'react';
import {PlanetDataType} from './types';
import { Loader } from '../../components/Loader';
import {PlanetsWrapper, PageName} from "./styles";
import {Link} from "react-router-dom";
import {fetchDataWithPagination} from "../types";
import {usePlanetsStore} from "../../store/usePlanetsStore";

export const Planets = () => {
    const { isLoading,
        data,
        fetchData,
        nextPage,
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
                                <div key={planet.name}>
                                    <Link to={`/planet/${planet.name}`}
                                          state={{planet: planet}}
                                    ><h3>{planet.name}</h3></Link>

                                    <div>
                                        <h2>Climate : {planet.climate}</h2>
                                        <span>Population: {planet.population}</span>
                                        <span>Diameter: {planet.diameter}</span>
                                    </div>
                                </div>
                            ))}
                        </PlanetsWrapper>
                    </div>
            )}
        </div>
    );
};
