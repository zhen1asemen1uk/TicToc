import styled from "styled-components";

const TokStyled = styled.div`
    position: relative;

    ::before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;

        width: 85px;
        height: 85px;

        background-color: silver;
        border-radius: 50%;
    }

    ::after {
        content: "";
        position: absolute;
        top: 12.5px;
        left: 12.5px;

        width: 70px;
        height: 70px;

        background-color: #44415f;
        border-radius: 50%;
    }
`;

const Tok = () => {
    return <TokStyled />;
};

export default Tok;
