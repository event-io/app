<script lang="ts">

    export let event

</script>

<style>
    .event-card {
        border: 1px solid #ccc;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        cursor: pointer;
        text-decoration: none; /* Remove underline */
        color: #333; /* Adjust link color */
        display: block; /* Display as a block to fill the parent's width */
    }

    .event-card:hover {
        background-color: #f5f5f5; /* Change background color on hover */
    }

    .event-card h2 {
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    .event-card p {
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
</style>

<a class="event-card" key={event.id} href="{`/events/${event.id}`}">
    <h2>{event.name}</h2>
    <p>{event.description}</p>
    <p>Location: {event.place}</p>
    <p>Date: {event.event_date_start} to {event.event_date_end}</p>
</a>
