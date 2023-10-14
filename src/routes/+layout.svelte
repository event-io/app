<script>
    import "../app.css";
    import Toaster from "$components/Toaster.svelte";
    import Header from "$components/Header.svelte";
</script>

<div style="height: 100svh" class="wrapped bg-background h-full font-body">
    <Toaster/>
    <Header/>
    <div class="mx-40 my-5">
        <slot />
    </div>
</div>
