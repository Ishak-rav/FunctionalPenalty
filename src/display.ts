import { History } from './history';

export function displayHistory(history: History): void {
    history.forEach((turn, index) => {
        const previousScore = history[index - 1]?.score || { teamA: 0, teamB: 0 };
        const scoreDiffA = turn.score.teamA - previousScore.teamA;
        const scoreDiffB = turn.score.teamB - previousScore.teamB;

        const scoreChangeA = scoreDiffA > 0 ? `+${scoreDiffA}` : '0';
        const scoreChangeB = scoreDiffB > 0 ? `+${scoreDiffB}` : '0';

        console.log(
            `Tir ${index + 1}: Score : ${turn.score.teamA}/${turn.score.teamB} ( ${
                turn.scorer
            } : ${turn.scorer === 'Olympique Lyonnais' ? scoreChangeA : scoreChangeB})`
        );
    });

    const finalScore = history[history.length - 1]?.score;
    if (finalScore) {
        console.log(
            `Victoire : ${
                finalScore.teamA > finalScore.teamB ? 'Olympique Lyonnais' : 'Sainté'
            } (Score final : ${finalScore.teamA}/${finalScore.teamB})`
        );
    }
}