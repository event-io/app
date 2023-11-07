<!-- src/pages/EventPage.svelte -->
<script lang="ts">

    import type {PageData} from "./$types";
    import BackButton from "$components/back-button.svelte";
    import Chip from "$components/chip.svelte";

    export let data: PageData;

</script>

<BackButton/>
<div class="event-page mt-2">
    <!-- <Card title="{data.event.name}">
        <p>Description: {data.event.description}</p>
        <p>Location: {data.event.place}</p>
        <p>Date: {data.event.event_date_start} to {data.event.event_date_end}</p>

        <div class="flex gap-2">
            {#each data.event.themes as theme (theme)}
                <Chip text="{theme.name}" color="background"/>
            {/each}
        </div>

        <div class="flex gap-2">
            {#each data.event.categories as category (category)}
                <Chip text="{category.name}" color="highlight"/>
            {/each}
        </div>
    </Card> -->

    <div class="organizer-card">
        <h2>Organizer Details</h2>
        <p>Name: {data.event.organizer.name}</p>
        <p>Type: {data.event.organizer.type}</p>
        <p>Contact Email: {data.event.organizer.contact_email}</p>
        <p>Description: {data.event.organizer.description}</p>
    </div>
</div>
