// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const advancedToggle = document.getElementById("advanced-toggle");
    const checkboxes = document.querySelector(".checkbox");

    advancedToggle.addEventListener("click", function () {
        checkboxes.classList.toggle("hidden");
        checkboxes.classList.toggle("visible");
        
        const advancedIcon = document.getElementById("advanced-icon");
        advancedIcon.classList.toggle("fa-plus");
        advancedIcon.classList.toggle("fa-minus");
    });
});
