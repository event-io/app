<script lang="ts">
	import type { Event } from "$lib/interfaces/event.interface";

    export let event: Event | null = null;

</script>

<div class="w-full relative h-[140px]">
    <a href="/events/{event?.id}" class="flex">
        <img 
            alt="Card Content"
            class="w-[280px] h-[140px] object-cover shadow cursor-pointer rounded-l-lg brightness-75 hover:brightness-100 transition-all"
            src="{ event?.thumbnail_url }"
        >
        <div class="px-5 py-4 bg-white shadow rounded-r-lg w-full">
            <p class="font-bold">{ event?.name }</p>
            <p class="">{ event?.description }</p>
            <span class="font-bold text-sm">{ event?.date_start ? (new Date(event.date_start)).getDate() : "" }</span>
            <span class="text-sm">{ event?.date_start ? (new Date(event.date_start)).toLocaleDateString('default', { month: 'short' }) : "" }</span>
        </div>
    </a>
</div>