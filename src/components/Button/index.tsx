import { FC, MouseEventHandler } from "react"

type ButtonProps = {
    children: React.ReactNode,
    disabled?: boolean,
    className?: string,
    type?: 'button' | 'submit',
    onClick: MouseEventHandler<HTMLElement>
}

export const Button: FC<ButtonProps> = ({children, type ='button', onClick, ...rest }) => {
    return (
        <button type={type} onClick={onClick} {...rest}>
            {children}
        </button>
    )
}