import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Status } from '../../@types/enum'
import {
	IPizzaSliceState,
	IPizza,
	ISearchPizzaParams,
} from '../../@types/interface'

const initialState: IPizzaSliceState = {
	items: [],
	status: Status.LOADING,
}

export const fetchPizza = createAsyncThunk<IPizza[], ISearchPizzaParams>(
	'pizza/fetchPizzaStatus',
	async (params) => {
		const { sortBy, order, category, currentPage } = params

		const { data } = await axios.get(
			`https://6300e8619a1035c7f8fa7036.mockapi.io/pizza?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`
		)

		return data
	}
)

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPizza.pending, (state) => {
			state.status = Status.LOADING
			state.items = []
		})

		builder.addCase(fetchPizza.fulfilled, (state, action) => {
			state.items = action.payload
			state.status = Status.SUCCESS
		})

		builder.addCase(fetchPizza.rejected, (state) => {
			state.status = Status.ERROR
			state.items = []
		})
	},
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
