import { Router, Request, NextFunction, Response } from 'express'
import { IPdfController } from './pdf.controller.interface'
import { PdfRequestDto } from './dto/request.dto'
import { inject, injectable } from 'inversify'
import { TYPES } from '../types'
import { IPdfService } from './pdf.service.interface'

@injectable()
export class PdfController implements IPdfController {
	constructor(
		@inject(TYPES.PdfService) private readonly pdfService: IPdfService
	) {}

	async parse(
		{ body }: Request<{}, {}, PdfRequestDto>,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const result = await this.pdfService.parse(body.url)
			res.sendFile(result)
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).send({ err: error.message })
			}
		}
	}
}
