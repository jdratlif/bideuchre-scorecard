export interface Bid {
  team: number;
  tricks: number;
  trump: TrumpEnum;
  partnersBest?: boolean;
  shootTheMoon?: boolean;
}

export enum MainContentEnum {
  BidChangeForm,
  DealerChangeForm,
  PlayerForm,
  ScoreCard,
}

export type Player = string;

export interface Round {
  bid?: Bid;
  dealer?: number;
  contractTricks?: number;
}

export enum ScoreIconEnum {
  clubs = "clubs",
  diamonds = "diamonds",
  hearts = "hearts",
  spades = "spades",
  high = "high",
  low = "low",
  star = "star",
  moon = "moon",
  smile = "smile",
  storm = "storm",
}

export type Team = string;

export enum TrumpEnum {
  Clubs,
  Diamonds,
  Hearts,
  Spades,
  High,
  Low,
}
