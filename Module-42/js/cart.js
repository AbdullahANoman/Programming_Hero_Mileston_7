const connectBtn = () =>{
    const field = document.getElementById("product-field");
    const quantityFiled = document.getElementById('product-quantity');
    const fieldValue = field.value ;
    const quantityValue = quantityFiled.value;
    field.value = '';
    quantityFiled.value =''
    console.log(fieldValue,quantityValue);
    display(fieldValue,quantityValue);
    saveProductLocalStorage (fieldValue,quantityValue)
}

const display =(name,quantity) =>{
    const li = document.createElement('li');
    const container = document.getElementById('container');
    li.innerHTML = `
    ${name} ${quantity}
    `
    container.appendChild(li)
    
}

const getStoredShoppingCart = () =>{
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}
const saveProductLocalStorage = (product,quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity ;
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart',cartString)
}