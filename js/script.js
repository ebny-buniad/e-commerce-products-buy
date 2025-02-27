const ringButtons = document.querySelectorAll('.ring-button');

for (const ringButton of ringButtons) {
    ringButton.addEventListener("click", function (event) {
        // Brand color select
        for (const singleBtn of ringButtons) {
            singleBtn.classList.add("border-gray-300");
            singleBtn.classList.remove("border-purple-600");
        }
        event.target.classList.remove("border-gray-300");
        event.target.classList.add("border-purple-600");

        // Dynamic product img src using button id
        const colorName = event.target.id.replace("-color", "");
        const productImage = document.getElementById('product-image');
        productImage.src = "../images/" + colorName + ".png";
    });
}

function selectWristSize(size) {
    const sizes = ["S", "M", "L", "XL"];
    for (let i = 0; i < sizes.length; i++) {
        const button = document.getElementById("size-" + sizes[i]);
        const element = sizes[i];
        if (size === element) {
            button.classList.add("border-purple-600");
        } else {
            button.classList.remove("border-purple-600");
        }
    }
}


const quantityButtons = document.querySelectorAll('.quantity-button');
for (const quantityButton of quantityButtons) {
    quantityButton.addEventListener("click", function (event) {
        const quantityCngBtn = event.target.innerText === "+" ? 1 : -1;
        const quantityElement = document.getElementById("quantity");
        const currentQuantity = parseInt(quantityElement.innerText);
        const newQuantity = Math.min(10, Math.max(0, currentQuantity + quantityCngBtn));
        quantityElement.innerText = newQuantity;
    })
}