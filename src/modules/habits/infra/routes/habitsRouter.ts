import {Router} from "express";
import {validateRequest} from "zod-express-middleware";
import {HabitsController} from "../controllers/HabitController";
import {z} from "zod";

const habitsController = new HabitsController()
const habitsRouter = Router()

//POST METHOD
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

//PATCH METHOD
habitsRouter.patch("/:id/toggle", validateRequest({
	params: z.object({
		id: z.string().uuid()
	})
}), habitsController.update)

export default habitsRouter
