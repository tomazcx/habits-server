import {Request, Response} from 'express'
import {z} from 'zod'
import {AppError} from '../../../../shared/erros/AppError'
import {CreateHabitService} from '../../services/CreateHabitService'

export class HabitsController {
	public async create(request: Request, response: Response): Promise<Response> {
		const createHabitService = new CreateHabitService()

		const {title, weekDays} = request.body

		const habit = await createHabitService.execute({title, weekDays})
		return response.status(201).json(habit)
	}
}
