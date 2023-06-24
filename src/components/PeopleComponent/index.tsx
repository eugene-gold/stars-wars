import { useParams} from "react-router";
import {usePeopleStore} from "../../store/usePeopleStore";
import {usePlanetsStore} from "../../store/usePlanetsStore";
import {getItemsArray} from "../../helpers/getItemsArray";
import {useFilmsStore} from "../../store/useFilmsStore";
import {Link} from "react-router-dom";

export const PeopleComponent = () => {

    const param = useParams()
    const person = usePeopleStore.getState().data.find((item) => item.name === param.id)

    const home = usePlanetsStore.getState().data.find(planet => planet.url === person?.homeworld)

    const films = getItemsArray(person?.films!, useFilmsStore.getState().data)


    return (
        <div>
            <h2>{person?.name}</h2>
            <div>
                Info
                <div>Birth at: <span>{person?.birth_year}</span></div>
                <div>Born in: <Link to={`/planets/${home?.name}`}><span>{home?.name}</span></Link></div>

                <div>Physics:
                    <div>Gender: <span>{person?.gender}</span></div>
                    <div>Height: <span>{person?.height} sm</span></div>
                    <div>Weight: <span>{person?.mass} kilo</span></div>
                    <div>Skin: <span>{person?.skin_color}</span></div>
                </div>
                <div>
                    Starships:

                </div>
                <div>
                    Films:
                    {
                        films.map(film =>
                            (
                                <Link to={`/films/${film.title}`} key={film.title}><div >{film.title}</div></Link>
                            )
                        )
                    }
                </div>

            </div>
        </div>
    );
};