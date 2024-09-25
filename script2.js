const output = document.getElementById('output');

const temaMetaButton = document.getElementById('tema-meta-button');
const stylesConnectionButton = document.getElementById('styles-connection-button');
const selectorsButton = document.getElementById('selectors-button');
const tagSelectorsButton = document.getElementById('tag-selectors-button');
const classSelectorsButton = document.getElementById('class-selectors-button');
const idSelectorsButton = document.getElementById('id-selectors-button');
const otherSelectorsButton = document.getElementById('other-selectors-button');
const cssAdvancedButton = document.getElementById('css-advanced-button');
const conclusionButton = document.getElementById('conclusion-button');

temaMetaButton.addEventListener('click', () => {
    output.innerHTML = 'Тема, мета ЛР2 Місце розташування сайту, звіту: Тема лабораторної роботи №2...';
});

stylesConnectionButton.addEventListener('click', () => {
    output.innerHTML = 'Способи підключення стилів: Ось кілька способів підключення CSS...';
});

selectorsButton.addEventListener('click', () => {
    output.innerHTML = 'СЕЛЕКТОРИ: Визначення селекторів у CSS...';
});

tagSelectorsButton.addEventListener('click', () => {
    output.innerHTML = 'Селектори тегу: Вибір елементів за тегами...';
});

classSelectorsButton.addEventListener('click', () => {
    output.innerHTML = 'Селектори класу: Вибір елементів за класом...';
});

idSelectorsButton.addEventListener('click', () => {
    output.innerHTML = 'Селектори ідентифікаторів: Вибір елементів за ідентифікатором...';
});

otherSelectorsButton.addEventListener('click', () => {
    output.innerHTML = 'Інші селектори: Додаткові типи селекторів...';
});

cssAdvancedButton.addEventListener('click', () => {
    output.innerHTML = 'CSS: Шрифти Текст Таблиці Фон Контур Списки CSS Просунутий: Деталі...';
});

conclusionButton.addEventListener('click', () => {
    output.innerHTML = 'Висновки до ЛР2: Висновки щодо виконання лабораторної роботи №2...';
});
