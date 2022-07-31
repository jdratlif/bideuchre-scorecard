import { ScoreIconEnum, TrumpEnum } from "../types/common";

export const TrumpIcon = {
  [TrumpEnum.Clubs]: ScoreIconEnum.clubs,
  [TrumpEnum.Diamonds]: ScoreIconEnum.diamonds,
  [TrumpEnum.Hearts]: ScoreIconEnum.hearts,
  [TrumpEnum.Spades]: ScoreIconEnum.spades,
  [TrumpEnum.High]: ScoreIconEnum.high,
  [TrumpEnum.Low]: ScoreIconEnum.low,
};
