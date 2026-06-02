
// -----------------------------
// DOM ELEMENTS
// -----------------------------
const form = document.getElementById("eventForm");
const message = document.getElementById("message");


// -----------------------------
// FORM SUBMISSION
// -----------------------------
form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("🟢 Form submitted");

    const formData = form.elements;

    // Step 1: Capture values
    const userData = {
        name: formData.name.value,
        email: formData.email.value,
        event: formData.event.value
    };

    console.log("📦 Captured Data:", userData);

    // Breakpoint hint (for DevTools)
    debugger;

    // Step 2: Basic validation check
    if (!userData.name || !userData.email || !userData.event) {
        console.error("❌ Validation failed");
        message.innerText = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    console.log("✔ Validation passed");

    // Step 3: Show loading state
    message.innerText = "Submitting... ⏳";
    message.style.color = "blue";

    // Step 4: Simulated API call
    sendRequest(userData);
});


// -----------------------------
// FETCH REQUEST (DEBUG MODE)
// -----------------------------
function sendRequest(data) {

    console.log("🚀 Sending request to server...");
    console.log("Payload:", JSON.stringify(data));

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log("📡 Response received:", response);

        if (!response.ok) {
            throw new Error("Network error");
        }

        return response.json();
    })
    .then(result => {
        console.log("🎉 Success response:", result);

        message.innerText = "Registration successful!";
        message.style.color = "green";
    })
    .catch(error => {
        console.error("Error occurred:", error);

        message.innerText = "Registration failed!";
        message.style.color = "red";
    });
}