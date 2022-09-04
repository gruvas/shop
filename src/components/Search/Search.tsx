import React from 'react';

import { useDispatch } from 'react-redux/es/exports';

import styles from './Search.module.scss'

import { setSearchValue } from '../../redux/slices/filterSlice';

const Search: React.FC = () => {
    const dispatch = useDispatch()

    const [value, setValue] = React.useState('')


    const inputRef = React.useRef<HTMLInputElement>()
    
    const onClickClear = () => {
        dispatch(setSearchValue(''))
        setValue('')
        

        if(inputRef.current) {
            inputRef.current.focus()
        }
    }
    
    const clearIconFunction = () => {
        setSearchValue('')
        onClickClear()
    }

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(e.target.value))
        setValue(e.target.value)
    }


    return (
        <div className={styles.root}>
            <svg height="48"
            className={styles.icone}
            viewBox="0 0 48 48" 
            width="48" 
            xmlns="http://www.w3.org/2000/svg">
                <path d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/>
                <path d="M0 0h48v48h-48z" fill="none"/>
            </svg>

            <input ref={inputRef} value={value} onChange={onChangeValue} 
            className={styles.input} maxLength={24}
            placeholder="Поиск пиццы ..." type="text"/>

                
            {value && (
                <svg
                    className={styles.clearIcon}
                    onClick={clearIconFunction}
                    data-name="Capa 1"
                    id="Capa_1" 
                    viewBox="0 0 20 19.84" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/>
                </svg>
            )}
        </div>
    );
}

export default Search;
