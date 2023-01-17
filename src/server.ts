import Fastify from "fastify";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()
const app = Fastify()

app.get("/", async () => {
	const habits = await prisma.habit.findMany()
	return habits
})

app.listen({port: 3000})
