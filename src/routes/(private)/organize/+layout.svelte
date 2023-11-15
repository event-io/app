<script lang="ts">
	import SidebarLayout from "$components/ui/sidebar/sidebar-layout.svelte";
	import type { ISidebarButton } from "$lib/interfaces/sidebar-button.interface";
	import { AreaChart, CalendarDays, Home, PartyPopper } from "lucide-svelte";

    let buttons: ISidebarButton[] = [
        { id: 'home', icon: Home, label: 'Home', href: '/organize/events' },
        { id: 'events', icon: PartyPopper, label: 'Eventi', href: '/organize/events'},
        { id: 'calendar', icon: CalendarDays, label: 'Calendario', href: '/calendar' },
        { id: 'reporting', icon: AreaChart, label: 'Reporting', href: '/organize/reporting'}
    ]
</script>

<SidebarLayout {buttons}>
    <slot/>
</SidebarLayout>