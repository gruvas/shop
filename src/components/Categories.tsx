import React from 'react'
import { ICategoriesProps } from '../@types/interface'

const Categories: React.FC<ICategoriesProps> = ({ value, onClickCategory }) => {
	const categories: string[] = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	return (
		<nav className='categories'>
			<ul>
				{categories.map((сategory, index) => {
					return (
						<li
							className={index === value ? 'active' : ''}
							onClick={() => onClickCategory(index)}
							key={'activeCategory' + index}
						>
							{сategory}
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Categories
