export type Tag = {
    name: string;
    description: string;
};

export const tags: Tag[] = [
    { name: "h1", description: "Основной заголовок" },
    { name: "h2", description: "Подзаголовок" },
    { name: "h3", description: "Меньший заголовок" },
    { name: "p", description: "Абзац текста" },
    { name: "a", description: "Ссылка" },
    { name: "img", description: "Изображение" },
    { name: "ul", description: "Маркированный список" },
    { name: "ol", description: "Нумерованный список" },
    { name: "li", description: "Элемент списка" },
    { name: "div", description: "Блочный контейнер" },
    { name: "span", description: "Строчный контейнер" },
    { name: "button", description: "Кнопка" },
    { name: "input", description: "Поле ввода" },
    { name: "form", description: "Форма" },
    { name: "table", description: "Таблица" },
    { name: "tr", description: "Строка таблицы" },
    { name: "td", description: "Ячейка таблицы" },
    { name: "th", description: "Заголовочная ячейка таблицы" },
    { name: "header", description: "Верхняя часть страницы" },
    { name: "footer", description: "Нижняя часть страницы" },
    { name: "section", description: "Раздел страницы" },
    { name: "article", description: "Статья" },
    { name: "nav", description: "Навигация" },
    { name: "main", description: "Основное содержание страницы" },
    { name: "aside", description: "Боковая панель / сайдбар" },
    { name: "strong", description: "Жирный текст" },
    { name: "em", description: "Курсив / акцент текста" },
    { name: "small", description: "Мелкий текст" },
    { name: "blockquote", description: "Цитата" },
    { name: "code", description: "Код" },
];
