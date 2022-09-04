import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

import { addItem } from '../../redux/slices/cartSlice'

import { ICartItem, IPizzaBlockProps } from '../../@types/interface';


const typeNames = ['тонкое', 'традиционное']

const PizzaBlock: React.FC<IPizzaBlockProps> = ({id, title, price, imageUrl, sizes, types}) => {
    const dispatch = useDispatch()
    const [activeType, setActiveType] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(0)
    const [count, setCount] = React.useState(0)


    const onClick = () => {
        const item: ICartItem = {
            id,
            id_unique: uniqid(),
            title,
            price_obj: price,
            imageUrl,
            type: typeNames[activeType],
            size: sizes[activeSize]
        }

        dispatch(addItem(item))

        var arr_items = [];
        
        if(localStorage.getItem('cart')) {
            arr_items = (JSON.parse(localStorage.getItem('cart')))
            arr_items.push(item)
            localStorage.setItem('cart', JSON.stringify(arr_items))
        } else {
            arr_items.push(item);
            localStorage.setItem('cart', JSON.stringify(arr_items));
        }
    }

    const onClickAdd = () => {
        onClick()
        setCount(count + 1)
    }

    return (
        <div className='pizza-block-wrapper'>
            <div className="pizza-block">
                <Link to={'/pizza/' + id}>
                    <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                    />
                </Link>

                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {types.map((id, index) => {
                            return (
                                <li className={activeType === index ? 'active' : ''} 
                                onClick={() => setActiveType(index)} key={'activeType' + index}>
                                    {typeNames[id]}
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        {sizes.map((size, index) => {
                            return (<li className={activeSize === index ? 'active' : ''} 
                            onClick={() => setActiveSize(index)} key={'size' + index}>{size} см.</li>)
                        })}
                    </ul>
                    </div>
                    <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <button className="button button--outline button--add"  onClick={onClickAdd}>
                        <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                        </svg>
                        <span>Добавить</span>
                    </button>
                </div>
            </div> 
        </div>
    );
}

export default PizzaBlock;
