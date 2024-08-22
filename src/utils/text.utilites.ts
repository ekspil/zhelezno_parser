import { convert } from 'html-to-text'
import { injectable } from 'inversify'
import { ITextUtilites } from './text.utilites.interface'
import jsPDF from 'jspdf'
import { resolve } from 'path'

@injectable()
export class TextUtilites implements ITextUtilites {
	constructor() {}
	findTenLargestWords(data: string): string[] {
		const text = convert(data, {
			selectors: [
				{ selector: 'a', options: { ignoreHref: true } },
				{ selector: 'img', format: 'skip' },
			],
		})

		const clearText = text.replace(/[^\w-_]/g, ' ').replace(/\s+/g, ' ')
		const arrayOfWords = clearText.split(' ')
		arrayOfWords.sort(this.compareStringLength)
		return arrayOfWords.slice(0, 10)
	}

	generatePdf(data: string[]): string {
		const doc = new jsPDF()
		data.forEach((value, index) => {
			doc.text(value, 20, 10 + 10 * index)
		})
		const p = resolve('files', 'a4.pdf')
		doc.save(p)
		return p
	}

	compareStringLength(a: string, b: string): 0 | 1 | -1 {
		if (a.length > b.length) return -1
		else if (a.length < b.length) return 1
		else return 0
	}
}
