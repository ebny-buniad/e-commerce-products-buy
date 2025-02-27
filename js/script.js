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