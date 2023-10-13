<script type="ts">
    import LoginForm from "$components/LoginForm.svelte";
    import { addToast } from "$components/Toast.svelte";

    const onLogged = addToast({
        data: {
            title: 'Welcome! 👋',
            description: "You will be redirected in a few seconds...",
            color: 'bg-success',
        }
    })
</script>

<LoginForm on:logged={onLogged}/>
