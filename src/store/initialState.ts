import { MainContentEnum } from "../types/common";
import { AppState } from "../types/state";

const initialState: AppState = {
  content: MainContentEnum.ScoreCard,
  playerCount: 6,
  players: ["Thelma", "Keith", "Geri", "Jon", "David", "Jackie"],
  teams: ["Us", "Them"],
};

export default initialState;
