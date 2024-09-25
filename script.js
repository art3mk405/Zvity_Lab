const output = document.getElementById('output');

const descButton = document.getElementById('desc-button');
const temaMetaButton = document.getElementById('tema-meta-button');
const structureButton = document.getElementById('structure-button');
const tableCodeButton = document.getElementById('table-code-button');
const formCodeButton = document.getElementById('form-code-button');
const imageCodeButton = document.getElementById('image-code-button');
const conclusionButton = document.getElementById('conclusion-button');

descButton.addEventListener('click', () => {
    output.innerHTML = 'Опис предметного середовища: тут детальний опис середовища...';
});

temaMetaButton.addEventListener('click', () => {
    output.innerHTML = 'Тема, Мета, Місце розташування лаби №1: Тема лабораторної роботи — Інтернет технології...';
});

structureButton.addEventListener('click', () => {
    output.innerHTML = 'СТРУКТУРА ДОКУМЕНТА: Ось структура документа...';
});

tableCodeButton.addEventListener('click', () => {
    output.innerHTML = 'HTML-код ТАБЛИЦЬ: приклад коду для таблиць...';
});

formCodeButton.addEventListener('click', () => {
    output.innerHTML = 'HTML-код ФОРМИ: приклад коду для форм...';
});

imageCodeButton.addEventListener('click', () => {
    output.innerHTML = 'HTML-код ЗОБРАЖЕННЯ: приклад коду для зображень...';
});

conclusionButton.addEventListener('click', () => {
    output.innerHTML = 'Висновки: висновки щодо виконання лабораторної роботи...';
});
