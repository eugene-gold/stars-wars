import React, {FC, useState} from 'react';
import {ElementWrapper} from "./styles";
import {mouseDragCoords} from "../../../../helpers/mouseDragCoords";
import {PeopleDataType} from "../../types";
import {usePlanetsStore} from "../../../../store/usePlanetsStore";


// TODO: сделать draggable component
// можно переместить в отдельный компонент добавить UseEffect

type ItemType = {
    item:  PeopleDataType;
}

export const PeopleElement: FC<ItemType> = ({ item }) => {
    const {name, birth_year, gender, homeworld} = item

    const [drag, setDrag] = useState({x:0, y: 0})

    const planetsData = usePlanetsStore.getState().data

    const findHome = () => {
        return planetsData.find(planet => planet.url === homeworld)
    }

    const home = findHome()

    function onDragStartHandler(e: React.DragEvent<HTMLDivElement>) {
        const dragObj = e.target as HTMLElement;
        dragObj.style.border = '2px solid lightgrey';
        dragObj.style.position = 'fixed';
        let coords = mouseDragCoords (e)
        setDrag({x: coords.x, y: coords.y})
    }

    function onDragEndHandler(e: React.DragEvent<HTMLDivElement>) {
        const dragObj = e.target as HTMLElement;
        dragObj.style.border = '1px solid red';
        dragObj.style.position = 'absolute';
        dragObj.style.top = `${e.clientY-drag.y}px`;
        dragObj.style.left = `${e.clientX-drag.x}px`;

    }

    return (
    <ElementWrapper
        draggable={true}
        onDragStart={(e)=> onDragStartHandler(e)}
        onDragEnd={(e)=> onDragEndHandler(e)}
        key={name}>

      <h2>{name}</h2>
      {!name && <h2>No name</h2>}
      <p>Birth: {birth_year}</p>
      <p>HomeWorld: {home?.name}</p>
      <p>Gender: {gender}</p>
    </ElementWrapper>
  );
};
