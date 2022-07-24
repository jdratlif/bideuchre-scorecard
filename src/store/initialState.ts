import { MainContentEnum } from "../types/common";
import { AppState } from "../types/state";

const initialState: AppState = {
  content: MainContentEnum.ScoreCard,
  teams: ["Us", "Them"],
  players: ["Thelma", "Keith", "Geri", "Jon", "David", "Jackie"],
};

export default initialState;
