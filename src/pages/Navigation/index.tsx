import React from 'react';
import {NavLink} from "react-router-dom";
import {NavWrapper} from "./styles";

export const Navigation = () => {
    return (
        <NavWrapper>
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'people'}> People </NavLink>
            <NavLink to={'films'}> Films </NavLink>
            <NavLink to={'planets'}> Planets </NavLink>
        </NavWrapper>
    );
};

