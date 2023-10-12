<!-- src/pages/EventPage.svelte -->
<script lang="ts">

    import type {PageData} from "./$types";

    export let data: PageData;

</script>

<style>
    .event-page {
        padding: 20px;
    }

    .event-details {
        border: 1px solid #ccc;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    .event-details h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .event-details p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .chips {
        display: flex;
        flex-wrap: wrap;
    }

    .chip {
        background-color: #f5f5f5;
        padding: 0.5rem 1rem;
        margin: 0.2rem;
        border-radius: 16px;
        font-size: 0.9rem;
    }

    .organizer-card {
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        margin-bottom: 20px;
    }

    .organizer-card h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .organizer-card p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
</style>

<div class="event-page">
    <div class="event-details">
        <h1>{data.event.name}</h1>
        <p>Description: {data.event.description}</p>
        <p>Location: {data.event.place}</p>
        <p>Date: {data.event.event_date_start} to {data.event.event_date_end}</p>

        <div class="chips">
            {#each data.event.themes as theme (theme)}
                <div class="chip" key={theme.id}>{theme.name}</div>
            {/each}
        </div>

        <div class="chips">
            {#each data.event.categories as category (category)}
                <div class="chip" key={category.id}>{category.name}</div>
            {/each}
        </div>
    </div>

    <div class="organizer-card">
        <h2>Organizer Details</h2>
        <p>Name: {data.event.organizer.name}</p>
        <p>Type: {data.event.organizer.type}</p>
        <p>Contact Email: {data.event.organizer.contact_email}</p>
        <p>Description: {data.event.organizer.description}</p>
    </div>
</div>
