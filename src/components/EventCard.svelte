<script lang="ts">

    import Card from "$components/Card.svelte";

    export let event

</script>

<Card title="{event.name}" href="{`/events/${event.id}`}">
    <p>{event.description}</p>
    <p>Location: {event.place}</p>
    <p>Date: {event.event_date_start} to {event.event_date_end}</p>
</Card>
