<script>
    import "../app.css";
    import Toaster from "$components/Toaster.svelte";
    import Header from "$components/Header.svelte";
</script>

<Toaster/>
<div style="height: 100svh" class="bg-background h-full font-['Poppins']">
    <Header/>
    <div class="p-10">
        <slot />
    </div>
</div>
