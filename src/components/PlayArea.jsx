import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Score from "./Score";
import Tik from "./reusable/Tik";
import Tok from "./reusable/Tok";

//----------------------------------------------------------------------------------------------------------------------

const Wrapp = styled.div`
    display: flex;
    gap: 40px;

    min-width: 500px;
    width: fit-content;

    margin: 0 auto;
    padding: 20px;

    background: #535f7d;
`;

const WrappArea = styled.div`
    position: relative;

    display: flex;
    flex-wrap: wrap;

    height: 300px;
    width: 300px;
    gap: 3%;

    border-radius: 5px;
    background: #44415f;
`;

const Cell = styled.div`
    display: flex;

    min-width: 31.3%;
    min-height: 31.3%;

    cursor: pointer;
`;

const Line = styled.div`
    position: absolute;
    top: ${({ posT }) => posT || "0px"};
    left: ${({ posL }) => posL || "0px"};

    height: ${({ h }) => h || `3%`};
    width: ${({ w }) => w || `107%`};

    border-radius: 10px;
    background: ${({ bg }) => bg || `#a855c1`};

    transform: ${({ rotate }) => rotate || `rotate(0deg)`};
`;

//----------------------------------------------------------------------------------------------------------------------

//red line position
const redLine = [
    {
        posT: "43px",
        posL: "10px",
        w: "95%",
        h: "10px",
        rotate: `rotate(0deg)`,
    },
    {
        posT: "145px",
        posL: "10px",
        w: "95%",
        h: "10px",
        rotate: `rotate(0deg)`,
    },
    {
        posT: "250px",
        posL: "10px",
        w: "95%",
        h: "10px",
        rotate: `rotate(0deg)`,
    },
    {
        posT: "8px",
        posL: "43px",
        w: "10px",
        h: "95%",
        rotate: `rotate(0deg)`,
    },
    {
        posT: "8px",
        posL: "145px",
        w: "10px",
        h: "95%",
        rotate: `rotate(0deg)`,
    },
    {
        posT: "8px",
        posL: "250px",
        w: "10px",
        h: "95%",
        rotate: `rotate(0deg)`,
    },
    {
        posT: "146px",
        posL: "-36px",
        w: "125%",
        h: "10px",
        rotate: `rotate(45deg)`,
    },
    {
        posT: "146px",
        posL: "-37px",
        w: "125%",
        h: "10px",
        rotate: `rotate(-45deg)`,
    },
];

//----------------------------------------------------------------------------------------------------------------------

const PlayArea = ({
    isModal,
    playerName_1,
    playerName_2,
    playerScore_1,
    setPlayerScore_1,
    playerScore_2,
    setPlayerScore_2,
}) => {
    //state cells
    const [area, setArea] = useState(Array(9).fill(null));

    //state move
    const [player, setPlayer] = useState(1);

    const [indexWin, setIndexWin] = useState(null);

    //clear area after each turn
    useEffect(() => {
        if (!player) {
            setTimeout(() => {
                setArea(Array(9).fill(null));
                setPlayer(1);
                setIndexWin(null);
            }, 1800);
        }
    }, [player]);

    //player turn logic
    const handleClick = (indexCell) => {
        //copy area
        const newArea = [...area];

        //update play area logic
        newArea[indexCell] =
            player === 1 ? <Tik /> : player === 2 ? <Tok /> : null;

        //update play area visual
        setArea(newArea);

        //change player
        setPlayer(player === 1 ? 2 : 1);

        //check for winner
        checkWin(newArea);
    };

    //checker for win
    const checkWin = (win) => {
        const thisPlay = player === 1 ? `Tik` : player === 2 ? `Tok` : null;

        //check for win combination
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winCombinations.length; i++) {
            const row = winCombinations[i];

            if (
                win[row[0]] &&
                "type" in win[row[0]] &&
                win[row[0]].type.name === thisPlay &&
                win[row[1]] &&
                "type" in win[row[1]] &&
                win[row[1]].type.name === thisPlay &&
                win[row[2]] &&
                "type" in win[row[2]] &&
                win[row[2]].type.name === thisPlay
            ) {
                setIndexWin(winCombinations.indexOf(winCombinations[i]));

                if (player === 1) setPlayerScore_1((score) => score + 1);

                if (player === 2) setPlayerScore_2((score) => score + 1);

                setPlayer(null);
                return;
            }
        }
    };

    return (
        <Wrapp>
            <WrappArea>
                {area.map((cell, indexCell) => (
                    <Cell
                        key={indexCell}
                        onClick={() => cell ?? handleClick(indexCell)}
                    >
                        {cell}
                    </Cell>
                ))}

                {/* Purpul lines */}
                <Line posT={`-10px`} posL={`95px`} w={`3%`} h={`107%`} />
                <Line posT={`-10px`} posL={`197px`} w={`3%`} h={`107%`} />

                <Line posT={`95px`} posL={`-10px`} w={`107%`} h={`3%`} />
                <Line posT={`197px`} posL={`-10px`} w={`107%`} h={`3%`} />

                {indexWin !== null ? (
                    <Line
                        bg={`red`}
                        posT={redLine[indexWin].posT}
                        posL={redLine[indexWin].posL}
                        w={redLine[indexWin].w}
                        h={redLine[indexWin].h}
                        rotate={redLine[indexWin].rotate}
                    />
                ) : null}
            </WrappArea>

            {playerName_1 && playerName_2 && !isModal ? (
                <Score
                    area={area}
                    player={player}
                    setPlayer={setPlayer}
                    playerName_1={playerName_1}
                    playerName_2={playerName_2}
                    playerScore_1={playerScore_1}
                    setPlayerScore_1={setPlayerScore_1}
                    playerScore_2={playerScore_2}
                    setPlayerScore_2={setPlayerScore_2}
                />
            ) : (
                <></>
            )}
        </Wrapp>
    );
};

export default PlayArea;
