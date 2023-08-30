import {StarshipsDataType} from "../types";
import {Link, useLocation} from "react-router-dom";
import React from "react";
import {Item, ItemName, ItemsWrapper} from "./styles";
import {VehiclesDataType} from "../../VehiclesPage/types";

type Props<T> = {
    props: T[]
};
export const Preview = (props: Props<StarshipsDataType> | Props<VehiclesDataType>) => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <ItemName>STARS-WARS Starships:</ItemName>
            <ItemsWrapper>
                {props.props.map((ship: StarshipsDataType) => (
                    <Item key={ship.name}>
                        <Link to={`/planets/${ship.name}`}
                            state={{planet: ship}}
                        >
                            <h2>{ship.name}</h2>
                            <div>
                                <p>Climate : {ship.length}</p>
                                <p>Population: {ship.crew}</p>
                                <p>Diameter: {ship.MGLT}</p>
                                <p>Terrain: {ship.cargo_capacity}</p>
                            </div>
                        </Link>
                    </Item>
                ))}
            </ItemsWrapper>
        </div>
    );
};