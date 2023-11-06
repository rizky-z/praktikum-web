let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    totalPrice += price;
    updateCart();
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");

    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.productName} - Rp ${item.price}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Hapus";
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });

    totalElement.textContent = totalPrice;
}

function checkout() {
    alert(`Total Harga: Rp ${totalPrice}\nTerima kasih telah berbelanja!`);
}
