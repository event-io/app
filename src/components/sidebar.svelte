<script lang="ts">
    import {Button} from "$lib/components/ui/button";
	import { CalendarDays, Home, PartyPopper } from "lucide-svelte";
</script>

<div class="space-y-4 py-4">
    <div class="px-3 py-2">
        <div class="space-y-1">
            <Button variant="ghost" class="w-full justify-start">
                <Home class="w-4 h-4 mr-2"/>
                Home
            </Button>
            <Button variant="ghost" class="w-full justify-start">
                <CalendarDays class="w-4 h-4 mr-2"/>
                Calendario
            </Button>
            <Button variant="ghost" class="w-full justify-start">
                <PartyPopper class="w-4 h-4 mr-2"/>
                Organizza
            </Button>
        </div>
    </div>
</div>
