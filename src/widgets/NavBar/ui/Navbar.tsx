import {NavLink} from "react-router-dom";
import {NavWrapper} from "./styles";
import cls from './Navbar.module.scss'
import { useTheme } from "app/providers/ThemeProvider";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUserName/ui/LoginModal/LoginModal";

interface NavbarProps {
    className: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const {theme} = useTheme()

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <NavWrapper className={classNames(cls.Navbar, {}, [className, theme])}
        >
            <ThemeSwitcher className=""/>                       
            <NavLink to={'/'}>{t('Home')}</NavLink>
            <NavLink to={'people'}>{t('People')}</NavLink>
            <NavLink to={'films'}>{t('Films')}</NavLink>
            <NavLink to={'planets'}>{t('Planets')}</NavLink>
            <NavLink to={'starships'}>{t('Starships')}</NavLink>
            <NavLink to={'vehicles'}>{t('Vehicles')}</NavLink>
            <LangSwitcher className={cls.lang}/>
            
            <Button 
                theme={ThemeButton.CLEAR}
                className={cls.enterBtn}
                onClick={onShowModal}
            >{t('Enter')}</Button>
            
            <LoginModal 
                isOpen={isAuthModal}
                className=""
                onClose={onCloseModal}
             
            />
        </NavWrapper>
    );
};

