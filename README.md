# [Интернет-магазин заказа пиццы](https://kdsweb.ru/)

Запуск проекта осуществляется с помощью команды:
```
npm run start
```

Данное веб-приложение представляет собой интернет-магазин для заказа пиццы. В приложении реализована загрузка данных из MockAPI, таких как идентификатор, адрес картинки, название пиццы, размер, стоимость и категория. Затем эти данные используются для отображения информации на странице.

Приложение позволяет осуществлять сортировку пицц по популярности, цене и алфавиту. Также пользователь может выбрать категорию пиццы из списка, который включает мясные, вегетарианские, гриль, острые и закрытые пиццы.

В приложении также реализован поиск пицц, который осуществляется на стороне клиента.

Для удобства навигации по большому количеству пицц в приложении имеется пагинация с фиксированным количеством страниц.

Корзина товаров реализована с помощью Redux Toolkit. Каждый добавленный в корзину товар сохраняется отдельно и автоматически пересчитывается общая стоимость и количество товаров. При добавлении товаров в корзину, информация сохраняется в localstorage браузера. В корзине пользователь может полностью очистить корзину или удалять товары по отдельности.