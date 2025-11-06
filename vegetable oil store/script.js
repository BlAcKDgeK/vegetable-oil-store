let cart = [];
let total = 0;

function addToCart(product) {
    cart.push(product);
    total += (product === 'Льняное масло') ? 500 : 150; // Простые цены
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

// Заполнение формы заказа из корзины
document.querySelector('form').addEventListener('submit', function(e) {
    const message = document.getElementById('message');
    message.value = `Заказ: ${cart.join(', ')}. Сумма: ${total} руб.`;
});
