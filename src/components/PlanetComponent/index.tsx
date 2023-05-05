import {PlanetWrapper} from "./styles";
import {FC} from "react";
import {PlanetDataType} from "../../pages/PlanetsPage/types";
import {useLocation} from "react-router";




export const PlanetComponent: FC = () => {

    const { state } = useLocation()

    const { name, climate, diameter, population, residents, gravity  }: PlanetDataType = state.planet
    console.log(residents)
    return (
        <PlanetWrapper>
            <h2>{name}</h2>
            <h3>Climate: {climate}</h3>
            <h5>Diameter: {diameter}</h5>
            <p>Population: {population}</p>
            <p>Gravity: {gravity}</p>
            <p>Residents: {residents}</p>
        </PlanetWrapper>
    );
};