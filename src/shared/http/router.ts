import {Router} from "express";
import daysRouter from "../../modules/days/infra/routes/daysRouter";

import habitsRouter from "../../modules/habits/infra/routes/habitsRouter";

const router = Router()

router.use("/days", daysRouter)
router.use("/habits", habitsRouter)

export default router
