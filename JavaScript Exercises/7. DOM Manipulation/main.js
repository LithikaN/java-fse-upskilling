// -----------------------------
// EVENT DATA
// -----------------------------
let events = [
    { name: "Music Night", category: "music", seats: 5 },
    { name: "Tech Meetup", category: "tech", seats: 3 },
    { name: "Art Workshop", category: "art", seats: 2 }
];

// -----------------------------
// DOM ACCESS USING querySelector()
// -----------------------------
const container = document.querySelector("#eventContainer");

// -----------------------------
// RENDER FUNCTION (createElement + append)
// -----------------------------
function renderEvents() {
    container.innerHTML = "";

    events.forEach((event, index) => {

        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.padding = "10px";
        card.style.margin = "10px";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Seats: <span id="seat-${index}">${event.seats}</span></p>
        `;

        // Register button
        const registerBtn = document.createElement("button");
        registerBtn.innerText = "Register";

        registerBtn.onclick = () => registerUser(index);

        // Cancel button
        const cancelBtn = document.createElement("button");
        cancelBtn.innerText = "Cancel";

        cancelBtn.onclick = () => cancelRegistration(index);

        card.appendChild(registerBtn);
        card.appendChild(cancelBtn);

        container.appendChild(card);
    });
}

// -----------------------------
// REGISTER USER (UI UPDATE)
// -----------------------------
function registerUser(index) {
    if (events[index].seats > 0) {
        events[index].seats--;
        alert("Registration successful!");
    } else {
        alert("No seats available!");
    }

    updateUI();
}

// -----------------------------
// CANCEL REGISTRATION
// -----------------------------
function cancelRegistration(index) {
    events[index].seats++;
    alert("Registration cancelled!");
    updateUI();
}

// -----------------------------
// UPDATE UI
// -----------------------------
function updateUI() {
    renderEvents();
}

// -----------------------------
// INITIAL LOAD
// -----------------------------
renderEvents();