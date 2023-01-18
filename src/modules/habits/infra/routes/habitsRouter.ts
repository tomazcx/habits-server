import {Router} from "express";
import {HabitsController} from "../controllers/HabitController";

const habitsController = new HabitsController()
const habitsRouter = Router()

habitsRouter.post("/", habitsController.create)

export default habitsRouter
