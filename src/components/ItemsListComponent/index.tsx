import { PeopleElement } from "pages/PeoplePage/components/PeopleElement"
import { PeopleDataType } from "pages/PeoplePage/types"
import { FC } from "react"
import { Link } from "react-router-dom"

type ItemsProps = {
    list: PeopleDataType[]
}

export const ItemsList: FC<ItemsProps> = ({ list }) => {
    return (
        <>
            {list.map((item) => 
                <Link key={item.name} to={`/people/${item.name}`} state={{people: item}}>
                    <PeopleElement key={item.name} item={item} />
                </Link>
            )}
        </>
    )
}