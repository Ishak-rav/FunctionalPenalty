import { simulatePenalty } from '../src/simulation';

describe('simulatePenalty', () => {
    it('should return a boolean', () => {
        const result = simulatePenalty();
        expect(typeof result).toBe('boolean');
    });

    it('should eventually return both true and false', () => {
        const results = new Set();
        for (let i = 0; i < 100; i++) {
            results.add(simulatePenalty());
        }
        expect(results.has(true)).toBe(true);
        expect(results.has(false)).toBe(true);
    });
});
