import { MainContentEnum, TrumpEnum } from "../types/common";
import { AppState } from "../types/state";

const initialState: AppState = {
  bidChangeHand: 0,
  content: MainContentEnum.ScoreCard,
  playerCount: 6,
  players: ["Thelma", "Keith", "Geri", "Jon", "David", "Jackie"],
  rounds: [
    {
      dealer: 0,
    },
    // {
    //   bid: {
    //     team: 0,
    //     tricks: 5,
    //     trump: TrumpEnum.Spades,
    //   },
    //   dealer: 0,
    //   contractTricks: 6,
    // },
    // {
    //   bid: {
    //     team: 1,
    //     tricks: 4,
    //     trump: TrumpEnum.Clubs,
    //   },
    //   dealer: 1,
    //   contractTricks: 3,
    // },
    // {
    //   bid: {
    //     team: 0,
    //     tricks: 6,
    //     trump: TrumpEnum.Hearts,
    //   },
    //   dealer: 2,
    //   contractTricks: 5,
    // },
    // {
    //   bid: {
    //     team: 1,
    //     tricks: 5,
    //     trump: TrumpEnum.Diamonds,
    //   },
    //   dealer: 3,
    //   contractTricks: 5,
    // },
    // {
    //   bid: {
    //     team: 0,
    //     tricks: 8,
    //     trump: TrumpEnum.High,
    //     partnersBest: true,
    //   },
    //   dealer: 4,
    //   contractTricks: 8,
    // },
    // {
    //   bid: {
    //     team: 1,
    //     tricks: 8,
    //     trump: TrumpEnum.Low,
    //     shootTheMoon: true,
    //   },
    //   dealer: 5,
    //   contractTricks: 8,
    // },
    // {
    //   dealer: 0,
    // },
  ],
  teams: ["Us", "Them"],
};

export default initialState;
