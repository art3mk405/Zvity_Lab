const output = document.getElementById('output');

const temaMetaButton = document.getElementById('tema-meta-button');
const task2Button = document.getElementById('task2-button');
const task4Button = document.getElementById('task4-button');
const task6Button = document.getElementById('task6-button');
const task8Button = document.getElementById('task8-button');
const task9Button = document.getElementById('task9-button');
const task10Button = document.getElementById('task10-button');
const conclusionButton = document.getElementById('conclusion-button');

temaMetaButton.addEventListener('click', () => {
    output.innerHTML = `
Тема:   ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.<br>
 <br>
Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.<br>
.  Реалізація програм засовами мови JAVASCRIPT<br>
<br>
Місце розташування лабораторних робіт:<br>
Лабораторна роботи 6: https://github.com/art3mk405/IS-31_Voloshyn_laba06<br>
Жива сторінка: https://art3mk405.github.io/IS-31_Voloshyn_laba06/<br>
Звітний HTML документ: https://github.com/art3mk405/zvity_lab<br>
Жива сторінка: https://art3mk405.github.io/zvity_lab/<br>
    `;
});

task2Button.addEventListener('click', () => {
    output.innerHTML = `
    Виконання другого завдання:<br>
    Код:
    <img src="./img/lab06/2.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab06/2.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    Результат:
    <img src="./img/lab06/2.3.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});


task4Button.addEventListener('click', () => {
    output.innerHTML = `
    Виконання четвертого завдання:<br>
    Код:
    <img src="./img/lab06/4.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    Результат:
    <img src="./img/lab06/4.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});

task6Button.addEventListener('click', () => {
    output.innerHTML = `
    Виконання шостого завдання:<br>
    Код:
    <img src="./img/lab06/6.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    Результат:
    <img src="./img/lab06/6.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">   
    `;
});


task8Button.addEventListener('click', () => {
    output.innerHTML = `
    Виконання восьмого завдання:<br>
    Код:
    <img src="./img/lab06/8.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    Результат:
    <img src="./img/lab06/8.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

task9Button.addEventListener('click', () => {
    output.innerHTML = `
    Виконання дев'ятого завдання:<br>
    Код:
    <img src="./img/lab06/9.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    Результат:
    <img src="./img/lab06/9.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

task10Button.addEventListener('click', () => {
    output.innerHTML = `
    Виконання десятого завдання:<br>
    Код:
    <img src="./img/lab06/10.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    Результат:
    <img src="./img/lab06/10.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

conclusionButton.addEventListener('click', () => {
    output.innerHTML = `
Виконуючи лабораторну роботу з теми ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ.<br>
CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ, були придбані практичні навички роботи з об'єктами, <br>
методами об'єкта, Callback, стрілочними функціями, стрілочними функціями як колбеки.<br>
    `;
});

