<script lang="ts">

    import type { PageData } from "./$types";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    import { addToast } from '$components/ui/toaster/toaster.svelte'


    export let data: PageData;

    onMount(() => {
        if(!data.session) {
            goto('/login');
        } else {
            sessionFound(data.session.user.user_metadata.name);
            goto('/events');
        }
    });

    function sessionFound(user: string) {
        addToast({
            data: {
                title: `Welcome back, ${user}! 👋`,
                description: "You will be redirected in a few seconds...",
                color: 'bg-success',
            }
        })
    }
</script>
