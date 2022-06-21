import { useState } from "react";
import styled from "styled-components";
import Button from "./reusable/Button";
import Input from "./reusable/Input";

const Wrapp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    width: 500px;

    h1,
    span {
        color: white;
    }

    label {
        width: 100%;
    }
`;

const StartWindow = ({
    playerName_1,
    setPlayerName_1,
    playerName_2,
    setPlayerName_2,
    setIsModal,
}) => {
    const [error, setError] = useState(false);

    function sendNames() {
        playerName_1 && playerName_2 && playerName_1 !== playerName_2
            ? setIsModal(false)
            : setError(true);
    }

    return (
        <Wrapp>
            <h1>Enter player name</h1>

            <label>
                <span>Player 1:</span>
                <Input
                    value={playerName_1}
                    setValue={setPlayerName_1}
                    error={
                        (error && !playerName_1) ||
                        (error && playerName_1 === playerName_2)
                            ? "Empty field"
                            : false
                    }
                />
            </label>

            <label>
                <span>Player 2:</span>
                <Input
                    value={playerName_2}
                    setValue={setPlayerName_2}
                    error={
                        (error && !playerName_2) ||
                        (error && playerName_1 === playerName_2)
                            ? "Empty field"
                            : false
                    }
                />
            </label>

            <Button onClick={sendNames}>I writed names!</Button>
        </Wrapp>
    );
};

export default StartWindow;
