<script lang="ts">
	import EventCardOrg from "$components/custom/event-card/event-card-org.svelte";
	import { Button } from "$lib/components/ui/button";
    import type {PageData} from "$types";
	import { PlusCircle } from "lucide-svelte";

    export let data: PageData
</script>

<section>
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Lista Eventi
    </h1>
    <p class="leading-7">
        Lista degli eventi
    </p>
    <div class="space-y-4 mt-4 p-10 rounded-xl bg-white h-full">
        <div class="flex justify-end">
            <Button>
                <PlusCircle class="mr-2 h-4 w-4" />
                Nuovo evento
            </Button>
        </div>
        {#each data.events as event (event.id)}
            <EventCardOrg {event}/>
        {/each}
    </div>
</section>

