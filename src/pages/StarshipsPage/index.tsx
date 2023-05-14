import {useStarshipsStore} from "../../store/useStarshipsStore";

export const StarshipsPage = () => {
    const data = useStarshipsStore.getState().data
    console.log(data)
    return (
        <div>
            {data.map(ship => (
                <div key={ship.url}>{ship.name}</div>
            ))}
        </div>
    );
};