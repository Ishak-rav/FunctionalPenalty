type Team = 'Team A' | 'Team B';

interface PenaltyResult {
    scorer: Team;
    score: { teamA: number; teamB: number };
}

function simulatePenalty(): boolean {
    // Simule un tir réussi ou raté
    return Math.random() > 0.5;
}

function takeTurn(team: Team, currentScore: { teamA: number; teamB: number }): PenaltyResult {
    const scored = simulatePenalty();
    const updatedScore = { ...currentScore };

    if (scored) {
        if (team === 'Team A') updatedScore.teamA += 1;
        else updatedScore.teamB += 1;
    }

    return {
        scorer: team,
        score: updatedScore,
    };
}

// Test rapide
let score = { teamA: 0, teamB: 0 };
console.log(takeTurn('Team A', score));
