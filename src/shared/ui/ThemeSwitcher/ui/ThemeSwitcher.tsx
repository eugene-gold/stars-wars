import { classNames } from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from "app/providers/ThemeProvider";
import  { ReactComponent as LightSide } from 'shared/assets/icons/mando.svg'
import  { ReactComponent as DarkSide } from 'shared/assets/icons/dart.svg'
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme()
    
    return (
        <Button
            theme={ThemeButton.CLEAR} 
            className={classNames(cls.ThemeSwitcher, {}, [className] )}
            onClick={toggleTheme}
        >
           {theme === Theme.DARK ? 
           <DarkSide className={classNames(cls.svgblock, {}, [className])}/> 
           : <LightSide className={classNames(cls.svgblock, {}, [className])}/>}
        </Button>
    );
};