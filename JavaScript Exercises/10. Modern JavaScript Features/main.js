
// -----------------------------
// EVENT DATA (const + modern structure)
// -----------------------------
const events = [
    { id: 1, name: "Music Night", category: "music", seats: 5 },
    { id: 2, name: "Tech Meetup", category: "tech", seats: 3 },
    { id: 3, name: "Art Workshop", category: "art", seats: 2 }
];


// -----------------------------
// DOM ELEMENTS (const)
// -----------------------------
const container = document.querySelector("#eventContainer");
const filter = document.querySelector("#categoryFilter");


// -----------------------------
// DEFAULT PARAMETER FUNCTION
// -----------------------------
const registerUser = (name = "Guest") => {
    const existing = document.querySelector("#msgBox");

    if (existing) existing.remove();

    const messageBox = document.createElement("p");
    messageBox.id = "msgBox";
    messageBox.innerText = `🎉 Registered successfully for: ${name}`;
    messageBox.style.color = "green";
    messageBox.style.fontWeight = "bold";

    document.body.appendChild(messageBox);
};

// -----------------------------
// RENDER FUNCTION (destructuring)
// -----------------------------
const renderEvents = (list = events) => {
    container.innerHTML = "";

    list.forEach(({ id, name, category, seats }) => {
        container.innerHTML += `
            <div>
                <h3>${name}</h3>
                <p>Category: ${category}</p>
                <p>Seats: ${seats}</p>
                <button onclick="registerUser('${name}')">Register</button>
                <hr>
            </div>
        `;
    });
};


// -----------------------------
// FILTER FUNCTION (spread operator)
// -----------------------------
const filterEvents = (category = "all") => {

    // spread operator clones array
    let clonedEvents = [...events];

    const filtered = category === "all"
        ? clonedEvents
        : clonedEvents.filter(({ category: c }) => c === category);

    renderEvents(filtered);
};


// -----------------------------
// EVENT HANDLING
// -----------------------------
filter.onchange = (e) => {
    filterEvents(e.target.value);
};


// -----------------------------
// INITIAL LOAD
// -----------------------------
renderEvents();