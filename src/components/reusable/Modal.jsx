import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);

    width: 100vw;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 70%;
    width: fit-content;
    min-height: 50%;
    height: fit-content;

    padding: 40px 20px;

    background: ${({ bg }) => bg || "transparent"};
    border-radius: 5px;
`;

const Modal = ({ children, bg, onClick }) => {
    return (
        <Overlay>
            <Content bg={bg} onClick={onClick}>
                {children}
            </Content>
        </Overlay>
    );
};

export default Modal;
