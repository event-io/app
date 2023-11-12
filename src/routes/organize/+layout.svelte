<script lang="ts">
	import SidebarLayout from "$components/ui/sidebar/sidebar-layout.svelte";
	import type { ISidebarButton } from "$lib/interfaces/sidebar-button.interface";
	import { CalendarDays, Home } from "lucide-svelte";

    let buttons: ISidebarButton[] = [
        { id: 'home', icon: Home, label: 'Home', href: '/organize/events' },
        { id: 'events', icon: CalendarDays, label: 'Eventi', href: '/organize/events'},
        { id: 'calendar', icon: CalendarDays, label: 'Calendario', href: '/calendar' },
        { id: 'reporting', icon: CalendarDays, label: 'Reporting', href: '/organize/reporting'}
    ]
</script>

<SidebarLayout {buttons}>
    <slot/>
</SidebarLayout>