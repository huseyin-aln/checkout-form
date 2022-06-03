const shippingPrice = 19.0;

let productsDiv = document.querySelector(".products-panel");

productsDiv.addEventListener("click", (event) => {
    if (event.target.className == "fas fa-minus" ) {
        console.log(event.target.nextElementSibling.innerText;); 
    }
}