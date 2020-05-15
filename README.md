### для запуска:
* json-server ./src/assets/database.json --watch --port 3001
* npm start


#### Технологии которые использую в проекте
    * react 
    * create-react-app 
    * react router
    * scss 
    * json-server 
    * redux 
    * redux-logger 
    * БЭМ
    * prop-types


#### todo
 * [x] добавить комментарии к товару
   * [ ] только после авторизации
   * [x] пустые сообщения не отправлять
   * [ ] добавить в локал сторидж
   * [ ] добавить имя в комментарии
   * [x] добавить лайки к коментариям
   * [x] добавить дату комментария
   * [ ] запрет плохих слов
   * [ ] комментарии могут оставлять только зарегестрированные польщователи
   * [ ] редирект на авторизацию если не залогинин 
   * [ ] лайки у комментов должны быть независимые друг от друга
 * [ ] propTypes
 * [ ] добавить с десяток товаров для разноообразия
 * [x] поиск
   * [x] вывод количества найденного товара
 * [x] страничка товара
   * [ ] выбор валюты(выпадашка)
   * [x] сортировка по цене
   * [ ] sold out если осталось 0 товаров
 * [x] в хедере запилить калькулятор из тугриков в рубли 
 * [x] авторизация
   * [x] валидация простенькая
   * [ ] усложнить валидацию
   * [x] если норм залогинился, то выводить имя фамилию вместо авторизация
   * [x] добавить крестик закрытия модального окна
   * [x] затемнить фон при открытом модальном окне
   * [x] закрыть модалку при клике за ее пределы 
   * [x] при повторном клике на ник(после авторизации) - ник меняется на авторазация 
   * [x] отвалилась валидация(
   * [x] если зарегестрирован вывести личный кабинет вместо модалки с авторизацией 
 * [x] страница 404 
 * [x] страница футера
 * [x] личный кабинет
 * [x] корзина
   * [x] добавить в корзину
   * [x] убрать из корзины
   * [x] выводить кол-во товара и назване товара в козине
   * [x] убирать товар из корзины по крестику и кнопке
   * [ ] добавить в локал сторидж
   * [x] вынести корзину в боковой блок
   * [x] уменьшать и увеличивать кол-во товара при добавлении/убирании
 * [ ] redux
   * [ ] переделать имеющийся проект на redux
     * [x] Like
     * [ ] Auth
     * [ ] CommentInput
     * [ ] Comments
     * [ ] Products
     * [ ] Search
     * [ ] ViewProduct
     * [x] Calc
   * [x] перестроить структуру
     * [x] actions
     * [x] types
     * [x] reducers
 * [ ] промокод
 * [x] добавить спинер при загрузке товара
 * [ ] где-нибудь впихнуть табы
 * [x] где-нибудь впихнуть модальное окно
 * [ ] страница личный кабинет
 * [ ] пагинатор
 * [ ] покрыть все тестами
 * [ ] добавить стили
   * [ ] миксины, переменные
   * [ ] адаптив
 * [ ] впихнуть где-нибудь redux-form 
 * [ ] deploy firebase  
 * [ ] Demo github 
 * [ ] сделать карту сайта(схему) 