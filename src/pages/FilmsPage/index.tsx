import React from 'react';
import {FilmDataType} from './types';
import { Loader } from '../../components/Loader';
import {FilmsWrapper} from "./styles";
import {Link} from "react-router-dom";
import {fetchDataType} from "../types";
import {useFilmsStore} from "../../store/useFilmsstore";

export const Films = () => {
  const { isLoading, data  } = useFilmsStore<fetchDataType<FilmDataType>>
  ((state) =>
  ({ isLoading: state.isLoading, data: state.data, fetchData: state.fetchData}))

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>STARS-WARS FILMS:</h2>
          <div>
            <FilmsWrapper>
              {data.map((film: FilmDataType) => (
                  <div key={film.episode_id}>
                    <Link to={`/films/${film.title}`} state={{filmId: film}}>
                      <h3>{film.title} Episode {film.episode_id}
                        <span>({film?.release_date?.slice(0,4)})
                        </span>
                      </h3>
                    </Link>
                  </div>
              ))}
              <div>
              </div>
            </FilmsWrapper>
          </div>
        </>
      )}
    </div>
  );
};
