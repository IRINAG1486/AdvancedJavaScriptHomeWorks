// Задание 1
// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.

// Каждый альбом имеет следующую структуру:

// {
    // title: "Название альбома",
    // artist: "Исполнитель",
    // year: "Год выпуска"
// }
// Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:

// Название альбома - Исполнитель (Год выпуска)

const musicCollection = {

    musicAlbums: [
        { title: 'Альбом 1', artist: 'Исполнитель 1',  year: '2000'},
        { title: 'Альбом 2', artist: 'Исполнитель 2',  year: '2001'},
        { title: 'Альбом 3', artist: 'Исполнитель 3',  year: '2002'}
    ],
    [Symbol.iterator]() {
        this.index = 0;
        return this;
    },
    next() {
        return this.index < this.musicAlbums.length
            ? {done: false, value: this.musicAlbums[this.index++]}
            : {done: true};
    }
}
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}


// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

let staff = new Map();
staff.set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты");

console.log(`Виктор - специализация: ${staff.get("Виктор")}`);
console.log(`Ольга - специализация: ${staff.get("Ольга")}`);
console.log(`Дмитрий - специализация: ${staff.get("Дмитрий")}`);

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

let dishes = new Map();
dishes.set("Пицца 'Маргарита'", "Виктор")
    .set("Пицца 'Пепперони'", "Виктор")
    .set("Суши 'Филадельфия'", "Ольга")
    .set("Суши 'Калифорния'", "Ольга")
    .set("Тирамису", "Дмитрий")
    .set("Чизкейк", "Дмитрий");

console.log(`Пиццу 'Маргарита' приготовил повар: ${dishes.get("Пицца 'Маргарита'")}`);
console.log(`Суши 'Калифорния' приготовил повар: ${dishes.get("Суши 'Калифорния'")}`);
console.log(`Чизкейк приготовил повар: ${dishes.get("Чизкейк")}`);
console.log(`Тирамису приготовил повар: ${dishes.get("Тирамису")}`);

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

let orders = new Map(); 


let person1 = { 
    name: 'Алексей'
};
let personOrder1 = new Set();
personOrder1.add("Пицца 'Пепперони'")
            .add("Тирамису");


let person2 = { 
    name: 'Мария'
};
let personOrder2 = new Set();
personOrder2.add("Суши 'Калифорния'")
            .add("Пицца 'Маргарита'");


let person3 = { name: 'Ирина'};
let personOrder3 = new Set();
personOrder3.add("Чизкейк");

orders.set(person1, personOrder1) 
    .set(person2, personOrder2)
    .set(person3, personOrder3)

console.log(`Клиент ${person1.name} заказал: ${[...orders.get(person1)]}`);
console.log(`Клиент ${person2.name} заказал: ${[...orders.get(person2)]}`);
console.log(`Клиент ${person3.name} заказал: ${[...orders.get(person3)]}`);

