// Отримуємо елемент кнопки за ID
const button = document.getElementById('change-style-btn');

// Додаємо слухач подій на клік
button.addEventListener('click', function () {
  // Отримуємо заголовок <h1> і абзац <p>
  const header = document.querySelector('h1');
  const paragraph = document.querySelector('p');

  // Змінюємо стиль заголовка
  header.style.color = 'green'; // Зміна кольору заголовка на зелений
  header.style.fontSize = '3rem'; // Збільшення розміру шрифту заголовка

  // Змінюємо стиль абзацу
  paragraph.style.backgroundColor = '#ffebcd'; // Встановлення світло-коралового фону
  paragraph.style.padding = '10px'; // Додавання відступів всередині абзацу
  paragraph.style.borderRadius = '5px'; // Закруглення країв абзацу
});
