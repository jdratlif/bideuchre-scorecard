import { useContext } from "react";

import ScoreCardEntry from "./ScoreCardEntry";
import ScoreDisplay from "./ScoreDisplay";
import ScoreIcon from "./ScoreIcon";

import { AppContext } from "../store/store";
import { ScoreIconEnum, TrumpEnum } from "../types/common";

import { getScores, isContractMade, scoreRound } from "../util";

interface ScoreCardRowProps {
  handNumber: number;
}

const TrumpIcon = {
  [TrumpEnum.Clubs]: ScoreIconEnum.clubs,
  [TrumpEnum.Diamonds]: ScoreIconEnum.diamonds,
  [TrumpEnum.Hearts]: ScoreIconEnum.hearts,
  [TrumpEnum.Spades]: ScoreIconEnum.spades,
  [TrumpEnum.High]: ScoreIconEnum.high,
  [TrumpEnum.Low]: ScoreIconEnum.low,
};

const ScoreCardRow: React.FC<ScoreCardRowProps> = ({ handNumber }) => {
  const { state } = useContext(AppContext);

  const round = state.rounds[handNumber];
  const rowColor = handNumber % 2 == 0 ? "bg-slate-100" : "bg-slate-300";

  let team: string | null = null;
  let tricks: number | null = null;
  let tricksIcon: ScoreIconEnum | null = null;
  let trumpIcon: ScoreIconEnum | null = null;
  let contractIcon: ScoreIconEnum | null = null;

  if (round.bid) {
    team = state.teams[round.bid.team];
    tricks = round.bid.tricks;
    trumpIcon = TrumpIcon[round.bid.trump];

    if (round.bid.partners_best) {
      tricks = null;
      tricksIcon = ScoreIconEnum.star;
    }

    if (round.bid.shoot_the_moon) {
      tricks = null;
      tricksIcon = ScoreIconEnum.moon;
    }

    if (round.contractTricks !== undefined) {
      contractIcon = isContractMade(round)
        ? ScoreIconEnum.smile
        : ScoreIconEnum.storm;
    }
  }

  const currentScores = getScores(handNumber, state.rounds, state.playerCount);
  const roundScore = scoreRound(round, state.playerCount);

  return (
    <tr className={rowColor}>
      <ScoreCardEntry>
        <ScoreDisplay score={currentScores[0]} change={roundScore[0]} />
      </ScoreCardEntry>
      <ScoreCardEntry>
        <ScoreDisplay score={currentScores[1]} change={roundScore[1]} />
      </ScoreCardEntry>
      <ScoreCardEntry>
        {round.bid && (
          <>
            {team}
            <br />
            {tricks && tricks}
            {tricksIcon && <ScoreIcon icon={tricksIcon} />}
            {trumpIcon && <ScoreIcon icon={trumpIcon} />}
            {contractIcon && <ScoreIcon icon={contractIcon} />}
          </>
        )}
      </ScoreCardEntry>
      <ScoreCardEntry>
        {round.dealer !== undefined && state.players[round.dealer]}
      </ScoreCardEntry>
    </tr>
  );
};

export default ScoreCardRow;
