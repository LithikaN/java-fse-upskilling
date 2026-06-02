
// EVENT ARRAY (DATABASE)

let events = [
    { name: "Music Night", category: "music" },
    { name: "Baking Workshop", category: "workshop" },
    { name: "Tech Meetup", category: "tech" },
    { name: "Classical Music Concert", category: "music" }
];


// ADD EVENT USING .push()

function addEvent(name, category) {
    events.push({ name, category });
}

// Example new event added
addEvent("Yoga Session", "wellness");


// RENDER FUNCTION USING .map()

function renderEvents(list) {
    const eventList = document.getElementById("eventList");

    eventList.innerHTML = list.map(event => `
        <div>
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <hr>
        </div>
    `).join("");
}


// FILTER MUSIC EVENTS USING .filter()

function showMusicEvents() {
    const musicEvents = events.filter(event => event.category === "music");
    renderEvents(musicEvents);
}


// SHOW ALL EVENTS

function showAllEvents() {
    renderEvents(events);
}


renderEvents(events);