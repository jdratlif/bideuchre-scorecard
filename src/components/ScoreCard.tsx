import { useContext } from "react";

import ScoreCardHeader from "./ScoreCardHeader";
import ScoreCardRow from "./ScoreCardRow";

import { AppContext } from "../store/store";

import { ActionEnum } from "../types/actions";
import { MainContentEnum } from "../types/common";

const ScoreCard = () => {
  const { state, dispatch } = useContext(AppContext);

  const onClickTeamName = () => {
    dispatch({
      type: ActionEnum.SetMainContent,
      payload: { content: MainContentEnum.PlayerForm },
    });
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

      <div className="mt-4 text-center">
        <p>Winner: {state.teams[1]}</p>
      </div>

      <div className="text-center">
        <button>New Game</button>
      </div>
    </>
  );
};

export default ScoreCard;
