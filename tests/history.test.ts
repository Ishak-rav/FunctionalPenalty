import { addToHistory, History } from '../src/history';
import { TurnResult } from '../src/gameLogic';

describe('addToHistory', () => {
    it('should add a turn result to the history', () => {
        const history: History = [];
        const turnResult: TurnResult = {
            scorer: 'Olympique Lyonnais',
            score: { teamA: 1, teamB: 0 },
        };

        const updatedHistory = addToHistory(history, turnResult);

        expect(updatedHistory).toHaveLength(1);
        expect(updatedHistory[0]).toEqual(turnResult);
        expect(history).toHaveLength(0);
    });
});