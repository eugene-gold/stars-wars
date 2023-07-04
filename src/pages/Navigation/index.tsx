import {NavLink} from "react-router-dom";
import {NavWrapper} from "./styles";
import { useTheme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

export const Navigation = () => {

    const {theme} = useTheme()

    return (
        <NavWrapper className={`nav ${theme}`}>
            <ThemeSwitcher className=""/>                       
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'people'}> People </NavLink>
            <NavLink to={'films'}> Films </NavLink>
            <NavLink to={'planets'}> Planets </NavLink>
            <NavLink to={'starships'}> Starships </NavLink>
            <NavLink to={'vehicles'}> Vehicles </NavLink>
        </NavWrapper>
    );
};

