import { MainContentEnum, Player, Round, Team } from "./common";

export interface AppState {
  bidChangeHand: number;
  content: MainContentEnum;
  playerCount: number;
  players: Player[];
  rounds: Round[];
  teams: Team[];
}
