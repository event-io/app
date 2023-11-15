<script lang="ts">
	import type { ISidebarButton } from "$lib/interfaces/sidebar-button.interface";


	import Sidebar from "./sidebar.svelte";

    export let buttons: ISidebarButton[] = [];

</script>
<div class="grid lg:grid-cols-6">
    <Sidebar {buttons}/>
    <div class="col-span-3 lg:col-span-5 h-full">
        <div class="h-full px-4 py-6 lg:px-8 m-10">
            <slot />
        </div>
    </div>
</div>