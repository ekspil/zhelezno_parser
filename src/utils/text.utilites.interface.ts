export interface ITextUtilites {
	findTenLargestWords(data: string): string[]
	compareStringLength(a: string, b: string): 1 | -1 | 0
    generatePdf(data: string[]): string
}
