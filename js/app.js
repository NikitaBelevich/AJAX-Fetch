'use strict';


// https://api.github.com/users/NikitaBelevich
/*
Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

На каждого пользователя должен приходиться один запрос fetch.
Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.
*/

const githubLogins = [
    'NikitaBelevich',
    'aikhelis',
    'adsurov',
    'sdfsdf43589dfugnf,', // null
    'AnDeVerin',
    'andreikinder',
    'andriiwp3',
    'AndreySavchenkov',
    'al;sdjfl;sdfjlsakdjflsakdjf', // null
    'BazovaLida',
];

(async () => {
    // Получили от функции промис, await дождался его и вернул результат
    const users = await getUsers(githubLogins);
    console.group('GitHub Users');
    console.info(users);
    console.groupEnd('GitHub Users');
})();

async function getUsers(usersLogins) {
    const usersObjects = usersLogins.map(async userName => {
        let userURL = `https://api.github.com/users/${userName}`; // Ссылка на данные n`го юзера
        let response = await fetch(userURL);
        if (response.ok) { // Если успешный запрос, тогда получаем данные и кладём в массив
            let data = await response.json();
            return data;
        } else { // Иначе кладём в массив null и бросаем ошибку
            console.error(`Ошибка HTTP: ${response.status}, URL: ${userURL}`);
            return null;
        }
    });
    // Возвращаем промис с результатами промисов
    return Promise.all(usersObjects);
}
