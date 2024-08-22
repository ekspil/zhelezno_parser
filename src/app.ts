import express, { Express } from 'express'
import { injectable } from 'inversify'


@injectable()
export class App {
	app: Express
	port: number

	constructor() {
		this.port = 8080
		this.app = express()
	}

	useRoutes(): void {
		this.app.use('/')
	}

	init(): void {
		this.app.listen(this.port)
		console.log('Сервер запущен на порту this.port')
	}
}
