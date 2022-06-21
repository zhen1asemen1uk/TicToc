import { useEffect } from "react";
import styled from "styled-components";
import Modal from "./reusable/Modal";

const ScoreBlock = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;

    font-size: 30px;
    color: white;
`;

const PlayerNameBlock = styled.span`
    text-decoration: ${({ player }) => player && "underline"};
`;

const Score = ({
    area,
    player,
    setPlayer,
    playerName_1,
    playerName_2,
    playerScore_1,
    setPlayerScore_1,
    playerScore_2,
    setPlayerScore_2,
}) => {
    //check draw
    useEffect(() => {
        if (!area.includes(null) && `Draw`) {
            setPlayerScore_1((score) => score + 1);
            setPlayerScore_2((score) => score + 1);
        }
    }, [area, setPlayerScore_1, setPlayerScore_2]);

    return (
        <ScoreBlock>
            <span>Score</span>
            <PlayerNameBlock
                player={player === 1 && true}
            >{`${playerName_1}: ${playerScore_1}`}</PlayerNameBlock>
            <PlayerNameBlock
                player={player === 2 && true}
            >{`${playerName_2}: ${playerScore_2}`}</PlayerNameBlock>

            {!area.includes(null) && (
                <Modal onClick={() => setPlayer(null)}>DRAW</Modal>
            )}
        </ScoreBlock>
    );
};

export default Score;
