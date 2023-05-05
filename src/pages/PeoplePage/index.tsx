import { SearchInput } from './components/Input/SearchInput';
import React from "react";
import {Loader} from "../../components/Loader";
import {IndexWrapper, PeoplePageContainer, MenuPanel} from "./styles";
import {PeopleElement} from "./components/PeopleElement";
import {PeopleDataType, PeopleStoreType} from "./types";
import {usePeopleStore} from "../../store/usePeopleStore";
export const PeoplePage = () => {

    const {data,
        isLoading,
        fetchData,
        fetchNextPageData,
        fetchPrevPage} =
        usePeopleStore<PeopleStoreType<PeopleDataType>>((state) => ({
        data: state.data,
        isLoading: state.isLoading,
        error: state.error,
        nextPage: state.nextPage,
        prevPage: state.prevPage,
        fetchData: state.fetchData,
        fetchNextPageData: state.fetchNextPageData,
        fetchPrevPage: state.fetchPrevPage
    }))
  return (
    <PeoplePageContainer>
        <MenuPanel>
            <SearchInput />
            <button onClick={fetchPrevPage}>Previous</button>
            <button onClick={fetchData}>Press</button>
            <button onClick={fetchNextPageData}>More...</button>
        </MenuPanel>
        <IndexWrapper>
            {isLoading ? <Loader/> : ( data.map((item:any) => <PeopleElement key={item.name} item={item} /> ))}
        </IndexWrapper>
    </PeoplePageContainer>
  );
};
