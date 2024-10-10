const output = document.getElementById('output');

const temaMetaButton = document.getElementById('tema-meta-button');
const task1Button = document.getElementById('task1-button');
const task2Button = document.getElementById('task2-button');
const fixTableButton = document.getElementById('fix-table-button');
const rubberTableButton = document.getElementById('rubber-table-button');
const fixBlockButton = document.getElementById('fix-block-button');
const rubberBlocksButton = document.getElementById('rubber-block-button');
const task3Button = document.getElementById('task3-button');
const pageButton = document.getElementById('page-button');
const htmlCodButton = document.getElementById('html-cod-button');
const cssCodButton = document.getElementById('css-cod-button');
const conclusionButton = document.getElementById('conclusion-button');

temaMetaButton.addEventListener('click', () => {
    output.innerHTML = `
Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.
 <br>
Мета: <br>
⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок<br>
⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX   <br>
Місце розташування лабораторних робіт:<br>
Лабораторна роботи 3(2): https://github.com/art3mk405/IS-31_Voloshyn_laba03_task2<br>
Лабораторна роботи 3(3): https://github.com/art3mk405/IS-31_Voloshyn_laba03_task3<br>
Жива сторінка: https://art3mk405.github.io/IS-31_Voloshyn_laba03_task3/<br>
Звітний HTML документ: https://github.com/art3mk405/zvity_lab<br>
Жива сторінка: https://art3mk405.github.io/zvity_lab/<br>

    `;
});

task1Button.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/laba03/1.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/1.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/1.3.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/1.4.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/1.5.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/1.6.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/1.7.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/1.8.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

task2Button.addEventListener('click', () => {
    output.innerHTML = `
    Завдання №2, в саме: створити  окремі веб-сторінки, а саме:<br>
•	Розмітку за допомогою таблиці (номер варіанта – остання цифра у списку групи)<br>
o	Фіксована таблична верстка<br>
o	Гумова  таблична верстка<br>
•	Розмітку за допомогою блоків (плаваючих елементів) (номер варіанта – остання цифра у списку групи + 1)<br>
o	Фіксована блокова верстка<br>
o	Гумова  блокова верстка<br>

    `;
});

fixTableButton.addEventListener('click', () => {
    output.innerHTML = `
    
    <img src="./img/laba03/2.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/2.5.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/2.6.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});

rubberTableButton.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/laba03/2.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/2.7.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/2.8.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});


fixBlockButton.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/laba03/2.3.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/2.9.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/2.10.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});


rubberBlocksButton.addEventListener('click', () => {
    output.innerHTML = `
    <img src="./img/laba03/2.4.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/2.11.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/laba03/2.12.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});


task3Button.addEventListener('click', () => {
    output.innerHTML = `
8.	Виконати Завдання №3, використовуючи засоби CSS та FLEXBOX  <br> 
<br>
9.	Кожному студенту виконати свій номер варіанта Завдання №3,  за технологією FLEXBOX та засобами CSS.<br>
Номер варіанта відповідає останній цифрі студента у списку групи. Наприклад, Студент 18 за списком – буде виконувати 8 варіант<br>
<img src="./img/laba03/3(1).png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});

pageButton.addEventListener('click', () => {
    output.innerHTML = `
<img src="./img/laba03/3.1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.3.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.4.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.5.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

htmlCodButton.addEventListener('click', () => {
    output.innerHTML = `
<img src="./img/laba03/3.6.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.7.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.8.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.9.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

cssCodButton.addEventListener('click', () => {
    output.innerHTML = `
<img src="./img/laba03/3.10.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.11.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.12.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.13.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.14.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
<img src="./img/laba03/3.15.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    `;
});

conclusionButton.addEventListener('click', () => {
    output.innerHTML = `
Таблична верстка може бути доречною для простих макетів і відображення даних, але вона не підходить для сучасних адаптивних сайтів.<br>
Блокова верстка, особливо з використанням сучасних CSS-методів (Flexbox, Grid), забезпечує більшу гнучкість і є стандартом для створення адаптивних і функціональних веб-додатків.<br>
    `;
});

