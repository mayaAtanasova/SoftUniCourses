function solve() {
   const result = document.getElementsByTagName('textarea')[0];
   const cart = document.querySelector('.shopping-cart');
   cart.addEventListener('click', onClick);
   const checkoutBtn = document.getElementsByClassName('checkout')[0];
   checkoutBtn.addEventListener('click', onCheckout);
   const checkout = {};

   function onClick(ev){
      if(ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product'){
         const product = ev.target.parentNode.parentNode;
         const prodName = product.querySelector('.product-title').textContent;
         const prodPrice = Number(product.querySelector('.product-line-price').textContent);
         result.value += `Added ${prodName} for ${prodPrice.toFixed(2)} to the cart.\n`;
         if(!checkout.hasOwnProperty(prodName)){
            checkout[prodName] = prodPrice;
         }else{
            checkout[prodName] += prodPrice;
         }
      }
   }

   function onCheckout(){
      let list = Object.keys(checkout).join(', ');
      let totalPrice = Object.values(checkout).reduce((a, c) => a + c, 0);
      result.value += `You bought ${list} for ${totalPrice.toFixed(2)}.\n`;
      cart.removeEventListener('click', onClick);
      checkoutBtn.removeEventListener('click', onCheckout);
   }
}