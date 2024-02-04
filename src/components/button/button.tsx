import './button.scss';
import { type ReactNode } from "react";

type ButtonProps = { 
    children : ReactNode; 
    className?: string;
    buttonType?: 'white' | 'text' | 'green'
}

const getButtonType = (buttonType: ButtonProps['buttonType']) => {
    if (buttonType === 'white') {
        return 'btn--white'
    } 

    if (buttonType === 'text') {
        return 'btn-text'
    }

    if (buttonType === 'green')
        return 'btn--green'
}

function Button ({ className, buttonType , ...otherProps }: ButtonProps ) {
    return (
            <a href='#' className={`btn btn--animated ${className} ${getButtonType(buttonType)}`} {...otherProps}/>
    );
}

export default Button;