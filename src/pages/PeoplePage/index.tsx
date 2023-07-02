import { InputWithLabel } from '../../components/Input/InputWithLabel';
import {Loader} from "../../components/Loader";
import {IndexWrapper, PeoplePageContainer, MenuPanel} from "./styles";
import {PeopleDataType, PeopleStoreType} from "./types";
import {usePeopleStore} from "../../store/usePeopleStore";
import { useStorageState } from 'helpers/useSearchHook';
import { ItemsList } from 'components/ItemsListComponent';
import { Button } from 'components/Button';
import { Slider } from 'components/Slider';

// TODO: пагинацию или убрать или сделать дополнительно отдельно 
// кнопки удалить


export const PeoplePage = () => {

    const [searchItem, setSearchItem] = useStorageState( 'search', '')

     
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

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(event.target.value)
    }

    const searchedItems = data.filter((item) => 
        item.name.toLowerCase().includes(searchItem.toLowerCase())
    )    

  return (
    <PeoplePageContainer>
        <MenuPanel>
            <InputWithLabel
            id='search'
            value={searchItem}
            isFocused
            onInputChange={handleSearch}>
                <strong>Search name:&nbsp;</strong> 
            </InputWithLabel>
            <Button onClick={fetchPrevPage}>Previous</Button>
            {/* <button onClick={fetchData}>Press</button> */}
            {/* <button onClick={fetchNextPageData}>More...</button> */}
            
        </MenuPanel>
        <IndexWrapper>
            {isLoading ? <Loader/> : <ItemsList list={searchedItems} />}            
        </IndexWrapper>
    </PeoplePageContainer>
  );
};
