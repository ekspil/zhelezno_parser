import { inject, injectable } from 'inversify'
import { IPdfService } from './pdf.service.interface'
import axios from 'axios'
import { TYPES } from '../types'
import { ITextUtilites } from '../utils/text.utilites.interface'

@injectable()
export class PdfService implements IPdfService {
	constructor(
		@inject(TYPES.TextUtilites) private readonly textUtilites: ITextUtilites
	) {}
	async parse(url: string): Promise<string> {
		const result = await axios(url)
		const arrayOfWords = this.textUtilites.findTenLargestWords(result.data)
		const filename = this.textUtilites.generatePdf(arrayOfWords)
		return filename
	}
}
