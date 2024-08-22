import { Router, Request, Response, NextFunction } from 'express'

export interface IPdfController {
	parse: (req: Request, res: Response, next: NextFunction) => void
}
