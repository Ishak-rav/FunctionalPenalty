import { takeTurn } from './gameLogic';
import { addToHistory, History } from './history';
import { displayHistory } from './display';

let currentScore = { teamA: 0, teamB: 0 };
let history: History = [];
let turn = 0;

while (true) {
    const team = turn % 2 === 0 ? 'Olympique Lyonnais' : 'Sainté';
    const result = takeTurn(team, currentScore);

    currentScore = result.score;
    history = addToHistory(history, result);
    turn++;

    if (
        turn >= 10 &&
        Math.abs(currentScore.teamA - currentScore.teamB) > 0
    ) {
        break;
    }
}

displayHistory(history);
