# zhelezno_parser

Для запуска проекта
npm start
Сервер принимает POST запросы на http://localhost:8080/
Состав body:
{
url: "https://адрес-необходимой-страницы"
}

Список недочетов огромен. Т.к. это тестовое задание, то не стал заморачиваться:

-   Реализовано все на express, чтобы не городить огород ради одного запроса
-   Получением данных из переменных окружения (решается с помощью dotenv)
-   Нет валидации входящих данных (можно использовать class-validator)
-   Нет маршрутизатора, в данном исполнении просто не вижу смысла делать
-   Нет авторизации, гардов
-   Нет обработчика ошибок
-   Сохранение файлов в контейнере ноды, необходимо использовать постоянные хранилища
-   Логирование при помощи console.log
-   Нет тестов
