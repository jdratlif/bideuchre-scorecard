import { Player, Team, MainContentEnum } from "./common";

export interface AppState {
  content: MainContentEnum;
  playerCount: number;
  players: Player[];
  teams: Team[];
}
