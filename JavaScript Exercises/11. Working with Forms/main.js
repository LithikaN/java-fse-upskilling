// -----------------------------
// FORM ELEMENT
// -----------------------------
const form = document.getElementById("eventForm");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const eventError = document.getElementById("eventError");
const successMsg = document.getElementById("successMsg");


// -----------------------------
// FORM SUBMIT HANDLER
// -----------------------------
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    // clear previous messages
    nameError.innerText = "";
    emailError.innerText = "";
    eventError.innerText = "";
    successMsg.innerText = "";

    // capture values using form.elements
    const { username, email, event: selectedEvent } = form.elements;

    let isValid = true;

    // -----------------------------
    // VALIDATION
    // -----------------------------

    if (username.value.trim() === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!email.value.includes("@")) {
        emailError.innerText = "Enter a valid email";
        isValid = false;
    }

    if (selectedEvent.value === "") {
        eventError.innerText = "Please select an event";
        isValid = false;
    }

    // -----------------------------
    // SUCCESS MESSAGE
    // -----------------------------
    if (isValid) {
        successMsg.innerText =
            `🎉 Registered successfully for ${selectedEvent.value}`;
        
        form.reset();
    }
});