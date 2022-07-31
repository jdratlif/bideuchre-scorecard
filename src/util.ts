import { Round, Team } from "./types/common";

export const getScores = (
  handNumber: number,
  rounds: Round[],
  players: number = 6
): [number, number] => {
  let scores: [number, number] = [0, 0];

  if (handNumber > 0) {
    for (let i = 0; i < handNumber; i++) {
      const roundScores = scoreRound(rounds[i], players);

      scores[0] += roundScores[0];
      scores[1] += roundScores[1];
    }
  }

  return scores;
};

export const isContractMade = (round: Round): boolean => {
  if (round.bid && round.contractTricks) {
    return round.contractTricks >= round.bid.tricks;
  }

  return false;
};

export const scoreRound = (round: Round, players: number): [number, number] => {
  let scores: [number, number] = [0, 0];

  const totalTricks = players == 6 ? 8 : 12;

  if (round.bid && round.contractTricks !== undefined) {
    const otherTeam = round.bid.team == 0 ? 1 : 0;
    const otherTeamPoints = totalTricks - round.contractTricks;

    let teamPoints: number = 0;

    if (isContractMade(round)) {
      teamPoints = round.contractTricks;
    } else {
      teamPoints = -round.bid.tricks;
    }

    if (round.bid.partners_best) {
      teamPoints *= 2;
    } else if (round.bid.shoot_the_moon) {
      teamPoints *= 4;
    }

    scores[round.bid.team] += teamPoints;
    scores[otherTeam] += otherTeamPoints;
  }

  return scores;
};

export const summarizeGame = (
  rounds: Round[],
  teams: Team[],
  players: number = 6
) => {
  const scores = getScores(rounds.length, rounds, players);

  if (scores[0] >= 54 || scores[1] <= -54) {
    return `Winner: ${teams[0]}`;
  } else if (scores[1] >= 54 || scores[0] <= -54) {
    return `Winner: ${teams[1]}`;
  } else if (scores[0] > scores[1]) {
    return `${teams[0]}: Winning by ${scores[0] - scores[1]}`;
  } else if (scores[1] > scores[0]) {
    return `${teams[1]}: Winning by ${scores[1] - scores[0]}`;
  }

  return "The score is tied";
};
