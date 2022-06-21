import React from "react";
import styled from "styled-components";

const WrappButton = styled.button`
    ${({ pos }) => pos && `position: ${pos}`};
    ${({ pos_T }) => pos_T && `top: ${pos_T}`};
    ${({ pos_L }) => pos_L && `left: ${pos_L}`};
    ${({ pos_R }) => pos_R && `right: ${pos_R}`};
    ${({ pos_B }) => pos_B && `bottom: ${pos_B}`};

    display: flex;
    justify-content: center;
    align-items: center;

    padding: ${({ p }) => p || `0`};
    margin: ${({ m }) => m || `0`};

    background: ${({ bgColor, sec }) =>
        bgColor ? bgColor : sec ? `transparent` : `#44415f`};

    border: ${({ sec }) => (sec ? `1px solid #494e5b` : `none`)};
    border-radius: 5px;

    font-style: normal;
    font-weight: 600;

    text-align: center;
    letter-spacing: 0.75px;
    text-transform: uppercase;

    color: ${({ sec }) => (sec ? `#E2C32B` : `#a855c1`)};

    transition: 0.2s;
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    :hover {
        background: ${({ disabled, sec }) =>
            disabled && sec
                ? `transparent`
                : disabled
                ? "#e2c32b"
                : sec
                ? `transparent`
                : `#a855c1`};

        color: ${({ disabled, sec }) =>
            disabled && sec
                ? `E2C32B`
                : disabled
                ? "#494E5B"
                : sec
                ? `#FFE252`
                : `#494E5B`};
    }

    :active {
        background: ${({ disabled, sec }) =>
            disabled && sec
                ? "transparent"
                : disabled
                ? "#e2c32b"
                : sec
                ? `transparent`
                : `#a855a5`};

        color: ${({ disabled, sec }) =>
            disabled && sec
                ? "#E2C32B"
                : disabled
                ? "#494E5B"
                : sec
                ? `#D8B300`
                : `#494E5B`};
    }

    height: ${({ h }) => h || `46px`};
    width: ${({ w }) => w || `215px`};
`;

const Button = ({
    onClick,
    word = `Button`,

    pos,
    pos_T,
    pos_L,
    pos_R,
    pos_B,

    secondary,

    h,
    w,
    p,
    m,

    disabled,
    bgColor,
    as = "button",
    type = "button",
}) => {
    return (
        <WrappButton
            pos={pos}
            pos_T={pos_T}
            pos_L={pos_L}
            pos_R={pos_R}
            pos_B={pos_B}
            h={h}
            w={w}
            p={p}
            m={m}
            sec={secondary}
            disabled={disabled}
            bgColor={bgColor}
            as={as}
            type={type}
            onClick={onClick}
        >
            {word}
        </WrappButton>
    );
};

export default Button;
