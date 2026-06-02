
// EVENT CLASS (Object Blueprint)

class Event {
    constructor(name, category, seats, date) {
        this.name = name;
        this.category = category;
        this.seats = seats;
        this.date = date;
    }
}


// PROTOTYPE METHOD

Event.prototype.checkAvailability = function () {
    if (this.seats > 0) {
        return "Available";
    } else {
        return "Full";
    }
};


// CREATE EVENTS (Objects)

const events = [
    new Event("Music Night", "music", 5, "2026-06-10"),
    new Event("Tech Meetup", "tech", 0, "2026-07-01"),
    new Event("Art Workshop", "art", 3, "2026-08-15")
];


// DISPLAY EVENTS

const eventList = document.getElementById("eventList");

events.forEach((event) => {

    // Object.entries usage
    const details = Object.entries(event)
        .map(([key, value]) => `<li><b>${key}</b>: ${value}</li>`)
        .join("");

    const availability = event.checkAvailability();

    eventList.innerHTML += `
        <div>
            <h3>${event.name}</h3>
            <p>Status: ${availability}</p>
            <ul>${details}</ul>
            <hr>
        </div>
    `;
});