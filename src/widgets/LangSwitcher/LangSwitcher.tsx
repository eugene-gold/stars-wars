import { classNames } from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwicherProps {
    className: string
}

export const LangSwitcher = ({className}: LangSwicherProps) => {

    const { t, i18n } = useTranslation()

    const toggleLang = async () => {
        
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }


    return (
    
        <Button className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR} 
            onClick={toggleLang}
        >
            {t('Lang')}
        </Button>           
    )
};

