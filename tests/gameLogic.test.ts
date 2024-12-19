import { takeTurn, Team } from '../src/gameLogic';

describe('takeTurn', () => {
    const initialScore = { teamA: 0, teamB: 0 };

    it('should return an updated score for a successful penalty', () => {
        const mockSimulatePenalty = jest.fn().mockReturnValue(true);
        const result = takeTurn('Olympique Lyonnais', initialScore);
        expect(result.score.teamA).toBeGreaterThan(initialScore.teamA);
        expect(result.score.teamB).toEqual(initialScore.teamB);
    });

    it('should not change the score for a missed penalty', () => {
        const mockSimulatePenalty = jest.fn().mockReturnValue(false);
        const result = takeTurn('Sainté', initialScore);
        expect(result.score.teamA).toEqual(initialScore.teamA);
        expect(result.score.teamB).toEqual(initialScore.teamB);
    });

    it('should return the correct scoring team in the result', () => {
        const result = takeTurn('Sainté', initialScore);
        expect(result.scorer).toBe('Sainté');
    });
});
