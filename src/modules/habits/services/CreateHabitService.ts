import {PrismaClient} from "@prisma/client"
import {IHabit} from "../domain/IHabit"
import dayjs from 'dayjs'

interface IRequest {
	title: string
	weekDays: number[]
}

export class CreateHabitService {
	public async execute({title, weekDays}: IRequest): Promise<IHabit> {
		const prisma = new PrismaClient()

		const today = dayjs().startOf('day').toDate() //get date at 00 time

		const habit = await prisma.habit.create({
			data: {
				title,
				created_at: today,
				weekDays: {
					create: weekDays.map(weekDay => {
						return {
							week_day: weekDay
						}
					})
				}
			}
		})

		console.log(habit)

		return habit as IHabit
	}
}
