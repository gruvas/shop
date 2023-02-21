import React from 'react'

import ReactPaginate from 'react-paginate'
import { IPaginationProps } from '../../@types/interface'

import styles from './Pagination.module.scss'

const Pagination: React.FC<IPaginationProps> = ({
	currentPage,
	onChangePage,
}) => {
	return (
		<footer>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				previousLabel='<'
				nextLabel='>'
				onPageChange={(event) => onChangePage(event.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={3}
				forcePage={currentPage - 1}
				renderOnZeroPageCount={null}
			/>
		</footer>
	)
}

export default Pagination
