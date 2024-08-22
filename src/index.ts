import { Container, ContainerModule, interfaces } from 'inversify'
import { App } from './app'
import { TYPES } from './types'

const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES.App).to(App).inSingletonScope()
})

function bootstrap(): void {
	const appContainer = new Container()
	appContainer.load(appBindings)
	const app: App = appContainer.get<App>(TYPES.App)
	app.init()
}

bootstrap()
