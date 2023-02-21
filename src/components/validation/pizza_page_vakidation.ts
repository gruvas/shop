const pizza_page_vakidation = (pathname: string) => {
	const reg = new RegExp(/pizza/)
	return reg.exec(pathname)
}

export default pizza_page_vakidation
