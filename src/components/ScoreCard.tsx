import { useContext, useEffect } from "react";

import Button from "./Button";
import ScoreCardHeader from "./ScoreCardHeader";
import ScoreCardRow from "./ScoreCardRow";

import { AppContext } from "../store/store";

import { ActionEnum } from "../types/actions";
import { MainContentEnum } from "../types/common";

import { summarizeGame } from "../util";

const ScoreCard = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("scorecard", JSON.stringify(state));
  }, [state]);

  const onClickTeamName = () => {
    dispatch({
      type: ActionEnum.SetMainContent,
      payload: { content: MainContentEnum.PlayerForm },
    });
  };

  const onClickNewGameButton = () => {
    if (confirm("Really start new game?")) {
      dispatch({
        type: ActionEnum.NewGame,
      });
    }
  };

  return (
    <>
      <div className="mx-4 mt-4 mb-2">
        <table className="min-w-full table-fixed border-2 border-black">
          <thead>
            <tr>
              <ScoreCardHeader onClickHandler={onClickTeamName}>
                {state.teams[0]}
              </ScoreCardHeader>
              <ScoreCardHeader onClickHandler={onClickTeamName}>
                {state.teams[1]}
              </ScoreCardHeader>
              <ScoreCardHeader>Bid</ScoreCardHeader>
              <ScoreCardHeader>Dealer</ScoreCardHeader>
            </tr>
          </thead>
          <tbody className="text-lg">
            {state.rounds.map((_, index) => (
              <ScoreCardRow key={index} handNumber={index} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="my-4">
        <p className="text-center text-2xl">
          {summarizeGame(state.rounds, state.teams, state.playerCount)}
        </p>
      </div>

      <div className="text-center">
        <Button
          label="New Game"
          onClick={onClickNewGameButton}
          foreground="text-yellow-400"
          background="bg-blue-800"
          highlight="hover:bg-blue-600"
        />
      </div>
    </>
  );
};

export default ScoreCard;
