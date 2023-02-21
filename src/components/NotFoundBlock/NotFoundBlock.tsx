import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock: React.FC = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>‿︵‿ヽ(°□° )ノ︵‿︵</span>
				<br />
				Ничего не найдено
			</h1>
			<p className='description'>К сожадению данная страница отсутствует</p>
		</div>
	)
}

export default NotFoundBlock
