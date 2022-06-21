import styled from "styled-components";

const TikStyled = styled.div`
    position: relative;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 43px;

        width: 10px;
        height: 95px;

        background-color: silver;
        transform: rotate(-45deg);
    }

    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 43px;

        width: 10px;
        height: 95px;

        background-color: silver;

        transform: rotate(45deg);
    }
`;

const Tik = () => {
    return <TikStyled />;
};

export default Tik;
