import { FilmDataType} from "../../pages/FilmsPage/types";
import {useLocation} from "react-router";

export const FilmComponent = () => {

    const { state } = useLocation()

    const film: FilmDataType = state.filmId

    return (
        <div>
            <h2>{film.title}</h2>
            <div>
                <h4>About:</h4>
                <div>Episode {film.episode_id}</div>
                <div>Director: {film.director}</div>
                <div>Release date: {film.release_date}</div>
                <p>{film.opening_crawl}</p>
            </div>
            <div>
                <h2>Species</h2>
                <div></div>
            </div>
        </div>
    );
};