<script lang="ts">
    import "../app.css";
    import Toaster from "$components/ui/toaster/toaster.svelte";
    import Header from "$components/ui/header/header.svelte";
</script>

<Toaster/>
<div style="height: 100svh" class="wrapped bg-background h-full font-body">
    <Header/>
    <slot/>
</div>
