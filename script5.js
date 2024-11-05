const output = document.getElementById('output');

const temaMetaButton = document.getElementById('tema-meta-button');
const task1Button = document.getElementById('task1-button');
const task2Button = document.getElementById('task2-button');
const task3Button = document.getElementById('task3-button');
const task4Button = document.getElementById('task4-button');
const task5Button = document.getElementById('task5-button');
const conclusionButton = document.getElementById('conclusion-button');

temaMetaButton.addEventListener('click', () => {
    output.innerHTML = `
Тема:  ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. <br>
ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT<br>
 <br>
Мета: придбати практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT
<br>
Місце розташування лабораторних робіт:<br>
Лабораторна роботи 5: https://github.com/art3mk405/IS-31_Voloshyn_laba05<br>
Жива сторінка: https://art3mk405.github.io/IS-31_Voloshyn_laba05/<br>
Звітний HTML документ: https://github.com/art3mk405/zvity_lab<br>
Жива сторінка: https://art3mk405.github.io/zvity_lab/<br>
    `;
});

task1Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab05/1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab05/2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});


task2Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab05/3.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab05/4.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});

task3Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab05/5.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab05/6.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">   
    `;
});


task4Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/lab05/7.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab05/8.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab05/9.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

task5Button.addEventListener('click', () => {
    output.innerHTML = `
<img src="./img/lab05/10.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab05/11.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab05/12.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

conclusionButton.addEventListener('click', () => {
    output.innerHTML = `
Виконуючи лабораторну роботу з теми ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. <br>
ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT, були придбані <br>
практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях, та реалізації <br>
програм засовами мови JAVASCRIPT.
    `;
});

