// ============================================
// CAPITAL EXPRESS - EVENTS & COUNTDOWN
// ============================================

// Add or edit announcements in this list.
// Use openingTime for a countdown.
// Use status for a normal text status.

const events = [
    {
        event: "New Content & Community feedback update.",
        date: "24.10.2026",
        openingTime: "2026-10-24T12:00:00+01:00"
    }

    // Example of adding another event:
    // ,{
    //     event: "Kingdom competition begins!",
    //     date: "24.10.2026",
    //     status: "Coming soon"
    // }
];

// ============================================
// DISPLAY EVENTS
// ============================================

function renderEvents() {
    const eventsList = document.getElementById("events-list");

    // Do nothing if this page has no events table.
    if (!eventsList) return;

    eventsList.replaceChildren();

    if (events.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 3;
        cell.className = "empty-events";
        cell.textContent = "No events announced yet. Check back soon!";

        row.appendChild(cell);
        eventsList.appendChild(row);
        return;
    }

    const now = Date.now();

    events.forEach(event => {
        const row = document.createElement("tr");
        const eventCell = document.createElement("td");
        const dateCell = document.createElement("td");
        const statusCell = document.createElement("td");

        eventCell.textContent = event.event;
        dateCell.textContent = event.date;

        if (event.openingTime) {
            const target = new Date(event.openingTime).getTime();

            if (Number.isNaN(target)) {
                statusCell.textContent = "Date unavailable";
            } else {
                const remaining = target - now;

                if (remaining <= 0) {
                    statusCell.textContent =
                        "Update Completed!";
                } else {
                    const days = Math.floor(
                        remaining / 86400000
                    );
                    const hours = Math.floor(
                        (remaining % 86400000) / 3600000
                    );
                    const minutes = Math.floor(
                        (remaining % 3600000) / 60000
                    );
                    const seconds = Math.floor(
                        (remaining % 60000) / 1000
                    );

                    statusCell.textContent =
                        `${days}d ${hours}h ${minutes}m ${seconds}s until update`;
                }
            }
        } else {
            statusCell.textContent = event.status || "Coming soon";
        }

        row.append(eventCell, dateCell, statusCell);
        eventsList.appendChild(row);
    });
}

// Render immediately and update the countdown every second.
renderEvents();
setInterval(renderEvents, 1000);
