const shippingPrice = 19.0;

let productsDiv = document.querySelector(".products-panel");

productsDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-minus")) {
        if (event.target.closest(".quantity-controller").querySelector("p").innerText > 0) {
            event.target.closest(".quantity-controller").querySelector("p").innerText--;
        } else {
            if (confirm("Product will be deleted?")) {
                event.target.parentElement.parentElement.parentElement.parentElement.remove();
            }
        }
    }
    else if (event.target.classList.contains("fa-plus")) {
        event.target.closest(".quantity-controller").querySelector("p").innerText++;
    }
});

//* calculate cart and product totals 

const calculateProductAndCartTotal = (productInfoDiv) => {
    let price = productInfoDiv.querySelector("strong").innerText;
    let quantity = productInfoDiv.querySelector("#product-quantity").innerText;
    let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
    productTotalDiv.innerText = (price * quantity).toFixed(2);
}