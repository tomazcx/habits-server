import {Router} from "express";
import habitsRouter from "../../modules/habits/infra/routes/habitsRouter";

const router = Router()

router.use("/habits", habitsRouter)

export default router
