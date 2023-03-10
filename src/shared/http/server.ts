import 'reflect-metadata'
import 'express-async-errors'
import express, {NextFunction, Request, Response} from 'express'
import cors from 'cors'
import router from './router'
import {AppError} from '../erros/AppError'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({
			status: 'error',
			message: error.message
		})
	}

	console.log(error)
	return response.status(500).json({
		message: "Internal server error"
	})
})




app.listen(3000, () => console.log("Server running at port 3000"))
