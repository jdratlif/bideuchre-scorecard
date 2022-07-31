import { Bid, MainContentEnum } from "./common";

/*
  Thanks to Shane Osbourne
  https://medium.com/hackernoon/finally-the-typescript-redux-hooks-events-blog-you-were-looking-for-c4663d823b01
*/
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum ActionEnum {
  ChangeBid = "ChangeBid",
  ChangeDealer = "ChangeDealer",
  NewGame = "NewGame",
  SetMainContent = "SetMainContent",
  SetPlayerCount = "SetPlayerCount",
  SetPlayerNames = "SetPlayerNames",
  SetTeamNames = "SetTeamNames",
  SubmitChangedBid = "SubmitChangedBid",
}

export type Messages = {
  [ActionEnum.ChangeBid]: { handNumber: number };
  [ActionEnum.ChangeDealer]: { handNumber: number; dealer: number };
  [ActionEnum.NewGame]: undefined;
  [ActionEnum.SetMainContent]: { content: MainContentEnum };
  [ActionEnum.SetPlayerCount]: { count: number };
  [ActionEnum.SetPlayerNames]: { players: string[] };
  [ActionEnum.SetTeamNames]: { teams: string[] };
  [ActionEnum.SubmitChangedBid]: {
    handNumber: number;
    bid: Bid;
    contractTricks?: number;
  };
};

export type AppActions = ActionMap<Messages>[keyof ActionMap<Messages>];
