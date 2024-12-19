import { displayHistory } from '../src/display';
import { History } from '../src/history';

describe('displayHistory', () => {
    it('should display the correct history in the console', () => {
        const history: History = [
            { scorer: 'Olympique Lyonnais', score: { teamA: 1, teamB: 0 } },
            { scorer: 'Sainté', score: { teamA: 1, teamB: 1 } },
        ];

        console.log = jest.fn();

        displayHistory(history);

        expect(console.log).toHaveBeenCalledWith(
            'Tir 1: Score : 1/0 (Olympique Lyonnais : +1)'
        );
        expect(console.log).toHaveBeenCalledWith(
            'Tir 2: Score : 1/1 (Sainté : +1)'
        );
    });
});