import {NavLink} from "react-router-dom";
import {NavLogo, NavWrapper} from "./styles";

export const Navigation = () => {
    return (
        <NavWrapper>
            <NavLink to={'/'}>
                <NavLogo/>
            </NavLink>            
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'people'}> People </NavLink>
            <NavLink to={'films'}> Films </NavLink>
            <NavLink to={'planets'}> Planets </NavLink>
            <NavLink to={'starships'}> Starships </NavLink>
            <NavLink to={'vehicles'}> Vehicles </NavLink>
        </NavWrapper>
    );
};

