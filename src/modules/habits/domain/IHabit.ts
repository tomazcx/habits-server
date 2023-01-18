import {IWeekDay} from "./IWeekDay"

export interface IHabit {
	id: string
	title: string
	created_at: Date
	weekDays: IWeekDay[]
}
