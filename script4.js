const output = document.getElementById('output');

const temaMetaButton = document.getElementById('tema-meta-button');
const task1Button = document.getElementById('task1-button');
const desktopButton = document.getElementById('desktop-button');
const tabletButton = document.getElementById('tablet-button');
const mobileButton = document.getElementById('mobile-button');
const conclusionButton = document.getElementById('conclusion-button');

temaMetaButton.addEventListener('click', () => {
    output.innerHTML = `
Тема:  АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.  
 <br>
Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.   <br>
Місце розташування лабораторних робіт:<br>
Лабораторна роботи 4: https://github.com/art3mk405/IS-31_Voloshyn_laba04<br>
Жива сторінка: https://art3mk405.github.io/IS-31_Voloshyn_laba04/<br>
Звітний HTML документ: https://github.com/art3mk405/zvity_lab<br>
Жива сторінка: https://art3mk405.github.io/zvity_lab/<br>

    `;
});

task1Button.addEventListener('click', () => {
    output.innerHTML = `
    Використовуючі медіа-запити та СSS- правила, для вибраних вами брейкпоінтів, виконати адаптивну верстку для :<br>
•	Десктопної версії<br>
•	Планшетної версії<br>
•	Мобільної версії
    `;
});


desktopButton.addEventListener('click', () => {
    output.innerHTML = `
    ДЕКСТОПНА ВЕРСІЯ<br>
    Ширина екрана: Зазвичай 1024px і більше.<br>
Макет: Простір на екрані дозволяє використовувати великі елементи, багато колонок або широкі контейнери.<br>
CSS: Загальний стиль сайту можна писати без медіа-запитів або з медіа-запитом, що таргетує великі екрани.<br>
    <img src="./img/lab04/1.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab04/2.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab04/3.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});

tabletButton.addEventListener('click', () => {
    output.innerHTML = `
    ПЛАНШЕТНА ВЕРСІЯ<br>
    Ширина екрана: Зазвичай від 768px до 1024px.<br>
Макет: Може бути зменшений у кількості колонок або перегрупований для комфортного перегляду.<br>
CSS: Використовуються медіа-запити для адаптації елементів до меншої ширини екрану. Наприклад, зменшення розмірів шрифтів, відступів або зміна розташування елементів.<br>
    <img src="./img/lab04/4.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab04/5.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab04/6.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});


mobileButton.addEventListener('click', () => {
    output.innerHTML = `
    МОБІЛЬНА ВЕРСІЯ<br>
Ширина екрана: Менше 768px.<br>
Макет: Зазвичай використовують одну колонку з мінімальними елементами, оптимізованими для вузьких екранів.<br>
CSS: Застосовуються медіа-запити для ще більшого спрощення елементів — великий текст, кнопки, змінені відступи та розміщення.<br>
    <img src="./img/lab04/7.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab04/8.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">
    <img src="./img/lab04/9.png" alt="Скріншот коду" style="width: 50%; height: auto; display: block; margin-top: 10px;">

    `;
});

conclusionButton.addEventListener('click', () => {
    output.innerHTML = `
Адаптивна верстка забезпечує коректне відображення сайтів на різних пристроях. За допомогою медіа-запитів і метатега viewport можна адаптувати стилі для різних екранів. Стратегія Mobile First дозволяє почати розробку з мобільних версій, забезпечуючи кращу продуктивність і зручність.
    `;
});

