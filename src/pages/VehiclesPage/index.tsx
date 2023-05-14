import {useVehiclesStore} from "../../store/useVehiclesStore";

export const VehiclesPage = () => {
    const data = useVehiclesStore.getState().data
    console.log(data)
    return (
        <div>
            {data.map(vehicle => (
                <div key={vehicle.url}>{vehicle.name}</div>
            ))}
        </div>
    );
};