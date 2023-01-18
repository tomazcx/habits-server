import {PrismaClient} from "@prisma/client";
import dayjs from "dayjs";
import {IDay} from "../domain/IDay";


export class ShowDayService {
	public async execute(date: Date): Promise<IDay> {
		const prisma = new PrismaClient()

		const parsedDate = dayjs(date).startOf('day')
		const weekDay = dayjs(parsedDate).get("day")

		const possibleHabits = await prisma.habit.findMany({
			where: {
				created_at: {
					lte: date
				},
				weekDays: {
					some: {
						week_day: weekDay
					}
				}
			}
		})

		const day = await prisma.day.findFirst({
			where: {
				date: parsedDate.toDate()
			},
			include: {
				dayHabits: true
			}
		})

		const completedHabits = day?.dayHabits.map(dayHabit => dayHabit.habit_id)

		const data = {
			possibleHabits,
			completedHabits
		}

		return data as IDay
	}
}
