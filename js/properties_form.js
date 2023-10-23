document.addEventListener("DOMContentLoaded", function () {
    const advancedToggle = document.getElementById("advanced-toggle");
    const checkboxes = document.querySelector(".checkbox");
    const advancedIcon = advancedToggle.querySelector("i");

    advancedToggle.addEventListener("click", function (e) {
        e.preventDefault();
        checkboxes.classList.toggle("visible");
        checkboxes.classList.toggle("hidden");

        if (advancedIcon.classList.contains("fa-plus")) {
            advancedIcon.classList.remove("fa-plus");
            advancedIcon.classList.add("fa-minus");
        } else {
            advancedIcon.classList.remove("fa-minus");
            advancedIcon.classList.add("fa-plus");
        }
    });
});
