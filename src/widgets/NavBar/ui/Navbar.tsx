import {NavLink} from "react-router-dom";
import {NavWrapper} from "./styles";
import cls from './Navbar.module.scss'
import { useTheme } from "app/providers/ThemeProvider";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export const Navbar = () => {

    const {theme} = useTheme()
    const {t} = useTranslation()

    return (
        <NavWrapper className={`nav ${theme}`}>
            <ThemeSwitcher className=""/>                       
            <NavLink to={'/'}>{t('Home')}</NavLink>
            <NavLink to={'people'}>{t('People')}</NavLink>
            <NavLink to={'films'}>{t('Films')}</NavLink>
            <NavLink to={'planets'}>{t('Planets')}</NavLink>
            <NavLink to={'starships'}>{t('Starships')}</NavLink>
            <NavLink to={'vehicles'}>{t('Vehicles')}</NavLink>
            <LangSwitcher className={cls.lang}/>
        </NavWrapper>
    );
};

