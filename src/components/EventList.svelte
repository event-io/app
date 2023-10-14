<!-- src/components/EventList.svelte -->
<script lang="ts">
    import EventCard from "$components/EventCard.svelte";

    export let events = [];
</script>

{#each events as event (event.id)}
    <EventCard {event}/>
{/each}
