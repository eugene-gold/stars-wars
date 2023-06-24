import {useVehiclesStore} from "../../store/useVehiclesStore";
import {Preview} from "../StarshipsPage/ItemsComponent";

export const VehiclesPage = () => {
    const data = useVehiclesStore.getState().data
    return (
        <>
            <Preview props={data}/>
        </>
    );
};