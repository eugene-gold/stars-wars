import {PlanetWrapper} from "./styles";
import {FC, useState} from "react";
import {PlanetDataType} from "../../pages/PlanetsPage/types";
import {useLocation} from "react-router";
import {usePeopleStore} from "../../store/usePeopleStore";
import {PeopleDataType} from "../../pages/PeoplePage/types";

const resid = (residents: string[], peopleData: any[]) : PeopleDataType[]=> {
    let arr: PeopleDataType[] = []

    if(residents?.length === 0) {
        return arr
    }

    for(let i = 0; i < residents?.length; i++) {
        peopleData.forEach( people => {
            if(people.url === residents[i]) {
                arr.push(people)
            }
        })
    }

    return arr

}


export const PlanetComponent: FC = () => {
    const { state } = useLocation()
    const { name, climate, diameter, population, residents, gravity  }: PlanetDataType = state.planet
    const peopleData = usePeopleStore.getState().data
    const people =  resid(residents, peopleData)

    const [peoplArr, setPeopArr] = useState<PeopleDataType[]>(people)

    const filtredPeople = (param: string) => {
        if (param === 'all') {
            setPeopArr(people)
        } else {
            setPeopArr([...people].filter(peop =>  peop.gender === param))
        }
    }

    return (
        <PlanetWrapper>
            <button onClick={()=>filtredPeople('all')}>All</button>
            <button onClick={()=>filtredPeople('male')}>Male</button>
            <button onClick={()=>filtredPeople('female')}>Female</button>
            <button onClick={()=>filtredPeople('none')}>None</button>
            <h2>{name}</h2>
            <h3>Climate: {climate}</h3>
            <h5>Diameter: {diameter}</h5>
            <p>Population: {population}</p>
            <p>Gravity: {gravity}</p>
            <div>Residents:
            { peoplArr.length > 0 ?
                peoplArr.map(man =>
                    <div key={man.url}>
                    <p >Name: {man.name}</p>
                    <p>Gender: {man.gender}</p>
                    <p>Birth: {man.birth_year}</p>
                    <p>Height: {man.height}</p>
                    <p>Weight: {man.mass}</p>
                    </div>
                ) : <span> n/a</span>
            }
            </div>
        </PlanetWrapper>
    );
};