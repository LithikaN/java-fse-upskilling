
// DOM elements
const container = document.querySelector("#eventContainer");
const loading = document.querySelector("#loading");


// -----------------------------
// SHOW / HIDE LOADING
// -----------------------------
function showLoading(state) {
    loading.style.display = state ? "block" : "none";
}


// -----------------------------
// RENDER EVENTS
// -----------------------------
function renderEvents(events) {
    container.innerHTML = "";

    events.forEach(event => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.margin = "10px";
        card.style.padding = "10px";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Seats: ${event.seats}</p>
        `;

        container.appendChild(card);
    });
}


// -----------------------------
// FETCH DATA (ASYNC/AWAIT)
// -----------------------------
async function fetchEventsAsync() {
    try {
        showLoading(true);
        container.innerHTML = "";

        const response = await fetch("mock-api.json");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        // ⏳ IMPORTANT FIX: simulate delay so loading is visible
        await new Promise(resolve => setTimeout(resolve, 1000));

        showLoading(false);
        renderEvents(data);

    } catch (error) {
        showLoading(false);
        console.error(error);
        container.innerHTML = "<p>Failed to load events</p>";
    }
}


// -----------------------------
// START APP
// -----------------------------
fetchEventsAsync();