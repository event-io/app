<script lang="ts">
	import { CalendarDays, Home, PartyPopper } from "lucide-svelte";
	import SidebarButton from './sidebar-button.svelte';

    const buttons: { id: string, icon: any, label: string, href: string }[] = [
        { id: 'home', icon: Home, label: 'Home', href: '/events' },
        { id: 'calendar', icon: CalendarDays, label: 'Calendario', href: '/calendar' },
        { id: 'organize', icon: PartyPopper, label: 'Organizza', href: '/organize' },
    ];

    let selected: string = buttons[0].id;

</script>

<div class="space-y-4 py-4">
    <div class="px-3 py-2">
        <div class="space-y-1">
            {#each buttons as { id, icon, label, href }}
                <SidebarButton href={href} label={label} selected={selected === id} on:selected={() => (selected = id)}>
                    <svelte:component this={icon} class="w-4 h-4 mr-2"/>
                </SidebarButton>
            {/each}
        </div>
    </div>
</div>
