<script type="ts">
    import { ArrowLeft } from 'lucide-svelte';

    function goBack() {
        return window.history.back();
    }
</script>

<button on:click={goBack}
   class="flex gap-1 w-fit bg-text hover:bg-text text-white py-2 px-4 rounded-full text-sm items-center"
    >
       <ArrowLeft size="1rem"/>Back
</button>
