import React from 'react'
import { useSelector } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../redux/store'
import {
	setCategoryId,
	setCurrentPage,
	setFilters,
} from '../redux/slices/filterSlice'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeletom'
import Pagination from '../components/Pagination/Pagination'
import { fetchPizza } from '../redux/slices/pizzaSlice'
import { IState } from '../@types/interface'
import { sortList } from '../assets/constData/sortList'
import Header from '../components/Header'

const Home: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const isSearch = React.useRef(false)
	const isMounted = React.useRef(false)
	const { categoryId, sort, currentPage, searchValue } = useSelector(
		(state: IState) => state.filter
	)
	const { items, status } = useSelector((state: IState) => state.pizza)
	const sortType = sort.sortProperty

	const onChangeCategory = (id: number) => {
		dispatch(setCategoryId(id))
	}

	const onChangePage = (number: number) => {
		dispatch(setCurrentPage(number))
	}

	const getPizzas = async () => {
        const order = sortType.includes('-') ? 'desc' : 'asc'
        const sortBy = sortType.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''

        // @ts-ignore
        dispatch(fetchPizza({
            currentPage,
            category,
            sortBy,
            order
        }))
    }

	React.useEffect(() => {
		window.scrollTo(0, 0)

		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1))

			const sort = sortList.find(
				(obj) => obj.sortProperty === params.sortProperty
			)

			dispatch(
				setFilters({
					...params,
					sort,
				})
			)

			isSearch.current = true
		}
	}, [])

	React.useEffect(() => {
		getPizzas()
	}, [categoryId, sortType, searchValue, currentPage])

	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			})

			navigate(`?${queryString}`)
		} else {
			isMounted.current = true
		}
	}, [categoryId, sortType, currentPage])

	const pizzas = items
		.filter((obj) => {
			if (obj.title?.toLowerCase().includes(searchValue.toLowerCase())) {
				return true
			}
		})
		.map((obj) => {
			return (
				<PizzaBlock
					{...obj}
					key={'pizza_block' + obj.id}
				/>
			)
		})

	return (
		<div className='wrapper'>
			<Header />

			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories
							value={categoryId}
							onClickCategory={(id) => onChangeCategory(id)}
						/>
						<Sort />
					</div>

					<h2 className='content__title'>Все пиццы</h2>

					{status === 'loading' ? (
						<div
							className='content__items'
							key={'skeleton0'}
						>
							<Skeleton />
							<Skeleton />
							<Skeleton />
							<Skeleton />
							<Skeleton />
						</div>
					) : (
						<>
							{status === 'success' ? (
								<div className='content__items'>{pizzas}</div>
							) : (
								<h1 className='error_text'>Возникла ошибка попробуйте позже</h1>
							)}
						</>
					)}

					<Pagination
						currentPage={currentPage}
						onChangePage={onChangePage}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
