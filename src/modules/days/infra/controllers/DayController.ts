import {ShowDayService} from "../../services/ShowDayService";
import {Request, Response} from "express";
import {z} from "zod";
import {ShowSummaryService} from "../../services/ShowSummaryService";

export class DayController {

	public async index(request: Request, response: Response): Promise<Response> {
		const showSummaryService = new ShowSummaryService()
		const summary = await showSummaryService.execute()

		return response.status(200).json(summary)

	}

	public async show(request: Request, response: Response): Promise<Response> {
		const showDayService = new ShowDayService()

		const getDayParams = z.object({
			date: z.coerce.date()
		})

		const {date} = getDayParams.parse(request.query)
		const day = await showDayService.execute(date)

		return response.status(200).json(day)
	}
}
