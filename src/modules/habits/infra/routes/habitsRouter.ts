import {Router} from "express";
import {validateRequest} from "zod-express-middleware";
import {HabitsController} from "../controllers/HabitController";
import {z} from "zod";

const habitsController = new HabitsController()
const habitsRouter = Router()

habitsRouter.post("/",
	validateRequest({
		body: z.object({
			title: z.string(),
			weekDays: z.array(
				z.number().min(0).max(6)
			)
		})
	})
	, habitsController.create)

export default habitsRouter
