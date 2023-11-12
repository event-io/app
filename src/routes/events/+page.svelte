<script lang="ts">
    import EventCard from "$components/event-card.svelte";

    import type {PageData} from "$types";

    export let data: PageData
</script>

<section>
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Lista Eventi
    </h1>
    <p class="leading-7">
        Lista degli eventi
    </p>
    <div class="flex justify-center space-x-4 mt-4 p-10 rounded-xl bg-white h-full">
        {#each data.events as event (event.id)}
            <EventCard {event}/>
        {/each}
    </div>
</section>