import { TurnResult } from './gameLogic';

export type History = TurnResult[];

export function addToHistory(
    history: History,
    turnResult: TurnResult
): History {
    return [...history, turnResult];
}
