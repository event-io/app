<script lang="ts">
    import "../app.css";
    import Toaster from "$components/ui/toaster/toaster.svelte";
</script>

<Toaster/>
<div style="height: 100svh" class="wrapped bg-background h-full font-body">
    <slot/>
</div>
