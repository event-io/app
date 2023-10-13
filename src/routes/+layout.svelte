<script>
    import "../app.css";
    import Toaster from "$components/Toaster.svelte";
</script>

<div style="height: 100svh" class="bg-background p-10 h-full font-['Poppins']">
    <Toaster/>
    <slot />
</div>
