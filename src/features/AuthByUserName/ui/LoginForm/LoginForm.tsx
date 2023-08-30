import { classNames } from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { InputWithLabel } from "shared/ui/Input/InputWithLabel";
interface LoginFormProps {
    className: string
}

export const LoginForm = ({className}: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <InputWithLabel id="loginName" isFocused >Name</InputWithLabel>
            <InputWithLabel id="loginPass" >Password</InputWithLabel>
            <Button 
                theme={ThemeButton.CLEAR}
                className={cls.loginBtn}
            >{t('Enter')}</Button>
        </div>
    );
};