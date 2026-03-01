const getCartFromLocalStorage=()=>{
    const storedCartString=localStorage.getItem('cart');
    if(storedCartString){
        const storeCart=JSON.parse(storedCartString);
        return storeCart;
    }
    return [];
}
const saveCartToLocalStorage=(cart)=>{
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)

}

const addItemToCartLocalStorage=(id)=>{
    const cart=getCartFromLocalStorage();
    // cart.push(id);
    const newCart=[...cart,id];
    saveCartToLocalStorage(newCart);

}

export {getCartFromLocalStorage as getStoreCart,
    addItemToCartLocalStorage as addToStoreCart}