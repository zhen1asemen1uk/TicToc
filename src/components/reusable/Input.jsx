import styled from "styled-components";

const Wrapp = styled.div`
    position: relative;

    margin: ${({ m }) => m || `0`};

    height: ${({ h }) => h || `auto`};
    width: ${({ w }) => w || `100%`};
`;

const StyledInput = styled.input`
    padding: ${({ p }) => p || `5px 10px`};
    border: 2px solid
        ${({ error, activeBorder }) =>
            error ? "#FF0018" : activeBorder ? `#e2c32b` : "#494E5B"};
    border-radius: 4px;
    outline: none;

    width: 100%;
    height: 100%;

    background-color: #44415f;
    color: ${({ error }) => (error ? "#FF0018" : "white")};

    text-align: ${({ ta }) => ta || "left"};
    font-size: ${({ fz }) => fz || "16px"};

    transition: border 250ms ease, color 250ms ease;

    box-shadow: ${({ shadow }) =>
        shadow ? `0px 4px 15px rgba(0, 0, 0, 0.15)` : "none"};

    ::placeholder {
        color: ${({ error }) => (error ? "#FF0018" : "#8f8f8f")};
    }

    :focus {
        border-color: #a855c1;
    }
`;

const Input = ({
    error,
    shadow,
    activeBorder,
    value,
    setValue,
    placeholder,
    disabled,
    type = "text",
    onFocus,

    h,
    w,
    p,
    m,
    ta,
    fz,
}) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <Wrapp h={h} w={w} m={m}>
            <StyledInput
                error={error}
                shadow={shadow}
                activeBorder={activeBorder}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={handleChange}
                onFocus={onFocus}
                p={p}
                ta={ta}
                fz={fz}
            />
        </Wrapp>
    );
};

export default Input;
