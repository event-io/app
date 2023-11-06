<!-- src/components/EventList.svelte -->
<script lang="ts">
    import EventCard from "$components/EventCard.svelte";

    export let events: any[] = [];
</script>

<div class="flex justify-center space-x-4">
    {#each events as event (event.id)}
        <EventCard {event}/>
    {/each}
</div>
