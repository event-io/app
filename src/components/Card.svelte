<script type="ts">
    export let title;
    export let href;
</script>

<a class="block bg-white border-2 p-4 my-4 hover:drop-shadow-md" href="{href}">
    <p class="text-xl font-extrabold mb-2 text-secondary">{title}</p>
    <slot/>
</a>
