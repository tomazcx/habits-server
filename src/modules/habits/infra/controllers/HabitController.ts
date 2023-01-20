import {Request, Response} from 'express'
import {CreateHabitService} from '../../services/CreateHabitService'
import {ToggleHabitService} from '../../services/ToggleHabitService'

export class HabitsController {
	public async create(request: Request, response: Response): Promise<Response> {
		const createHabitService = new CreateHabitService()

		const {title, weekDays} = request.body

		const habit = await createHabitService.execute({title, weekDays})
		return response.status(201).json(habit)
	}

	public async update(request: Request, response: Response): Promise<Response> {
		const toggleHabitService = new ToggleHabitService()
		const {id} = request.params

		await toggleHabitService.execute(id)

		return response.status(204).json()
	}
}
