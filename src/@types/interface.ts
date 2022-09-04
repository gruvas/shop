import { SortPropertyEnum, Status } from "./enum";

export interface ICategoriesProps {
    value: number
    onClickCategory: (index: number) => void
}

export interface ICartItem {
    id: string;
    id_unique: string;
    title: string;
    price_obj: number;
    imageUrl: string;
    type: string;
    size: number;
};

export interface ICart {
    totalPrice: number
    items: ICartItem[]
}

export interface IPizzaBlockProps {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
}

export interface ISort {
    name: string;
    sortProperty: SortPropertyEnum;
}

export interface IFilterSliceState {
    categoryId?: number
    currentPage?: number
    searchValue?: string
    sort: ISort
}

export interface IState {
    filter: IFilterSliceState
    cart: ICart
    pizza: IPizzaSliceState
}

export interface IPizza {
    id: string
    title: string
    price: number
    imageUrl: string
    sizes: number[]
    types: number[]
    rating: number
}

export interface ISearchPizzaParams {
    sortBy: string;
    order: string;
    category: string;
    search?: string;
    currentPage: number;
};

export interface IPizzaSliceState {
    items: IPizza[];
    status: Status;
}

export interface IPaginationProps {
    currentPage: number;
    onChangePage: (page: number) => void;
};

export interface IPizzaBasketProps {
    title: string;
    id_unique: string;
    price_obj: number;
    imageUrl: string;
    size: number;
    type: string;
}

export interface IPizza {
    imageUrl: string
    title: string
    price: number
}