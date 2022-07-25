import { MainContentEnum, Player, Round, Team } from "./common";

export interface AppState {
  content: MainContentEnum;
  playerCount: number;
  players: Player[];
  rounds: Round[];
  teams: Team[];
}
