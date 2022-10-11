import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IPizza } from '../@types/interface';
import Header from '../components/Header';


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
                window.location.href = '/'
            }
        }

        fetchPizza()

    }, [id])


    if(!pizza) {
        return (<h2>Загрузка...</h2>)
    }

    return (
        <div className="wrapper">
            <Header/>

            <div className="content">
                <div className="container">
                    <div className='content full-pizza'>
                        <img className='full-pizza_img' src={pizza.imageUrl} alt=''/>
                        
                        <div className='full-pizza_content'>
                            <h2>{pizza.title}</h2>

                            <p>
                                Открытый пирог в виде лепешки, 
                                покрытой начинками, в первую очередь, 
                                расплавленным сыром. Одно из популярнейших блюд в мире, 
                                итальянское национальное блюдо. Для того, чтобы приготовить 
                                вкусную пиццу нужен хороший рецепт теста 
                                для пиццы и рецепт начинки для пиццы.
                            </p>

                            <h4>{pizza.price} ₽</h4>
                        </div>
                    </div>

                    <Link to={'/'} className='pizza_btn'>Вернуться назад</Link>
                </div>
            </div>
        </div>
    );
}

export default FullPizza;