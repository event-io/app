<script lang="ts">
    import * as Card from "$lib/components/ui/card";

    export let event: {
        id: number,
        name: string,
        description: string,
        place: string,
        event_date_start: Date,
        event_date_end: Date,
    } | null = null;

</script>

<div class="w-[250px] h-[300px] relative">
    <img 
    alt="Card Content"
    class="w-full h-full object-cover rounded-xl shadow"
    src="https://upload.wikimedia.org/wikipedia/commons/6/65/Rogier_van_der_Weyden_-_Portrait_of_a_Lady_-_Google_Art_Project.jpg">
    <div class="absolute bottom-4 bg-white bg-opacity-90 py-2 px-3 left-4 right-4 rounded-lg shadow">
        <p class="font-bold">{ event?.name }</p>
        <p class="text-sm">{ event?.description }</p>
    </div>
</div>