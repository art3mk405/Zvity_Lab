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
    output.innerHTML = `
    Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.<br>
    <br>
    Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів<br>
    <br>
    Місце розташування: https://github.com/art3mk405/IS-31_Voloshyn_laba02
    `;
});

stylesConnectionButton.addEventListener('click', () => {
    output.innerHTML = `
    Зовнішній CSS (External CSS): Стилі зберігаються в окремому файлі, який підключається через тег <strong>&lt;link&gt;</strong> у секції <strong>&lt;head&gt;</strong>.<br>
    <br>
    Внутрішній CSS (Internal CSS): Стилі прописуються безпосередньо в HTML-документі за допомогою тега <strong>&lt;style&gt;</strong> у секції <strong>&lt;head&gt;</strong>.<br>
    <br>
    Інлайновий CSS (Inline CSS): Стилі застосовуються безпосередньо до окремих HTML-елементів через атрибут <strong>style</strong>.<br>
    <br>
    Як я підключив стилі:<br>
    <img src="./img/style.png" alt="Скріншот коду підключення стилів" class="screenshot"><br>
    `;
});

selectorsButton.addEventListener('click', () => {
    output.innerHTML = `
    <strong>СЕЛЕКТОРИ:</strong> 
    Селектори в CSS — це елементи, які використовуються для вибору HTML-елементів, до яких потрібно застосувати стилі.<br>
    
    <strong>Основні типи селекторів:</strong><br>
    1. <strong>Селектори тегів</strong>: Вибирають всі елементи конкретного типу. Наприклад, <code>p</code> вибирає всі абзаци.<br>
    2. <strong>Селектори класів</strong>: Вибирають елементи за класом. Вони починаються з крапки (<code>.</code>). Наприклад, <code>.movie-card</code> вибирає всі елементи з класом <code>movie-card</code>.<br>
    3. <strong>Селектори ідентифікаторів</strong>: Вибирають один елемент за унікальним ідентифікатором, що починається з решітки (<code>#</code>). Наприклад, <code>#name</code> вибирає елемент з id <code>name</code>.<br>
    4. <strong>Комбіновані селектори</strong>: Поєднують декілька селекторів для точнішого вибору. Наприклад, <code>div.movie-card</code> вибирає всі елементи <code>div</code> з класом <code>movie-card</code>.<br>
    5. <strong>Селектори атрибутів</strong>: Вибирають елементи за значенням атрибутів. Наприклад, <code>input[type="email"]</code> вибирає всі елементи <code>input</code> з атрибутом <code>type</code>, що має значення <code>email</code>.<br>
    `;
});

tagSelectorsButton.addEventListener('click', () => {
    output.innerHTML = `
    Селектори тегу:<br>
    - <strong>html</strong>: Це кореневий елемент документа.<br>
    - <strong>head</strong>: Визначає метадані документа.<br>
    - <strong>body</strong>: Вміщує весь вміст сторінки.<br>
    - <strong>header</strong>: Використовується для визначення верхньої частини документа, що містить заголовки та навігацію.<br>
    - <strong>h1</strong>: Головний заголовок.<br>
    - <strong>h2</strong>: Заголовок другого рівня, використовуваний для назви головного фільму.<br>
    - <strong>h3</strong>: Заголовок третього рівня, використовується для заголовків секцій, таких як "Популярні фільми" та "Топ 10 найпопулярніших фільмів".<br>
    - <strong>h4</strong>: Заголовок четвертого рівня, використовуваний для назви фільмів у картках.<br>
    - <strong>h5</strong>: Заголовок п’ятого рівня, використовуваний для тексту про нас у футері.<br>
    - <strong>nav</strong>: Визначає навігаційний елемент.<br>
    - <strong>ul</strong>: Ненумерований список для навігаційних пунктів.<br>
    - <strong>li</strong>: Елемент списку.<br>
    - <strong>table</strong>: Використовується для створення таблиць.<br>
    - <strong>thead</strong>: Визначає заголовок таблиці.<br>
    - <strong>tbody</strong>: Визначає тіло таблиці.<br>
    - <strong>tr</strong>: Визначає рядок таблиці.<br>
    - <strong>th</strong>: Заголовковий елемент таблиці.<br>
    - <strong>td</strong>: Одинична комірка таблиці.<br>
    - <strong>form</strong>: Використовується для створення форми.<br>
    - <strong>label</strong>: Підпис для елемента форми.<br>
    - <strong>input</strong>: Поле для введення даних.<br>
    - <strong>footer</strong>: Визначає нижню частину документа.<br>
    <img src="./img/11.png" alt="Скріншот коду тегу" class="screenshot"><br>
    <img src="./img/12.png" alt="Скріншот коду тегу" class="screenshot"><br>
    <img src="./img/13.png" alt="Скріншот коду тегу" class="screenshot"><br>
    <img src="./img/14.png" alt="Скріншот коду тегу" class="screenshot"><br>
    `;
});

