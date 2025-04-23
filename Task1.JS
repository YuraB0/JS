// Отримуємо елемент списку за ID
const list = document.getElementById('list');

// Отримуємо всі <li> елементи тільки безпосередньо в цьому списку (ігноруємо вкладені <li>)
const listItems = Array.from(list.children).filter(el => el.tagName === 'LI');

// Створюємо масив у потрібному порядку:
// перший → останній → другий → третій → четвертий → ...
let orderedItems = [];
if (listItems.length > 0) orderedItems.push(listItems[0]); // перший
if (listItems.length > 1) orderedItems.push(listItems[listItems.length - 1]); // останній

// Додаємо залишки з індексів 1 до передостаннього (не включаючи перший і останній)
for (let i = 1; i < listItems.length - 1; i++) {
  orderedItems.push(listItems[i]);
}

// Виводимо вміст кожного елемента в консоль
orderedItems.forEach(item => console.log(item.textContent.trim()));
