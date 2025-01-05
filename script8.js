const output = document.getElementById('output');

const temaMetaButton = document.getElementById('tema-meta-button');
const task1Button = document.getElementById('task1-button');
const task2Button = document.getElementById('task2-button');
const conclusionButton = document.getElementById('conclusion-button');

temaMetaButton.addEventListener('click', () => {
    output.innerHTML = `
Тема: WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.
Мета: придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.
                <br>
<br>
Місце розташування лабораторних робіт:<br>
Лабораторна роботи 8: https://github.com/art3mk405/IS-31_Voloshyn_laba08<br>
Жива сторінка: https://art3mk405.github.io/IS-31_Voloshyn_laba08/<br>
Звітний HTML документ: https://github.com/art3mk405/zvity_lab<br>
Жива сторінка: https://art3mk405.github.io/zvity_lab/<br>
    `;
});

task1Button.addEventListener('click', () => {
    output.innerHTML = `
    Виконання першого завдання:<br>
    Код:
    <img src="./img/lab08/1.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab08/1.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab08/1.3.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab08/1.4.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    Результат:
    <img src="./img/lab08/1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

task2Button.addEventListener('click', () => {
    output.innerHTML = `
    Виконання другого завдання:<br>
    Код:
    <img src="./img/lab08/2.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab08/2.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab08/2.3.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab08/2.4.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    Результат:
    <img src="./img/lab08/2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

conclusionButton.addEventListener('click', () => {
    output.innerHTML = `
 Виконуючи лабораторну роботу з теми КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ, 
                були придбані практичні навички роботи з об'єктами, методами об'єкта, 
                Callback, стрілочними функціями, стрілочними функціями як колбеки та реалізацією програм засобами мови JAVASCRIPT.
    `;
});

