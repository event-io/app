<!-- src/pages/EventPage.svelte -->
<script lang="ts">

    import BackButton from "$components/custom/button/back-button.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

</script>

<BackButton/>
<div class="event-page mt-2">
    <div class="organizer-card">
        <h2>Organizer Details</h2>
        <p>Name: {data.event.organizer.name}</p>
        <p>Type: {data.event.organizer.type}</p>
        <p>Contact Email: {data.event.organizer.contact_email}</p>
        <p>Description: {data.event.organizer.description}</p>
    </div>
</div>
