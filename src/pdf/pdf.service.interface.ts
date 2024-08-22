export interface IPdfService {
	parse: (url: string) => Promise<string>
}
