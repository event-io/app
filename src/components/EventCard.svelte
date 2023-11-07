<script lang="ts">
	import type { Event } from "$lib/interfaces/event.interface";

    export let event: Event | null = null;

</script>

<div class="w-[280px] h-[400px] relative">
    <a href="/events/{event?.id}">
        <img 
        alt="Card Content"
        class="w-full h-full object-cover rounded-xl shadow"
        src="{ event?.thumbnail_url }">
        <div class="absolute top-2 right-2 px-3 py-2  bg-white rounded-xl shadow">
            <span class="font-bold text-sm">{ event?.date_start ? (new Date(event.date_start)).getDate() : "" }</span>
            <span class="text-sm">{ event?.date_start ? (new Date(event.date_start)).toLocaleDateString('default', { month: 'short' }) : "" }</span>
        </div>
        <div class="absolute text-white bottom-2 left-2 right-2 py-2 px-3">
            <p class="font-bold">{ event?.name }</p>
            <p class="">{ event?.description }</p>
        </div>
    </a>
</div>