import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IPizza } from '../@types/interface';


const FullPizza: React.FC = () => {
    const [pizza, setPizza] = React.useState<IPizza>()
    const { id } = useParams()

    React.useEffect(() => {
        async function fetchPizza() {
            try {
                let {data} = await axios.get(`https://6300e8619a1035c7f8fa7036.mockapi.io/pizza/` + id)
                
                setPizza(data)
            } catch(error) {
                alert('Ошибка при получении пиццы')
            }
        }

        fetchPizza()

    }, [id])

    if(!pizza) {
        return (<h2>Загрузка...</h2>)
    }

    return (
        <div className='content full-pizza'>
            <img className='full-pizza_img' src={pizza.imageUrl} alt=''/>
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} ₽</h4>
        </div>
    );
}

export default FullPizza;