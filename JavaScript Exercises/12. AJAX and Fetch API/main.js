
// -----------------------------
// DOM ELEMENTS
// -----------------------------
const form = document.getElementById("eventForm");
const message = document.getElementById("message");


// -----------------------------
// FORM SUBMIT
// -----------------------------
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = form.elements;

    const userData = {
        name: formData.name.value,
        email: formData.email.value,
        event: formData.event.value
    };

    // show loading state
    message.style.color = "blue";
    message.innerText = "Submitting registration... ⏳";

    // simulate delay using setTimeout
    setTimeout(() => {
        sendData(userData);
    }, 1500);
});


// -----------------------------
// FETCH POST (MOCK API)
// -----------------------------
function sendData(data) {

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Server error");
        }
        return response.json();
    })
    .then(result => {
        message.style.color = "green";
        message.innerText = "🎉 Registration successful!";
        console.log("Server Response:", result);

        form.reset();
    })
    .catch(error => {
        message.style.color = "red";
        message.innerText = "❌ Registration failed!";
        console.error(error);
    });
}