<script lang="ts">
    import "../app.css";
    import Toaster from "$components/Toaster.svelte";
    import Header from "$components/Header.svelte";
    import Sidebar from "$components/sidebar.svelte";
</script>

<div style="height: 100svh" class="wrapped bg-background h-full font-body">
    <Toaster/>
    <Header/>
    <div class="grid lg:grid-cols-5">
        <Sidebar/>
        <div class="col-span-3 lg:col-span-4 lg:border-l">
            <div class="h-full px-4 py-6 lg:px-8">
                <slot />
            </div>
        </div>
    </div>
</div>
