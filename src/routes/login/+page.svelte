<script type="ts">
    import LoginForm from "$components/form/login-form.svelte";
    import { addToast } from "$components/ui/toaster/toaster.svelte";

    function onLoggedHandler() {
        addToast({
            data: {
                title: 'Welcome! 👋',
                description: "You will be redirected in a few seconds...",
                color: 'bg-success',
            }
        })
    }
</script>

<LoginForm on:logged={onLoggedHandler}/>
