import 'reflect-metadata'
import { Container, ContainerModule, interfaces } from 'inversify'
import { App } from './app'
import { TYPES } from './types'
import { IPdfController } from './pdf/pdf.controller.interface'
import { PdfController } from './pdf/pdf.controller'
import { IPdfService } from './pdf/pdf.service.interface'
import { PdfService } from './pdf/pdf.service'
import { ITextUtilites } from './utils/text.utilites.interface'
import { TextUtilites } from './utils/text.utilites'

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES.App).to(App).inSingletonScope()
	bind<IPdfService>(TYPES.PdfService).to(PdfService).inSingletonScope()
	bind<ITextUtilites>(TYPES.TextUtilites).to(TextUtilites).inSingletonScope()
	bind<IPdfController>(TYPES.PdfController)
		.to(PdfController)
		.inSingletonScope()
})

function bootstrap(): App {
	const appContainer = new Container()
	appContainer.load(appBindings)
	const app: App = appContainer.get<App>(TYPES.App)
	const pdf: IPdfService = appContainer.get<IPdfService>(TYPES.PdfService)
	app.init()
	return app
}

export const { app } = bootstrap()
