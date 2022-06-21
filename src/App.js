import React, { useState } from "react";
import styled from "styled-components";

import PlayArea from "./components/PlayArea";
import Modal from "./components/reusable/Modal";
import StartWindow from "./components/StartWindow";

const Wrapp = styled.div``;

function App() {
    const [isModal, setIsModal] = useState(true);

    const [playerName_1, setPlayerName_1] = useState("");
    const [playerName_2, setPlayerName_2] = useState("");

    const [playerScore_1, setPlayerScore_1] = useState(0);
    const [playerScore_2, setPlayerScore_2] = useState(0);

    return (
        <Wrapp>
            {isModal ? (
                <Modal bg={`#535f7d`}>
                    <StartWindow
                        setIsModal={setIsModal}
                        playerName_1={playerName_1}
                        setPlayerName_1={setPlayerName_1}
                        playerName_2={playerName_2}
                        setPlayerName_2={setPlayerName_2}
                    />
                </Modal>
            ) : (
                <PlayArea
                    isModal={isModal}
                    playerName_1={playerName_1}
                    playerName_2={playerName_2}
                    playerScore_1={playerScore_1}
                    setPlayerScore_1={setPlayerScore_1}
                    playerScore_2={playerScore_2}
                    setPlayerScore_2={setPlayerScore_2}
                />
            )}
        </Wrapp>
    );
}

export default App;
