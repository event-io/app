<script type="ts">
    export let text = "";
    export let color = "background";
</script>

<p class="{`bg-${color}`} rounded-full px-3 py-1.5 w-fit text-sm my-1">
    {text}
</p>
