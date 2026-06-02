
// -----------------------------
// SAMPLE EVENT DATA
// -----------------------------
const events = [
    { name: "Music Night", category: "music" },
    { name: "Tech Meetup", category: "tech" }
];


// -----------------------------
// DISPLAY EVENTS
// -----------------------------
function renderEvents() {
    $("#eventContainer").empty();

    events.forEach(event => {
        $("#eventContainer").append(`
            <div class="card">
                <h3>${event.name}</h3>
                <p>${event.category}</p>
            </div>
        `);
    });

    // fade in effect
    $(".card").hide().fadeIn(800);
}


// -----------------------------
// jQuery CLICK EVENT
// -----------------------------
$("#registerBtn").click(function () {

    alert("Register button clicked!");

    // fade out then fade in (animation effect)
    $(".card").fadeOut(300, function () {
        $(".card").fadeIn(500);
    });

});


// -----------------------------
// INITIAL LOAD
// -----------------------------
$(document).ready(function () {
    renderEvents();
});