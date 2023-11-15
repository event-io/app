<script>
    import SignUpForm from "$components/form/sign-up-form.svelte";
    import { addToast } from "$components/ui/toaster/toaster.svelte";

    function onRegisteredHandler() {
        addToast({
                data: {
                    title: `Congratulazioni! Manca l'ultimo step.`,
                    description: "Controlla la tua casella e conferma la mail",
                    color: 'bg-success',
                }
            })
    }
</script>

<SignUpForm on:registered={onRegisteredHandler}/>
