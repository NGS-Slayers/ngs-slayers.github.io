import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const Button = ({ 
    size = null, // (e.g., 'sm', 'lg', or null)
    outline = false,
    variant = 'primary',
    block = false,
    disabled = false,
    className,
    style,
    link,
    label,
    margin = null
    
}) => {
    const sizeMap = {
        sm: 'sm',
        small: 'sm',
        lg: 'lg',
        large: 'lg',
        medium: null,
    };
    const buttonSize = size ? sizeMap[size] : '';
    const sizeClass = buttonSize ? `button--${buttonSize}` : '';
    const outlineClass = outline ? 'button--outline' : '';
    const variantClass = variant ? `button--${variant}` : '';
    const blockClass = block ? 'button--block' : '';
    const disabledClass = disabled ? 'disabled' : '';
    // If the button is disabled, set the destination to null.
    const destination = disabled ? null : link;

    const button = (
        <Link to={destination}>
            <button
                className={clsx('button', sizeClass, outlineClass, variantClass, blockClass, disabledClass, className)}
                style={style}
                role="button"
                aria-disabled={disabled}
            >
                {label}
            </button>
        </Link>
    );

    if (margin) {
        return <div style={{ margin }}>{button}</div>;
    }

    return button;
};

export default Button;
