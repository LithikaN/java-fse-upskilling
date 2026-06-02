// -----------------------------
// EVENT DATABASE
// -----------------------------
let events = [];

// -----------------------------
// CLOSURE: Track registrations per category
// -----------------------------
function createCategoryTracker() {
    let categoryCount = {};

    return function(category) {
        if (!categoryCount[category]) {
            categoryCount[category] = 0;
        }
        categoryCount[category]++;

        console.log(`Total registrations in ${category}: ${categoryCount[category]}`);
    };
}

// closure instance
const trackRegistration = createCategoryTracker();


// -----------------------------
// ADD EVENT FUNCTION
// -----------------------------
function addEvent(name, category, seats) {
    events.push({
        name,
        category,
        seats
    });
}


// -----------------------------
// REGISTER USER FUNCTION
// -----------------------------
function registerUser(index) {
    try {
        if (!events[index]) {
            throw new Error("Invalid event selected");
        }

        if (events[index].seats <= 0) {
            throw new Error("No seats available");
        }

        events[index].seats--;

        // track using closure
        trackRegistration(events[index].category);

        alert(`Registered for ${events[index].name}`);

        renderEvents(events);

    } catch (err) {
        alert(err.message);
        console.error(err.message);
    }
}


// -----------------------------
// FILTER EVENTS (HIGHER ORDER FUNCTION)
// -----------------------------
function filterEventsByCategory(callback) {
    return events.filter(callback);
}


// -----------------------------
// SEARCH FUNCTION (uses callback)
// -----------------------------
function searchEvents() {
    const value = document.getElementById("searchBox").value.toLowerCase();

    const filtered = filterEventsByCategory(event => 
        event.category.toLowerCase().includes(value)
    );

    renderEvents(filtered);
}


// -----------------------------
// RENDER FUNCTION
// -----------------------------
function renderEvents(list) {
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    list.forEach((event, index) => {
        eventList.innerHTML += `
            <div>
                <h3>${event.name}</h3>
                <p>Category: ${event.category}</p>
                <p>Seats: ${event.seats}</p>
                <button onclick="registerUser(${index})">Register</button>
                <hr>
            </div>
        `;
    });
}


// -----------------------------
// INITIAL DATA
// -----------------------------
addEvent("Music Night", "music", 5);
addEvent("Tech Meetup", "tech", 3);
addEvent("Art Workshop", "art", 2);
addEvent("Coding Bootcamp", "tech", 4);

// initial render
renderEvents(events);