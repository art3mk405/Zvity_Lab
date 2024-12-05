const output = document.getElementById('output');

const temaMetaButton = document.getElementById('tema-meta-button');
const task2Button = document.getElementById('task2-button');
const task4Button = document.getElementById('task4-button');
const task6Button = document.getElementById('task6-button');
const task7Button = document.getElementById('task7-button');
const task8Button = document.getElementById('task8-button');
const task9Button = document.getElementById('task9-button');
const task10Button = document.getElementById('task10-button');
const conclusionButton = document.getElementById('conclusion-button');

temaMetaButton.addEventListener('click', () => {
    output.innerHTML = `
Тема:  КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ.  <br>
                Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта. Callback. Стрілочні функції. Стрілочні функції як колбеки.
                Реалізація програм засобами мови JAVASCRIPT.  <br>
                <br>
Місце розташування лабораторних робіт:<br>
Лабораторна роботи 7: https://github.com/art3mk405/IS-31_Voloshyn_laba07<br>
Жива сторінка: https://art3mk405.github.io/IS-31_Voloshyn_laba07/<br>
Звітний HTML документ: https://github.com/art3mk405/zvity_lab<br>
Жива сторінка: https://art3mk405.github.io/zvity_lab/<br>
    `;
});

task2Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab07/2.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab07/2.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});


task4Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab07/4.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab07/4.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});

task6Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab07/6.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab07/6.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">   
    `;
});

task7Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab07/7.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab07/7.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

task8Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab07/8.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab07/8.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

task9Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab07/9.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab07/9.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

task10Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab07/10.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab07/10.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

conclusionButton.addEventListener('click', () => {
    output.innerHTML = `
 Виконуючи лабораторну роботу з теми КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ, 
                були придбані практичні навички роботи з об'єктами, методами об'єкта, 
                Callback, стрілочними функціями, стрілочними функціями як колбеки та реалізацією програм засобами мови JAVASCRIPT.
    `;
});

