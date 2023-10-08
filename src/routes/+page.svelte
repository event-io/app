<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
    import { onMount } from 'svelte';
    import { _events } from "$lib/index.ts";

    let events = [];

    onMount(() => {
        console.log('The component has mounted');
        events = await _events.all();
    });
</script>
