import { Player, Team, MainContentEnum } from "./common";

export interface AppState {
  content: MainContentEnum;
  teams: Team[];
  players: Player[];
}
