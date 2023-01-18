import {Router} from "express";
import {z} from "zod";
import {validateRequest} from "zod-express-middleware";
import {DayController} from "../controllers/DayController";

const dayController = new DayController()
const daysRouter = Router()

daysRouter.get("/", validateRequest({
	query: z.object({
		date: z.string()
	})
}), dayController.show)

export default daysRouter
