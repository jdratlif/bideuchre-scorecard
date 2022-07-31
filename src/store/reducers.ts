import { ActionEnum, AppActions } from "../types/actions";
import { AppState } from "../types/state";

export const reducer = (state: AppState, action: AppActions): AppState => {
  let rounds = state.rounds;

  switch (action.type) {
    case ActionEnum.ChangeBid:
      return {
        ...state,
        bidChangeHand: action.payload.handNumber,
      };

    case ActionEnum.ChangeDealer:
      rounds[action.payload.handNumber].dealer = action.payload.dealer;

      return {
        ...state,
        rounds,
      };

    case ActionEnum.NewGame:
      return {
        ...state,
        rounds: [
          {
            dealer: 0,
          },
        ],
      };

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

    case ActionEnum.SubmitChangedBid:
      const handNumber = action.payload.handNumber;
      let round = rounds[handNumber];

      round.bid = action.payload.bid;
      round.contractTricks = action.payload.contractTricks;

      if (action.payload.contractTricks !== undefined) {
        const currentRound = rounds.length - 1;

        if (handNumber == currentRound) {
          rounds.push({
            dealer: (round.dealer! + 1) % state.playerCount,
          });
        }
      }

      return {
        ...state,
        rounds,
      };

    default:
      console.error("Unhandled action!");
  }

  return state;
};
