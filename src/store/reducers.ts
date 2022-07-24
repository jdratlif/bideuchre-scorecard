import { ActionEnum, AppActions, Messages } from "../types/actions";
import { AppState } from "../types/state";

/*
  Thanks to Shane Osbourne
  https://medium.com/hackernoon/finally-the-typescript-redux-hooks-events-blog-you-were-looking-for-c4663d823b01
*/
const createMessage = <Obj extends { [index: string]: any }>() => {
  return <Key extends keyof Obj>(
    name: Key,
    ...args: Obj[Key] extends undefined ? [] : [Obj[Key]]
  ) => {
    if (args.length > 0) {
      return { type: name, payload: args[0] };
    }
    return { type: name };
  };
};

export const Message = createMessage<Messages>();

export const reducer = (state: AppState, action: AppActions) => {
  switch (action.type) {
    case ActionEnum.SetPlayerNames:
      console.log("set player names...");
      break;

    case ActionEnum.SetTeamNames:
      console.log("set team names...");
      break;
  }

  return state;
};