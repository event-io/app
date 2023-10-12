<!-- src/components/EventList.svelte -->
<script lang="ts">
    import EventCard from "$components/EventCard.svelte";

    export let events = [];
</script>

<div>
    <h1>Events</h1>
    <div class="event-list">
        {#each events as event (event.id)}
            <EventCard {event}/>
        {/each}
    </div>
</div>
