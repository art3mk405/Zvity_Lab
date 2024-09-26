const output = document.getElementById('output');

const descButton = document.getElementById('desc-button');
const temaMetaButton = document.getElementById('tema-meta-button');
const structureButton = document.getElementById('structure-button');
const tableCodeButton = document.getElementById('table-code-button');
const formCodeButton = document.getElementById('form-code-button');
const imageCodeButton = document.getElementById('image-code-button');
const conclusionButton = document.getElementById('conclusion-button');

descButton.addEventListener('click', () => {
    output.innerHTML = 'Мій сайт призначений для любителів кіно, які бажають переглядати фільми та отримувати інформацію про них. Користувачі зможуть знайти популярні новинки, фільми різних жанрів, переглядати їхні описи, рейтинги та трейлери. Головною функцією сайту є надання доступу до інформації про фільми, що допоможе користувачам вирішити, що варто подивитися. Крім того, сайт буде мати інтуїтивно зрозумілий інтерфейс, що дозволить легко шукати та переглядати фільми. Сайт не тільки надає інформацію, але і створює комфортне середовище для кіноманів, де можна легко знайти цікаві кінострічки для перегляду.';
});

temaMetaButton.addEventListener('click', () => {
    output.innerHTML = 'Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ. <br><br>';
    output.innerHTML += 'Мета: придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. Створити шаблон звітного HTML-документу для відображення результатів роботи всіх лабораторних робіт. <br><br>';
    output.innerHTML += 'Місце розташування: https://github.com/art3mk405/IS-31_Voloshyn_IWatch_site';
});

structureButton.addEventListener('click', () => {
    output.innerHTML = `
        1. DOCTYPE – визначає тип документа як HTML5.<br>
        2. html – кореневий елемент документа, що містить весь контент.<br>
        3. head – метадані документа (налаштування сторінки):<br>
        &emsp;- meta – налаштування кодування та масштабу сторінки.<br>
        &emsp;- title – заголовок сторінки, що відображається на вкладці браузера.<br>
        &emsp;- link – підключення зовнішнього CSS-файлу для стилів.<br>
        4. body – основний контент сторінки:<br>
        &emsp;- header – заголовок сторінки або назва (в цьому випадку "ЛАБОРАТОРНА РОБОТА №1").<br>
        &emsp;- main – основний вміст сторінки:<br>
        &emsp;&emsp;- section (student-info) – інформація про студента (група, ім'я, фото).<br>
        &emsp;&emsp;- div (lab-menu) – меню для навігації по лабораторним роботам через кнопки.<br>
        &emsp;&emsp;- div (content-wrapper) – головний блок, що містить:<br>
        &emsp;&emsp;&emsp;- aside (sidebar) – бічна панель з кнопками для різних розділів.<br>
        &emsp;&emsp;&emsp;- section (main-content-section) – основна секція для виведення контенту після натискання на кнопки.<br>
        &emsp;- footer – підвал сторінки з інформацією про авторські права.<br>
        5. script – підключення зовнішнього JavaScript-файлу для функціональності кнопок.
    `;
});


tableCodeButton.addEventListener('click', () => {
    output.innerHTML = `
        <img src="./img/table1.png" alt="Скріншот коду таблиці" class="table-screenshot" width="400">
    <img src="./img/table2.png" alt="Скріншот коду таблиці" class="table-screenshot" width="400">
    <img src="./img/table3.png" alt="Скріншот коду таблиці" class="table-screenshot" width="400"><br>
        Використані теги:<br>
        <strong>&lt;table&gt;</strong>: Використовується для створення таблиці. В атрибуті class задається стиль таблиці.<br>
        <strong>&lt;thead&gt;</strong>: Визначає заголовок таблиці.<br>
        <strong>&lt;tbody&gt;</strong>: Визначає тіло таблиці, де розміщуються дані.<br>
        <strong>&lt;tr&gt;</strong>: Визначає рядок таблиці (використовується як у заголовку, так і в тілі).<br>
        <strong>&lt;th&gt;</strong>: Визначає заголовкову комірку таблиці. Вона зазвичай містить текст, що описує дані в колонці. Значення в заголовкових комірках за замовчуванням жирні.<br>
        <strong>&lt;td&gt;</strong>: Визначає комірку даних таблиці.<br>
    `;
});



formCodeButton.addEventListener('click', () => {
    output.innerHTML = `
        <img src="./img/form1.png" alt="Скріншот коду форми" class="table-screenshot"><br>
        Використані теги:<br>
        <strong>&lt;form&gt;</strong>: Використовується для створення форми. Атрибути <code>action</code> і <code>method</code> задають адресу обробника та метод відправки даних (GET або POST).<br>
        <strong>&lt;label&gt;</strong>: Визначає мітку для поля вводу. Атрибут <code>for</code> асоціює мітку з конкретним полем.<br>
        <strong>&lt;input&gt;</strong>: Використовується для створення полів вводу. Атрибут <code>type</code> визначає тип вводу (text, email, password тощо).<br>
        <strong>&lt;input type="submit"&gt;</strong>: Кнопка для відправки форми.<br>
    `;
});


imageCodeButton.addEventListener('click', () => {
    output.innerHTML = `
        <img src="./img/image1.png" alt="Скріншот коду зображень" class="table-screenshot"><br>
        Використані теги:<br>
        <strong>&lt;section&gt;</strong>: Використовується для визначення секції на сторінці.<br>
        <strong>&lt;div&gt;</strong>: Використовується для створення контейнера для кожного зображення.<br>
        <strong>&lt;img&gt;</strong>: Використовується для вставки зображень. Атрибут <code>src</code> визначає шлях до зображення, а <code>alt</code> описує зображення для доступності.<br>
        <strong>&lt;p&gt;</strong>: Використовується для вставки тексту під кожним зображенням (наприклад, назва фільму).<br>
    `;
});

conclusionButton.addEventListener('click', () => {
    output.innerHTML = `
        <h3>Висновки</h3>
        <ul>
            <li>В процесі виконання лабораторної роботи ми ознайомилися з основами HTML-розмітки, що є базовим навиком для веб-розробників.</li>
            <li>Створення таблиць, форм та структурованого контенту допомогло зрозуміти, як організовувати дані на веб-сторінці.</li>
            <li>Використання зображень та їх правильна атрибуція є важливими аспектами доступності та SEO оптимізації.</li>
            <li>Робота з кнопками та обробниками подій в JavaScript дозволила створити інтерактивність на сайті, що покращує користувацький досвід.</li>
            <li>Ця лабораторна робота допомогла закріпити знання про структуру HTML-документів і підготувала до подальшого вивчення CSS та JavaScript.</li>
        </ul>
    `;
});
