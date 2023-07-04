import {NavLink} from "react-router-dom";
import {DarkLogo, LightLogo, NavWrapper} from "./styles";
import { useTheme } from "app/providers/ThemeProvider";

export const Navigation = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <NavWrapper className={`nav ${theme}`}>
            {theme === 'light' ? <LightLogo onClick={toggleTheme}/> : <DarkLogo onClick={toggleTheme}/>}                       
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'people'}> People </NavLink>
            <NavLink to={'films'}> Films </NavLink>
            <NavLink to={'planets'}> Planets </NavLink>
            <NavLink to={'starships'}> Starships </NavLink>
            <NavLink to={'vehicles'}> Vehicles </NavLink>
        </NavWrapper>
    );
};

