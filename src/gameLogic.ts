import { simulatePenalty } from './simulation';

export type Team = 'Olympique Lyonnais' | 'Sainté';

export interface Score {
    teamA: number;
    teamB: number;
}

export interface TurnResult {
    scorer: Team;
    score: Score;
}

export function takeTurn(team: Team, currentScore: Score): TurnResult {
    const scored = simulatePenalty();
    const updatedScore = { ...currentScore };

    if (scored) {
        if (team === 'Olympique Lyonnais') updatedScore.teamA += 1;
        else updatedScore.teamB += 1;
    }

    return {
        scorer: team,
        score: updatedScore,
    };
}
