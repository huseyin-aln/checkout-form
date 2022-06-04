window.addEventListener("load", () => {
    calculateCartTotal();
})

let productsDiv = document.querySelector(".products-panel");

productsDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-minus")) {
        if (event.target.closest(".quantity-controller").querySelector("p").innerText > 0) {
            event.target.closest(".quantity-controller").querySelector("p").innerText--;

            calculateProductAndCartTotal(event.target.parentElement.parentElement.parentElement);
        } else {
            if (confirm("Product will be deleted?")) {
                event.target.parentElement.parentElement.parentElement.parentElement.remove();

                calculateCartTotal()
            }
        }
    }
    else if (event.target.classList.contains("fa-plus")) {
        event.target.closest(".quantity-controller").querySelector("p").innerText++;

        calculateProductAndCartTotal(event.target.parentElement.parentElement.parentElement);
    }
});

//* calculate cart and product totals 

const calculateProductAndCartTotal = (productInfoDiv) => {
    let price = productInfoDiv.querySelector("strong").innerText;
    let quantity = productInfoDiv.querySelector("#product-quantity").innerText;
    let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
    productTotalDiv.innerText = (price * quantity).toFixed(2);

    calculateCartTotal();
};

const calculateCartTotal = () => {
    let productsTotalPriceDivs = document.querySelectorAll(".product-line-price");
    let subtotal = 0;
    productsTotalPriceDivs.forEach(eachPrice => {
        subtotal += parseFloat(eachPrice.innerText)
    })

    let shippingPrice = (subtotal > 0 ? 19 : 0);

    let cartTotal = subtotal + shippingPrice;

    document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2);

    document.querySelector("#shipping p:nth-child(2)").innerText = shippingPrice.toFixed(2);

    document.querySelector("#total p:nth-child(2)").innerText = cartTotal.toFixed(2);
}