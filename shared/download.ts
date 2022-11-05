import { AxiosResponse } from "axios";

export function downloadHelper({ res, fileName }: {res: AxiosResponse<any>; fileName?: string}) {
	if (!fileName) {
		const contentDisposition = res.headers['content-disposition']
		if (contentDisposition) {
			const asciiFilenameRegex = /^filename=(["']?)(.*?[^\\])\1(?:; ?|$)/i
			fileName = asciiFilenameRegex.test(contentDisposition) ?
				contentDisposition.split('filename=')[1].split(';')[0] :
				decodeURIComponent(contentDisposition.split('filename*=UTF-8\'\'')[1].split(';')[0])
		}
	}

	const a = document.createElement('a')
	const objectUrl = window.URL.createObjectURL(res.data)

	a.href = objectUrl
	a.setAttribute('download', fileName || '')
	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)

	setTimeout(() => window.URL.revokeObjectURL(objectUrl), 100)

	return objectUrl
}