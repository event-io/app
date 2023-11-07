<script lang="ts">
    import EventCard from "$components/EventCard.svelte";

    import type {PageData} from "$types";

    export let data: PageData
</script>

<div class="flex justify-center space-x-4 p-6 rounded-xl bg-white h-full">
    {#each data.events as event (event.id)}
        <EventCard {event}/>
    {/each}
</div>

