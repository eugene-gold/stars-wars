import {PlanetWrapper} from "./styles";
import {FC, useState} from "react";
import { useNavigate, useParams} from "react-router";
import {usePeopleStore} from "../../store/usePeopleStore";
import {PeopleDataType} from "../../pages/PeoplePage/types";
import {Link} from "react-router-dom";
import {getItemsArray} from "../../helpers/getItemsArray";
import {usePlanetsStore} from "../../store/usePlanetsStore";

export const PlanetComponent: FC = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const params = useParams()
    const planet = usePlanetsStore.getState().data.find((item) => item.name === params.id)

    const peopleData = usePeopleStore.getState().data

    const planetResidents = getItemsArray(planet?.residents, peopleData)

    const [peoplArr, setPeopArr] = useState<PeopleDataType[]>(planetResidents)

    const filtredPeople = (param: string) => {
        if (param === 'all') {
            setPeopArr(planetResidents)
        } else {
            setPeopArr([...planetResidents].filter(item =>  item.gender === param))
        }
    }

    return (
        <PlanetWrapper>
            <button onClick={()=>filtredPeople('all')}>All</button>
            <button onClick={()=>filtredPeople('male')}>Male</button>
            <button onClick={()=>filtredPeople('female')}>Female</button>
            <button onClick={()=>filtredPeople('none')}>None</button>
            <button onClick={goBack}>Back</button>
            <h2>{planet?.name}</h2>
            <h3>Climate: {planet?.climate}</h3>
            <h5>Diameter: {planet?.diameter}</h5>
            <p>Population: {planet?.population}</p>
            <p>Gravity: {planet?.gravity}</p>
            <div>Residents:
            { peoplArr.length > 0 ?
                peoplArr.map(man =>
                    <div key={man.url}>
                        <Link key={man.name} to={`/people/${man.name}`}><div>Name: {man.name}</div></Link>
                        <div>Gender: {man.gender}</div>
                        <div>Birth: {man.birth_year}</div>
                        <div>Height: {man.height}</div>
                        <div>Weight: {man.mass}</div>
                    </div>
                ) : <span> n/a</span>
            }
            </div>
        </PlanetWrapper>
    );
};