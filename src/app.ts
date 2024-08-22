import { inject, injectable } from 'inversify'
import express, { Express, json } from 'express'
import { TYPES } from './types'
import { IPdfController } from './pdf/pdf.controller.interface'

@injectable()
export class App {
	app: Express
	port: number

	constructor(
		@inject(TYPES.PdfController)
		private readonly pdfController: IPdfController
	) {
		this.port = 8080
		this.app = express()
	}

	useMiddleware(): void {
		this.app.use(json())
	}

	useRoutes(): void {
		this.app.post('/', this.pdfController.parse.bind(this.pdfController))
	}

	init(): void {
		this.useMiddleware()
		this.useRoutes()

		this.app.listen(this.port)
		console.log(`Сервер запущен на порту ${this.port}`)
	}
}
