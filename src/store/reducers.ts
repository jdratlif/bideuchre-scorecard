import { ActionEnum, AppActions } from "../types/actions";
import { AppState } from "../types/state";

export const reducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case ActionEnum.SetMainContent:
      return {
        ...state,
        content: action.payload.content,
      };

    case ActionEnum.SetPlayerCount:
      return {
        ...state,
        playerCount: action.payload.count,
      };

    case ActionEnum.SetPlayerNames:
      return {
        ...state,
        players: action.payload.players,
      };

    case ActionEnum.SetTeamNames:
      return {
        ...state,
        teams: action.payload.teams,
      };

    default:
      console.error("Unhandled action!");
  }

  return state;
};
