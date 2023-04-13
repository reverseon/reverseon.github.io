import React from "react";
import "../scss/Button.scss";
const Button: React.FC<
    {
        className?: string;
        onClick?: () => void;
        text?: string;
        style?: React.CSSProperties;
        backgroundImage?: string;
        radius?: string;
        padding?: string;
        cursor?: string;
    }
> = (
    {
        className,
        radius,
        onClick,
        text,
        style,
        backgroundImage,
        padding,
        cursor
    }
) => {
    return (
        <div className={`btn-overlay ${className}`} style={{
            ...style,
            backgroundImage: backgroundImage,
            borderRadius: radius,
        }} onClick={onClick}>
            <div className={"btn-inside"} style={{
                borderRadius: radius,
                padding: padding,
                cursor: cursor,
            }}>
                {text}
            </div>
        </div>
    )
}

export default Button;