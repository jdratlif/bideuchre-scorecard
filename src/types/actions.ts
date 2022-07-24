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
  SetTeamNames = "SetTeamNames",
  SetPlayerNames = "SetPlayerNames",
}

export type Messages = {
  [ActionEnum.SetPlayerNames]: { names: string[] };
  [ActionEnum.SetTeamNames]: { names: string[] };
};

export type AppActions = ActionMap<Messages>[keyof ActionMap<Messages>];
