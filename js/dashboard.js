function openPopup() {
    let form = document.querySelector(".content-section form");

    if (form.checkValidity()) {
        let popup = document.getElementById("registerpopup");
        popup.classList.add("open-register-popup");
        popup.style.visibility = "visible";
        popup.style.transform = "translateX(-50%) scale(1)";
    } else {
        form.reportValidity(); // Shows validation tooltip for missing fields
    }
}

function closePopup() {
    let popup = document.getElementById("registerpopup");
    popup.classList.remove("open-register-popup");
    popup.style.visibility = "hidden";
    popup.style.transform = "translateX(-50%) scale(0)";
}

function openDiscardPopup() {
    let form = document.querySelector(".content-section form");
    let inputs = form.querySelectorAll("input[required], select[required]");
    let isEmpty = true;

    inputs.forEach(input => {
        if (input.value.trim()) {
            isEmpty = false;
        }
    });

    if (!isEmpty) {
        let discardPopup = document.getElementById("discardPopup");
        discardPopup.style.visibility = "visible";
        discardPopup.style.transform = "translateX(-50%) scale(1)";
    } else {
        // Focus on the first required field and trigger validation tooltip
        let firstRequiredField = document.querySelector("input[required]");
        if (firstRequiredField) {
            firstRequiredField.reportValidity();
            firstRequiredField.focus();
        }
    }
}

function closeDiscardPopup() {
    let discardPopup = document.getElementById("discardPopup");
    discardPopup.style.visibility = "hidden";
    discardPopup.style.transform = "translateX(-50%) scale(0)";
}

function discardChanges() {
    let form = document.querySelector(".content-section form");
    form.reset();
    closeDiscardPopup();
}






document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll(".content-section").forEach(section => {
            section.style.display = "none";
        });

        // Show the clicked section
        document.getElementById(sectionId).style.display = "block";

        // Update active tab
        document.querySelectorAll(".tabs button").forEach(button => {
            button.classList.remove("active");
        });

        document.querySelector(`.tabs button[data-section='${sectionId}']`).classList.add("active");
    }

    // Attach event listeners to tabs
    document.querySelectorAll(".tabs button").forEach(button => {
        button.addEventListener("click", function () {
            let sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    // Show the default section (Register Farmer)
    showSection("register-farmer");
});