classSelectorsButton.addEventListener('click', () => {
    output.innerHTML = `
    Селектори класу:<br>
    - <strong>.header-container</strong>: Використовується для стилізації контейнера заголовка.<br>
    - <strong>.logo</strong>: Використовується для стилізації логотипу у заголовку та футері.<br>
    - <strong>.header-pages</strong>: Використовується для навігаційного списку у заголовку.<br>
    - <strong>.main-movie</strong>: Для стилізації секції з головним фільмом.<br>
    - <strong>.main-movie-bg</strong>: Стилізація фону головного фільму.<br>
    - <strong>.main-movie-info</strong>: Для інформації про головний фільм.<br>
    - <strong>.movie-details</strong>: Стилізація елементів з деталями про фільм (тривалість, рейтинг, якість тощо).<br>
    - <strong>.movie-genres</strong>: Для стилізації кнопок жанрів.<br>
    - <strong>.watch-now</strong>: Кнопка для перегляду фільму.<br>
    - <strong>.popular-movies</strong>: Стилізація секції популярних фільмів.<br>
    - <strong>.movies-grid</strong>: Сітка для відображення карток фільмів.<br>
    - <strong>.movie-card</strong>: Для стилізації кожної картки фільму.<br>
    - <strong>.movie-info</strong>: Стилізація інформації про фільм у картках.<br>
    - <strong>.popular-movies-table</strong>: Стилізація таблиці з топ-10 фільмів.<br>
    - <strong>.footer-container</strong>: Для стилізації контейнера футера.<br>
    - <strong>.footer-socialmedia</strong>: Стилізація іконок соціальних мереж у футері.<br>
    - <strong>.footer-contacts</strong>: Для стилізації контактної інформації у футері.<br>
    <img src="./img/21.png" alt="Скріншот коду класів" class="screenshot"><br>
    <img src="./img/22.png" alt="Скріншот коду класів" class="screenshot"><br>
    <img src="./img/23.png" alt="Скріншот коду класів" class="screenshot"><br>
    <img src="./img/24.png" alt="Скріншот коду класів" class="screenshot"><br>
    <img src="./img/25.png" alt="Скріншот коду класів" class="screenshot"><br>
    `;
});


idSelectorsButton.addEventListener('click', () => {
    output.innerHTML = `
    <strong>#watch-now</strong>: Використовується для стилізації кнопки "Дивитися зараз" у секції з головним фільмом.<br>
    <img src="./img/ide.png" alt="Скріншот коду ідетифікатора" class="screenshot"><br>
    <img src="./img/31.png" alt="Скріншот коду ідетифікатора" class="screenshot"><br>
    `;
});


otherSelectorsButton.addEventListener('click', () => {
    output.innerHTML = `
    Інші селектори: Додаткові типи селекторів:<br><br>
    <strong>Групові селектори</strong>: Використовується для стилізації кількох елементів одночасно, наприклад:<br>
    <img src="./img/doda.png" alt="Скріншот коду додаткових селкторів" class="screenshot"><br>  
    <strong>Універсальні селектори</strong>:Цей селектор скидає відступи та обрамлення для всіх елементів на сторінці:<br>  
    <img src="./img/doda2.png" alt="Скріншот коду додаткових селкторів" class="screenshot"><br> 
    `;
});


cssAdvancedButton.addEventListener('click', () => {
    output.innerHTML = `
    <h3>Шрифти:</h3>
    <img src="./img/1.png" alt="Скріншот коду додаткових селкторів" class="screenshot"><br>
    Встановлює шрифт Arial для всього документа<br>
    <h3>Текст:</h3>
    <img src="./img/2.png" alt="Скріншот коду додаткових селкторів" class="screenshot"><br>
    <img src="./img/3.png" alt="Скріншот коду додаткових селкторів" class="screenshot"><br>
     застосував стилі до заголовків і тексту<br>
    <h3>Таблиці:</h3>
    <img src="./img/4.png" alt="Скріншот коду додаткових селкторів" class="screenshot"><br>
    застосував стилі до таблиці популярних фільмів<br>
    <h3>Фон:</h3>
    <img src="./img/5.png" alt="Скріншот коду додаткових селкторів" class="screenshot"><br>
    <img src="./img/6.png" alt="Скріншот коду додаткових селкторів" class="screenshot"><br>
    встановив фон для тіла документа та інших секцій<br>
    <h3>Контур:</h3>
    <img src="./img/7.png" alt="Скріншот коду додаткових селкторів" class="screenshot"><br>
    межі в таблиці, які можна розглядати як контур<br>
    <h3>Списки:</h3>
    <img src="./img/8.png" alt="Скріншот коду додаткових селкторів" class="screenshot"><br>
    стилізував навігаційний список<br>
    `;
});


conclusionButton.addEventListener('click', () => {
    output.innerHTML = `
        <h2>Висновки до ЛР2</h2>
        <p>
            У лабораторній роботі №2 ми вивчили основи CSS та його застосування для стилізації веб-сторінок. 
            Основні результати, яких ми досягли, включають:
        </p>
        <ul>
            <li><strong>Стилізація тексту:</strong> Ми навчилися змінювати шрифти, кольори та розміри тексту, що дозволило покращити візуальну привабливість сторінок.</li>
            <li><strong>Форматування таблиць:</strong> Використовуючи CSS, ми створили стильні таблиці для представлення даних, що робить їх більш читабельними.</li>
            <li><strong>Створення кнопок та навігацій:</strong> Ми реалізували навігаційні меню та кнопки, що дозволяє користувачам легко переміщатися між сторінками.</li>
            <li><strong>Використання медіа-запитів:</strong> Опанували основи адаптивного дизайну, що забезпечує коректне відображення сайту на різних пристроях.</li>
            <li><strong>Основи стилізації фону:</strong> Ми навчились змінювати фонові кольори та зображення, що робить сторінки більш унікальними та естетично привабливими.</li>
        </ul>
        <p>
            В цілому, лабораторна робота дозволила нам закріпити теоретичні знання про CSS і практично застосувати їх у реальному проекті, 
            що значно підвищило наші навички в веб-розробці.
        </p>
    `;
});

