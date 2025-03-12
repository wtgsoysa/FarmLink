function openPopup() {
    let form = document.querySelector(".register-farmer form");

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
    let form = document.querySelector(".register-farmer form");
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
    let form = document.querySelector(".register-farmer form");
    form.reset();
    closeDiscardPopup();
}











