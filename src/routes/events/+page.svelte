<script lang="ts">
    import EventList from "$components/EventList.svelte";
    import type {PageData} from "$types";

    export let data: PageData
</script>

<div class="m-6">
    <EventList events={data.events}/>
</div>
