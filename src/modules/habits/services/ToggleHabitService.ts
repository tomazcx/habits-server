import {PrismaClient} from "@prisma/client";
import dayjs from "dayjs";
import {AppError} from "../../../shared/erros/AppError";

export class ToggleHabitService {
	public async execute(id: string): Promise<void> {
		const prisma = new PrismaClient()
		const today = dayjs().startOf('day').toDate()

		const habit = await prisma.habit.findUnique({
			where: {
				id: id
			}
		})

		if (!habit) {
			throw new AppError("Habit not found", 404)
		}

		let day = await prisma.day.findFirst({
			where: {
				date: today
			}
		})

		if (!day) {
			day = await prisma.day.create({
				data: {
					date: today
				}
			})
		}

		const dayHabit = await prisma.dayHabit.findUnique({
			where: {
				day_id_habit_id: {
					day_id: day.id,
					habit_id: id
				}
			}
		})

		if (dayHabit) {
			await prisma.dayHabit.delete({
				where: {
					id: dayHabit.id
				}
			})
		} else {

			await prisma.dayHabit.create({
				data: {
					day_id: day.id,
					habit_id: id
				}
			})
		}

	}
}
