import { useContext } from "react";

import ScoreCardEntry from "./ScoreCardEntry";
import ScoreCardHeader from "./ScoreCardHeader";
import ScoreIcon from "./ScoreIcon";

import { AppContext } from "../store/store";

import { ActionEnum } from "../types/actions";
import { MainContentEnum, ScoreIconEnum } from "../types/common";

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
            <tr className="bg-slate-100">
              <ScoreCardEntry>0</ScoreCardEntry>
              <ScoreCardEntry>0</ScoreCardEntry>
              <ScoreCardEntry>
                Team A<br />5<ScoreIcon icon={ScoreIconEnum.spades} />
                <ScoreIcon icon={ScoreIconEnum.smile} />
              </ScoreCardEntry>
              <ScoreCardEntry>{state.players[0]}</ScoreCardEntry>
            </tr>
            <tr className="bg-slate-300">
              <ScoreCardEntry>5</ScoreCardEntry>
              <ScoreCardEntry>3</ScoreCardEntry>
              <ScoreCardEntry>
                Team B<br />4<ScoreIcon icon={ScoreIconEnum.clubs} />
                <ScoreIcon icon={ScoreIconEnum.smile} />
              </ScoreCardEntry>
              <ScoreCardEntry>{state.players[1]}</ScoreCardEntry>
            </tr>
            <tr className="bg-slate-100">
              <ScoreCardEntry>9</ScoreCardEntry>
              <ScoreCardEntry>7</ScoreCardEntry>
              <ScoreCardEntry>
                Team A<br />6<ScoreIcon icon={ScoreIconEnum.hearts} />
                <ScoreIcon icon={ScoreIconEnum.storm} />
              </ScoreCardEntry>
              <ScoreCardEntry>{state.players[2]}</ScoreCardEntry>
            </tr>
            <tr className="bg-slate-300">
              <ScoreCardEntry>3</ScoreCardEntry>
              <ScoreCardEntry>10</ScoreCardEntry>
              <ScoreCardEntry>
                Team B<br />5<ScoreIcon icon={ScoreIconEnum.diamonds} />
                <ScoreIcon icon={ScoreIconEnum.smile} />
              </ScoreCardEntry>
              <ScoreCardEntry>{state.players[3]}</ScoreCardEntry>
            </tr>
            <tr className="bg-slate-100">
              <ScoreCardEntry>6</ScoreCardEntry>
              <ScoreCardEntry>15</ScoreCardEntry>
              <ScoreCardEntry>
                Team A<br />
                <ScoreIcon icon={ScoreIconEnum.star} />
                <ScoreIcon icon={ScoreIconEnum.high} />
                <ScoreIcon icon={ScoreIconEnum.smile} />
              </ScoreCardEntry>
              <ScoreCardEntry>{state.players[4]}</ScoreCardEntry>
            </tr>
            <tr className="bg-slate-300">
              <ScoreCardEntry>22</ScoreCardEntry>
              <ScoreCardEntry>15</ScoreCardEntry>
              <ScoreCardEntry>
                Team B<br />
                <ScoreIcon icon={ScoreIconEnum.moon} />
                <ScoreIcon icon={ScoreIconEnum.low} />
                <ScoreIcon icon={ScoreIconEnum.smile} />
              </ScoreCardEntry>
              <ScoreCardEntry>{state.players[5]}</ScoreCardEntry>
            </tr>
            <tr className="bg-slate-100">
              <ScoreCardEntry>22</ScoreCardEntry>
              <ScoreCardEntry>63</ScoreCardEntry>
              <ScoreCardEntry>None</ScoreCardEntry>
              <ScoreCardEntry>{state.players[0]}</ScoreCardEntry>
            </tr>
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
