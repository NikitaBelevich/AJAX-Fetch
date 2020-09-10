'use strict';


(async () => {
    // Получаем сразу результат промиса, т.е объект Response
    let response = await fetch('https://api.github.com/users/NikitaBelevich');
    console.warn(response);
    // Получаем тело ответа из этого объекта
    let data = await response.json();
    console.warn(data);
})();

// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.warn(data);
//     })
