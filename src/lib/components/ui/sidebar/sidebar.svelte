<script lang="ts">
	import type { ISidebarButton } from "$lib/interfaces/sidebar-button.interface";
	import SidebarButton from './sidebar-button.svelte';

    export let buttons: ISidebarButton[] = [];

    let selected: string = buttons[0].id;

</script>

<div class="space-y-4 py-4">
    <div class="px-3 py-2">
        <div class="space-y-1">
            {#each buttons as button}
                <SidebarButton href={button.href} label={button.label} selected={selected === button.id} on:selected={() => (selected = button.id)}>
                    <svelte:component this={button.icon} class="w-4 h-4 mr-2"/>
                </SidebarButton>
            {/each}
        </div>
    </div>
</div>
