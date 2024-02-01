import './button.scss';
import { type ReactNode } from "react";

type ButtonProps = { 
    children : ReactNode; 
    className?: string;
    buttonType?: 'white' | 'text' 
}

const getButtonType = (buttonType: ButtonProps['buttonType']) => {
    if (buttonType === 'white') {
        return 'btn--white'
    } 

    if (buttonType === 'text') {
        return 'btn-text'
    }
}

function Button ({ className, buttonType , ...otherProps }: ButtonProps ) {
    return (
            <a href='#' className={`btn btn--animated ${className} ${getButtonType(buttonType)}`} {...otherProps}/>
    );
}

export default Button;