import {IHabit} from "../../habits/domain/IHabit";

export interface IDay {
	possibleHabits: IHabit[],
	completedHabits: string[]
}
