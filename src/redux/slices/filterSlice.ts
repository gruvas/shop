import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilterSliceState, ISort } from '../../@types/interface'

const initialState = {
	searchValue: '',
	categoryId: 0,
	currentPage: 1,
	sort: {
		name: 'популярности',
		sortProperty: 'rating',
	},
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload
		},

		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		},

		setSort(state, action: PayloadAction<ISort>) {
			state.sort = action.payload
		},

		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		},

		setFilters(state, action: PayloadAction<IFilterSliceState>) {
			state.sort = action.payload.sort
			state.currentPage = Number(action.payload.currentPage)
			state.categoryId = Number(action.payload.categoryId)
		},
	},
})

export const {
	setCategoryId,
	setSearchValue,
	setSort,
	setCurrentPage,
	setFilters,
} = filterSlice.actions

export default filterSlice.reducer
