import { useContext } from "react";

import TextField from "./TextField";

import { AppContext } from "../store/store";
import { ActionEnum } from "../types/actions";

const PlayerNames = () => {
  const { state, dispatch } = useContext(AppContext);

  const onChangePlayerCount = (count: number) => {
    dispatch({ type: ActionEnum.SetPlayerCount, payload: { count } });
  };

  return (
    <div className="mb-2">
      <h4 className="mb-2 border-b border-black text-center font-bold">
        Player Names
      </h4>

      <TextField
        name="player_name_1"
        label="First"
        placeholder="Enter player name"
      />
      <TextField
        name="player_name_2"
        label="Second"
        placeholder="Enter player name"
      />
      <TextField
        name="player_name_3"
        label="Third"
        placeholder="Enter player name"
      />
      <TextField
        name="player_name_4"
        label="Fourth"
        placeholder="Enter player name"
      />
      {state.playerCount == 6 && (
        <>
          <TextField
            name="player_name_5"
            label="Fifth"
            placeholder="Enter player name"
          />
          <TextField
            name="player_name_6"
            label="Sixth"
            placeholder="Enter player name"
          />
        </>
      )}
      <div className="flex justify-center">
        <div className="mx-2">
          <input
            type="radio"
            checked={state.playerCount == 4}
            onChange={() => onChangePlayerCount(4)}
          />{" "}
          4 Players
        </div>
        <div className="mx-2">
          <input
            type="radio"
            checked={state.playerCount == 6}
            onChange={() => onChangePlayerCount(6)}
          />{" "}
          6 Players
        </div>
      </div>
    </div>
  );
};

export default PlayerNames;
