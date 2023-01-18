import {Request, Response} from 'express'
import {z} from 'zod'
import {AppError} from '../../../../shared/erros/AppError'
import {CreateHabitService} from '../../services/CreateHabitService'

export class HabitsController {
	public async create(request: Request, response: Response): Promise<Response> {
		const createHabitService = new CreateHabitService()
		const validateBody = z.object({
			title: z.string(),
			weekDays: z.array(
				z.number().min(0).max(6)
			)
		})

		try {
			const {title, weekDays} = validateBody.parse(request.body)
			const habit = await createHabitService.execute({title, weekDays})
			return response.status(201).json(habit)
		} catch (err) {
			console.log(err)
			return response.json({message: err})
		}
	}
}
