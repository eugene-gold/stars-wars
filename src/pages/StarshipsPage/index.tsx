import {useStarshipsStore} from "../../store/useStarshipsStore";
import {Preview} from "./ItemsComponent";

export const StarshipsPage = () => {
    const data = useStarshipsStore.getState().data
    return (
        <>
            <Preview props={data}/>
        </>
    );
};