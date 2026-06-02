// -----------------------------
// EVENT DATA
// -----------------------------
let events = [
    { name: "Music Night", category: "music", seats: 5 },
    { name: "Tech Meetup", category: "tech", seats: 3 },
    { name: "Art Workshop", category: "art", seats: 2 },
    { name: "Classical Music Concert", category: "music", seats: 4 }
];

// -----------------------------
// DOM ELEMENTS (querySelector)
// -----------------------------
const container = document.querySelector("#eventContainer");
const searchBox = document.querySelector("#searchBox");
const categoryFilter = document.querySelector("#categoryFilter");

// -----------------------------
// RENDER FUNCTION
// -----------------------------
function renderEvents(list) {
    container.innerHTML = "";

    list.forEach((event, index) => {

        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.margin = "10px";
        card.style.padding = "10px";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Seats: ${event.seats}</p>
        `;

        // onclick event for Register button
        const btn = document.createElement("button");
        btn.innerText = "Register";

        btn.onclick = () => {
            if (events[index].seats > 0) {
                events[index].seats--;
                alert("Registered successfully!");
                applyFilters(); // refresh UI
            } else {
                alert("No seats left!");
            }
        };

        card.appendChild(btn);
        container.appendChild(card);
    });
}

// -----------------------------
// FILTER FUNCTION
// -----------------------------
function applyFilters() {
    let filtered = [...events];

    const category = categoryFilter.value;
    const searchText = searchBox.value.toLowerCase();

    // filter by category
    if (category !== "all") {
        filtered = filtered.filter(e => e.category === category);
    }

    // filter by search text
    if (searchText) {
        filtered = filtered.filter(e =>
            e.name.toLowerCase().includes(searchText)
        );
    }

    renderEvents(filtered);
}

// -----------------------------
// EVENT HANDLING
// -----------------------------

// onchange → category filter
categoryFilter.onchange = () => {
    applyFilters();
};

// keydown → search (live typing effect)
searchBox.onkeydown = () => {
    setTimeout(() => {
        applyFilters();
    }, 0);
};

// -----------------------------
// INITIAL RENDER
// -----------------------------
renderEvents(events);