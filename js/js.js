setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

// JavaScript код вашего сайта

// Получаем ссылки на кнопку корзины и контейнер с товарами в корзине
const cartButton = document.getElementById('cartButton');
const cartItems = document.getElementById('cartItems');

// Обработчик события для открытия и закрытия списка товаров в корзине
cartButton.addEventListener('click', function() {
    cartItems.classList.toggle('hidden');
});

// JavaScript код вашего сайта продолжается
