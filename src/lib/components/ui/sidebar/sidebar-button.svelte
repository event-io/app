<script lang="ts">

	import { Button } from "$components/ui/button";
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    export let selected: boolean = false;
    export let href: string = "";
    export let label: string = "";

    function select() {
        dispatch('selected', label);
    }

</script>
<Button href={ href } variant="ghost" class="w-full justify-start { selected ? "bg-white" : "" }" on:click={select}>
    <slot/> { label }
</Button>