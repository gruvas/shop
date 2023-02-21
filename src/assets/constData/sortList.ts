import { SortPropertyEnum } from '../../@types/enum'
import { ISort } from '../../@types/interface'

export const sortList: ISort[] = [
	{
		name: 'популярности (по возрастанию)',
		sortProperty: SortPropertyEnum.RATING_DESC,
	},
	{
		name: 'популярности (по убыванию)',
		sortProperty: SortPropertyEnum.RATING_ASC,
	},
	{ name: 'цене (по возрастанию)', sortProperty: SortPropertyEnum.PRICE_DESC },
	{ name: 'цене (по убыванию)', sortProperty: SortPropertyEnum.PRICE_ASC },
	{
		name: 'алфавиту (по возрастанию)',
		sortProperty: SortPropertyEnum.TITLE_DESC,
	},
	{ name: 'алфавиту (по убыванию)', sortProperty: SortPropertyEnum.TITLE_ASC },
]
